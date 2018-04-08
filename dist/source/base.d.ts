import { Style } from './style';
import { Scale, ImproviseConfig } from './improviser';
import { Rest, Sequence, TimedChord, TimedNote } from './scheduler';
import { Song } from './song';
import { Note } from './synth';
export interface Settings {
    setGain: (gain: (frequency: number, style: Style[], masterGain: GainNode) => GainNode) => void;
    setImproviser: (improviser: (scale: Scale, duration: number) => Sequence) => void;
    setOscillator: (oscillator: (frequency: number, style: Style[], gainNode: GainNode) => OscillatorNode) => void;
    setPlayer: (player: (note: Note, startSeconds: number, stopSeconds: number) => void) => void;
}
declare let Base: {
    as: typeof Style;
    chord: (notes: string[], duration: number, ...config: Style[]) => TimedChord;
    note: (noteName: string, duration: number, ...config: Style[]) => TimedNote;
    rest: (duration: number) => Rest;
    scale: (playables: (string | string[])[], config?: ImproviseConfig) => Scale;
    sequence: (sequence: Sequence) => Sequence;
    settings: Settings;
    song: (title: string) => Song;
};
export { Base as blackswan };
export default Base;
