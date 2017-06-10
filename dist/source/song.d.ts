import { Actions, Track } from './scheduler';
export interface Song {
    at: (this: Song, measure: number) => Actions;
    play: () => void;
    setTimeSignature: (numerator: number, denominator: number) => void;
    setTempo: (tempo: number) => void;
    _master: Track[];
    _metadata: SongMetadata;
}
export interface SongMetadata {
    Tempo: number;
    TimeSignature: TimeSignature;
    Title: string;
}
export interface TimeSignature {
    beatsPerMeasure: number;
    noteValue: number;
}
declare function DefaultSongData(): SongMetadata;
export { DefaultSongData };
