import { Articulation } from './articulation';
export interface Note {
    Articulation: Articulation[];
    Frequency: number;
    Oscillator: OscillatorNode;
}
declare var Synth: {
    SetOscillator: (oscillator: (frequency: number) => OscillatorNode) => void;
    StopNote: (note: Note) => void;
    SynthesizeNote: (frequency: number, articulation: Articulation[]) => Note;
    PlayNote: (note: Note) => void;
};
export { Synth };
