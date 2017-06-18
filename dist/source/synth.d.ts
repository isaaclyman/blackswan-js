import { Style } from './style';
export interface Note {
    Frequency: number;
    Gain: GainNode;
    GetOscillator: (this: Note) => OscillatorNode;
    Style: Style[];
}
declare let Synth: {
    Context: AudioContext;
    SetGain: (gain: (style: Style[]) => GainNode) => void;
    SetOscillator: (oscillator: (frequency: number) => OscillatorNode) => void;
    SynthesizeNote: (frequency: number, style: Style[]) => Note;
};
export { Synth };
