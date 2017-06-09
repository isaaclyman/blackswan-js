import { Actions } from './scheduler';
export interface Song {
    at: (measure: number) => Actions;
    play: () => void;
    setTimeSignature: (numerator: number, denominator: number) => void;
    setTempo: (tempo: number) => void;
    _metadata: SongMetadata;
}
export interface SongMetadata {
    Tempo: number;
    TimeSignature: TimeSignature;
    Title: string;
}
export interface TimeSignature {
    beatsPerBar: number;
    noteValue: number;
}
declare function DefaultSongData(): SongMetadata;
export { DefaultSongData };
