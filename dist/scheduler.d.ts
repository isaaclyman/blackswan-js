import { Song } from './song';
import { Note } from './synth';
export interface ActionContext {
    Measure: number;
    Song: Song;
}
export interface Actions {
    improvises: (this: ActionContext, improvisable: any) => void;
    plays: (this: ActionContext, playable: TimedNote | TimedChord | Sequence) => void;
    repeats: (this: ActionContext, repeatable: TimedNote | TimedChord, config: RepeatConfig) => void;
}
export interface Moment {
    Duration: number;
}
export interface RepeatConfig {
    every: number;
    times: number;
}
export interface Rest extends Moment {
}
export interface Sequence extends Array<TimedNote | TimedChord | Rest> {
}
export interface TimedChord extends Moment {
    Notes: Note[];
}
export interface TimedNote extends Moment {
    Note: Note;
}
export interface Track {
    Notes: Note[];
    WhenSeconds: number;
    DurationSeconds: number;
}
declare let Scheduler: {
    GetActions: (this: Song, measure: number) => Actions;
};
export { Scheduler };
