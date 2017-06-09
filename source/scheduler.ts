import { Song } from './song';
import { Note } from './synth';

export interface ActionContext {
  Measure: number,
  Song: Song
}

export interface Actions {
  improvises: (improvisable: TimedNote | TimedChord | Sequence) => void,
  plays: (playable: any) => void,
  repeats: (repeatable: any) => void,
}

export interface Moment {
  Duration: number,
}

export interface Rest extends Moment { }

export interface Sequence extends Array<Moment> { }

export interface TimedChord extends Moment {
  Chord: TimedNote[]
}

export interface TimedNote extends Moment {
  Note: Note,
}

function improvises(this: ActionContext, scale: any[]) {

}

function plays(this: ActionContext, playable: TimedNote | TimedChord | Sequence): void {

}

function repeats(this: ActionContext, repeatable: any): void {

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
