import { Improvisable, Playable, Repeatable } from './category-types';
import { Song } from './song';
import { Note } from './synth';

export interface ActionContext {
  Measure: number,
  Song: Song
}

export interface Actions {
  improvises: (improvisable: Improvisable) => void,
  plays: (playable: Playable) => void,
  repeats: (repeatable: Repeatable) => void,
}

export interface Moment {
  Duration: number,
}

export interface Rest extends Moment { }

export interface Sequence extends Array<Moment>, Playable { }

export interface TimedChord extends Moment, Playable {
  Chord: TimedNote[]
}

export interface TimedNote extends Moment, Playable {
  Note: Note,
}

function improvises(this: ActionContext, improvisable: Improvisable): void {

}

function plays<T extends Playable>(this: ActionContext, playable: T): void {

}

function repeats(this: ActionContext, repeatable: Repeatable): void {

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
