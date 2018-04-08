import { Style } from './style';
export interface Note {
    Frequency: number;
    GetNodeChain: (this: Note) => NodeChain;
    Play: (this: Note, startSeconds: number, stopSeconds: number) => void;
    Stop: (this: Note) => void;
    Style: Style[];
    _nodeChain: NodeChain;
}
export interface NodeChain {
    Gain: GainNode;
    Oscillator: OscillatorNode;
}
declare let Synth: {
    Context: AudioContext;
    SetGain: (gain: (frequency: number, style: Style[], masterGain: GainNode) => GainNode) => void;
    SetOscillator: (oscillator: (frequency: number, style: Style[], gainNode: GainNode) => OscillatorNode) => void;
    SetPlayer: (player: (note: Note, startSeconds: number, stopSeconds: number) => void) => void;
    SynthesizeNote: (frequency: number, style: Style[]) => Note;
};
export { Synth };
