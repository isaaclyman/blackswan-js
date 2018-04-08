import { Rest, Sequence, TimedChord, TimedNote } from './scheduler';
declare let Validate: {
    isTimedChord: (value: Sequence | TimedChord | TimedNote | Rest) => value is TimedChord;
    isTimedNote: (value: Sequence | TimedChord | TimedNote | Rest) => value is TimedNote;
    Note: (note: string) => void;
    Octave: (octave: string | number) => void;
    Sign: (sign: string) => void;
};
export { Validate };
