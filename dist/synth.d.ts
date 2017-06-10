import { Articulation } from './articulation';
export interface Note {
    Articulation: Articulation[];
    Frequency: number;
    Oscillator: OscillatorNode;
}
declare var Synth: {
    Context: AudioContext;
    SetOscillator: (oscillator: (frequency: number) => OscillatorNode) => void;
    SynthesizeNote: (frequency: number, articulation: Articulation[]) => Note;
};
export { Synth };
