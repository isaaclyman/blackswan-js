import { Style } from './style';
import { Scale, ImproviseConfig } from './improviser';
import { Rest, Sequence, TimedChord, TimedNote } from './scheduler';
import { Song } from './song';
declare let Base: {
    as: typeof Style;
    chord: (notes: string[], duration: number, ...config: Style[]) => TimedChord;
    note: (noteName: string, duration: number, ...config: Style[]) => TimedNote;
    rest: (duration: number) => Rest;
    scale: (playables: (string | string[])[], config?: ImproviseConfig | undefined) => Scale;
    sequence: (sequence: Sequence) => Sequence;
    song: (title: string) => Song;
};
export { Base as blackswan };
