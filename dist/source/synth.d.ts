import { Style } from './style';
export interface Note {
    Frequency: number;
    GetNoteNodes: (this: Note) => NoteNodes;
    Play: (this: Note, startSeconds: number, stopSeconds: number) => void;
    Style: Style[];
}
export interface NoteNodes {
    Gain: GainNode;
    Oscillator: OscillatorNode;
}
declare let Synth: {
    Context: AudioContext;
    SetGain: (gain: (style: Style[]) => GainNode) => void;
    SetOscillator: (oscillator: (frequency: number) => OscillatorNode) => void;
    SetPlayer: (player: (note: Note, startSeconds: number, stopSeconds: number) => void) => void;
    SynthesizeNote: (frequency: number, style: Style[]) => Note;
};
export { Synth };
