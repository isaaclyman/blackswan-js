import { Song } from './song';
import { Note } from './synth';
export interface ActionContext {
    Measure: number;
    Song: Song;
}
export interface Actions {
    improvises: (improvisable: TimedNote | TimedChord | Sequence) => void;
    plays: (playable: any) => void;
    repeats: (repeatable: any) => void;
}
export interface Moment {
    Duration: number;
}
export interface Rest extends Moment {
}
export interface Sequence extends Array<Moment> {
}
export interface TimedChord extends Moment {
    Chord: TimedNote[];
}
export interface TimedNote extends Moment {
    Note: Note;
}
declare let Scheduler: {
    GetActions: (measure: number, song: Song) => Actions;
};
export { Scheduler };
