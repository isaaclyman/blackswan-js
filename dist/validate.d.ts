import { Rest, Sequence, TimedChord, TimedNote } from './scheduler';
declare let Validate: {
    isTimedChord: (value: TimedNote | TimedChord | Sequence | Rest) => value is TimedChord;
    isTimedNote: (value: TimedNote | TimedChord | Sequence | Rest) => value is TimedNote;
    Note: (note: string) => void;
    Octave: (octave: string | number) => void;
    Sign: (sign: string) => void;
};
export { Validate };
