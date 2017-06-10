import { Style } from './style';
export interface Note {
    Frequency: number;
    Gain: GainNode;
    Oscillator: OscillatorNode;
    Style: Style[];
}
declare var Synth: {
    Context: AudioContext;
    SetOscillator: (oscillator: (frequency: number) => OscillatorNode) => void;
    SynthesizeNote: (frequency: number, style: Style[]) => Note;
};
export { Synth };
