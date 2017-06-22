const WebAudioScheduler = require('web-audio-scheduler');

import { Improviser, Scale } from './improviser';
import { Song } from './song';
import { Note, Synth } from './synth';
import { Validate } from './validate';

export interface ActionContext {
  Measure: number;
  Song: Song;
}

export interface Actions {
  callback: (callback: Function) => void;
  improvises: (improvisable: Scale, duration: number) => void;
  plays: (playable: TimedNote|TimedChord|Sequence) => void;
  repeats: (repeatable: TimedNote|TimedChord, config: RepeatConfig) => void;
}

export interface Moment {
  Duration: number;
}

export interface RepeatConfig {
  every: number;
  times: number;
}

export interface Rest extends Moment { }

export interface Sequence extends Array<TimedNote|TimedChord|Rest> { }

export interface TimedChord extends Moment {
  Notes: Note[];
}

export interface TimedNote extends Moment {
  Note: Note;
}

export interface Track {
  Notes: Note[];
  WhenSeconds: number; // in seconds
  DurationSeconds: number; // also in seconds
}

function improvises(context: ActionContext, improvisable: Scale, duration: number): void {
  let improvisedSequence = Improviser.improvise(improvisable, duration);
  plays(context, improvisedSequence);
}

function plays(context: ActionContext, playable: TimedNote|TimedChord|Sequence): void {
  let tracksToAdd = getTracks(context, playable);
  context.Song._master = context.Song._master.concat(tracksToAdd);
}

function repeats(context: ActionContext, repeatable: TimedNote|TimedChord, config: RepeatConfig): void {
  let tracksToAdd: Track[] = [];
  let baseTrack: Track = getTracks(context, repeatable)[0];

  for (let index = 0; index < config.times; index++) {
    let track: Track = {
      Notes: baseTrack.Notes,
      DurationSeconds: baseTrack.DurationSeconds,
      WhenSeconds: baseTrack.WhenSeconds + (index * noteValueToSeconds(config.every, context.Song))
    };
    tracksToAdd.push(track);
  }

  context.Song._master = context.Song._master.concat(tracksToAdd);
}

function noteValueToMeasures(noteValue: number, song: Song): number {
  return noteValue * (
    song._metadata.TimeSignature.noteValue /
    song._metadata.TimeSignature.beatsPerMeasure
  );
}

function noteValueToSeconds(noteValue: number, song: Song): number {
  let beatsPerMinute = song._metadata.Tempo;
  let secondsPerMinute = 60;
  let secondsPerBeat = secondsPerMinute / beatsPerMinute;

  let beats = noteValue * song._metadata.TimeSignature.noteValue;

  return secondsPerBeat * beats;
}

function measuresToSeconds(measures: number, song: Song): number {
  let beatsPerMinute = song._metadata.Tempo;
  let secondsPerMinute = 60;
  let beatsPerSecond = beatsPerMinute / secondsPerMinute;
  let beatsPerMeasure = song._metadata.TimeSignature.beatsPerMeasure;
  let secondsPerMeasure = beatsPerMeasure / beatsPerSecond;

  return secondsPerMeasure * measures;
}

function getTracks(context: ActionContext, playable: TimedNote|TimedChord|Sequence): Track[] {
  let WhenSeconds = measuresToSeconds(context.Measure, context.Song);

  if (Validate.isTimedNote(playable)) {
    let track: Track = {
      Notes: [playable.Note],
      DurationSeconds: noteValueToSeconds(playable.Duration, context.Song),
      WhenSeconds: WhenSeconds
    };
    return [track];
  } else if (Validate.isTimedChord(playable)) {
    let track: Track = {
      Notes: playable.Notes,
      DurationSeconds: noteValueToSeconds(playable.Duration, context.Song),
      WhenSeconds: WhenSeconds
    };
    return [track];
  } else {
    return playable.map((item, index) => {
      if (index > 0) {
        context.Measure += noteValueToMeasures(playable[index - 1].Duration, context.Song);
      }

      if (Validate.isTimedNote(item)) {
        return getTracks(context, item);
      } else if (Validate.isTimedChord(item)) {
        return getTracks(context, item);
      } else {
        let track: Track = {
          Notes: [],
          DurationSeconds: noteValueToSeconds(item.Duration, context.Song),
          WhenSeconds: WhenSeconds
        };
        return [track];
      }
    }).reduce((a, b) => a.concat(b), []);
  }
}

function getActions(song: Song, measure: number): Actions {
  let context = Synth.Context;
  let scheduler = new WebAudioScheduler({ context });
  scheduler.start();

  let actionContext: ActionContext = {
    Measure: measure,
    Song: song
  };

  let actions: Actions = {
    callback: function(callback: Function) {
      let whenSeconds = measuresToSeconds(measure, song);
      scheduler.insert(whenSeconds + context.currentTime, callback);
    },
    improvises: function(improvisable: Scale, duration: number) {
      return improvises(actionContext, improvisable, duration);
    },
    plays: function (playable: TimedNote|TimedChord|Sequence) {
      return plays(actionContext, playable);
    },
    repeats: function (repeatable: TimedNote|TimedChord, config: RepeatConfig) {
      return repeats(actionContext, repeatable, config);
    }
  } as Actions;

  return actions;
}

let Scheduler = {
  GetActions: getActions,
};

export { Scheduler };
