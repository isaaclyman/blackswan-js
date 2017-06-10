import { Rest, Sequence, TimedChord, TimedNote } from './scheduler';
declare let Validate: {
    isTimedChord: (value: TimedChord | TimedNote | Rest | Sequence) => value is TimedChord;
    isTimedNote: (value: TimedChord | TimedNote | Rest | Sequence) => value is TimedNote;
    Note: (note: string) => void;
    Octave: (octave: string | number) => void;
    Sign: (sign: string) => void;
};
export { Validate };
