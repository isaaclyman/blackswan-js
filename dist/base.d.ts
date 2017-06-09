import { Articulation } from './articulation';
import { Rest, Sequence, TimedChord, TimedNote } from './scheduler';
import { Song } from './song';
declare let Base: {
    as: typeof Articulation;
    chord: (notes: string[], duration: number, ...config: Articulation[]) => TimedChord;
    note: (noteName: string, duration: number, ...config: Articulation[]) => TimedNote;
    rest: (duration: number) => Rest;
    sequence: (sequence: Sequence) => Sequence;
    song: (title: string) => Song;
};
export { Base as blackswan };
