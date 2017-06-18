import { Song } from './song';
import { Note } from './synth';
import { Validate } from './validate';

export interface ActionContext {
  Measure: number,
  Song: Song
}

export interface Actions {
  improvises: (improvisable: any) => void,
  plays: (playable: TimedNote|TimedChord|Sequence) => void,
  repeats: (repeatable: TimedNote|TimedChord, config: RepeatConfig) => void,
}

export interface Moment {
  Duration: number
}

export interface RepeatConfig {
  every: number,
  times: number,
}

export interface Rest extends Moment { }

export interface Sequence extends Array<TimedNote|TimedChord|Rest> { }

export interface TimedChord extends Moment {
  Notes: Note[]
}

export interface TimedNote extends Moment {
  Note: Note,
}

export interface Track {
  Notes: Note[],
  WhenSeconds: number, // in seconds
  DurationSeconds: number, // also in seconds
}

function improvises(context: ActionContext, scale: any[]) {

}

function plays(context: ActionContext, playable: TimedNote|TimedChord|Sequence): void {
  let tracksToAdd = getTracks(context, playable);
  context.Song._master = context.Song._master.concat(tracksToAdd);
}

function repeats(context: ActionContext, repeatable: TimedNote|TimedChord, config: RepeatConfig): void {
  let tracksToAdd: Track[] = [];
  let baseTrack: Track = getTracks(context, repeatable)[0];

  for (var index = 0; index < config.times; index++) {
    let track: Track = {
      Notes: baseTrack.Notes,
      DurationSeconds: baseTrack.DurationSeconds,
      WhenSeconds: baseTrack.WhenSeconds + (index * beatsToSeconds(config.every, context.Song))
    };
    tracksToAdd.push(track);
  }

  context.Song._master = context.Song._master.concat(tracksToAdd);
}

function beatsToSeconds(beats: number, song: Song): number {
  let beatsPerMinute = song._metadata.Tempo;
  let secondsPerMinute = 60;
  let secondsPerBeat = secondsPerMinute / beatsPerMinute;

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
      DurationSeconds: beatsToSeconds(playable.Duration, context.Song),
      WhenSeconds: WhenSeconds
    };
    return [track];
  } else if (Validate.isTimedChord(playable)) {
    let track: Track = {
      Notes: playable.Notes,
      DurationSeconds: beatsToSeconds(playable.Duration, context.Song),
      WhenSeconds: WhenSeconds
    };
    return [track];
  } else {
    return playable.map((item, index) => {
      if (index > 0) {
        context.Measure += playable[index - 1].Duration;
      }

      if (Validate.isTimedNote(item)) {
        return getTracks(context, item);
      } else if (Validate.isTimedChord(item)) {
        return getTracks(context, item);
      } else {
        let track: Track = {
          Notes: [],
          DurationSeconds: beatsToSeconds(item.Duration, context.Song),
          WhenSeconds: WhenSeconds
        };
        return [track];
      }
    }).reduce((a, b) => a.concat(b));
  }
}

function getActions(song: Song, measure: number): Actions {
  let actionContext: ActionContext = {
    Measure: measure,
    Song: song
  };

  let actions: Actions = {
    improvises: function(improvisable: any) {
      return improvises(actionContext, improvisable);
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
