declare let Notes: {
    createNote: (noteName: string, frequency: number, overrideExisting?: boolean) => void;
    getFrequency: (noteName: string) => number;
    setOctave: (newOctave: string | number) => void;
};
export { Notes };
