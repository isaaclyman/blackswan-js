import { PianoData } from './piano-data';
function isTimedChord(value) {
    return value.Notes !== undefined;
}
function isTimedNote(value) {
    return value.Note !== undefined;
}
function validateNote(note) {
    if (!~PianoData.Notes.indexOf(note)) {
        throw Error(`"${note}" is not a valid note name between "a" and "g".`);
    }
}
function validateOctave(octave) {
    octave = Number(octave);
    if (isNaN(octave)) {
        throw Error(`Invalid octave "${octave}".`);
    }
    if (octave > 8 || octave < 0) {
        throw Error(`This octave is out of range (0 - 8) on a standard piano.`);
    }
}
function validateSign(sign) {
    if (!~PianoData.FlatSigns.indexOf(sign) && !~PianoData.SharpSigns.indexOf(sign)) {
        throw Error(`Invalid sign "${sign}".`);
    }
}
let Validate = {
    isTimedChord,
    isTimedNote,
    Note: validateNote,
    Octave: validateOctave,
    Sign: validateSign
};
export { Validate };
//# sourceMappingURL=validate.js.map