import { Song } from './song';
import { Note } from './synth';
import { Validate } from './validate';

export interface ActionContext {
  Measure: number,
  Song: Song
}

export interface Actions {
  improvises: (this: ActionContext, improvisable: any) => void,
  plays: (this: ActionContext, playable: TimedNote|TimedChord|Sequence) => void,
  repeats: (this: ActionContext, repeatable: TimedNote|TimedChord, config: RepeatConfig) => void,
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

export interface Track extends Moment {
  Notes: Note[],
  RelativeWhen: number, // in seconds
}

function improvises(this: ActionContext, scale: any[]) {

}

function plays(this: ActionContext, playable: TimedNote|TimedChord|Sequence): void {
  this.Song._master.concat(getTracks(this, playable));
}

function repeats(this: ActionContext, repeatable: TimedNote|TimedChord, config: RepeatConfig): void {
  
}

function getRelativeWhen(measure: number, song: Song): number {
  let beatsPerMinute = song._metadata.Tempo;
  let secondsPerMinute = 60;
  let beatsPerSecond = beatsPerMinute / secondsPerMinute;
  let beatsPerMeasure = song._metadata.TimeSignature.beatsPerMeasure;

  return (beatsPerSecond / beatsPerMeasure) * measure;
}

function getTracks(context: ActionContext, playable: TimedNote|TimedChord|Sequence): Track[] {
  let relativeWhen = getRelativeWhen(context.Measure, context.Song);

  if (Validate.isTimedNote(playable)) {
    let track: Track = {
      Notes: [playable.Note],
      Duration: playable.Duration,
      RelativeWhen: relativeWhen
    };
    return [track];
  } else if (Validate.isTimedChord(playable)) {
    let track: Track = {
      Notes: playable.Notes,
      Duration: playable.Duration,
      RelativeWhen: relativeWhen
    };
    return [track];
  } else {
    return playable.map((item) => {
      if (Validate.isTimedNote(item)) {
        return getTracks(context, item);
      } else if (Validate.isTimedChord(item)) {
        return getTracks(context, item);
      } else {
        let track: Track = {
          Notes: [],
          Duration: item.Duration,
          RelativeWhen: relativeWhen
        };
        return [track];
      }
    }).reduce((a, b) => a.concat(b));
  }
}

function getActions(measure: number, song: Song): Actions {
  let actionContext: ActionContext = {
    Measure: measure,
    Song: song
  };

  let actions: Actions = {
    improvises: improvises.bind(actionContext),
    plays: plays.bind(actionContext),
    repeats: repeats.bind(actionContext)
  };

  return actions;
}

let Scheduler = {
  GetActions: getActions,
};

export { Scheduler };
