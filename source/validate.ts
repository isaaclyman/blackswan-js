import { PianoData } from './piano-data';

function validateNote(note: string): void {
  if (!~PianoData.Notes.indexOf(note)) {
    throw Error(`"${note}" is not a valid note name between "a" and "g".`);
  }
}

function validateOctave(octave: number|string): void {
  octave = Number(octave);

  if (isNaN(octave)) {
    throw Error(`Invalid octave "${octave}".`);
  }

  if (octave > 8 || octave < 0) {
    throw Error(`This octave is out of range (0 - 8) on a standard piano.`);
  }
}

function validateSign(sign: string): void {
  if (!~PianoData.FlatSigns.indexOf(sign) && !~PianoData.SharpSigns.indexOf(sign)) {
    throw Error(`Invalid sign "${sign}".`);
  }
}

let Validate = {
  Note: validateNote,
  Octave: validateOctave,
  Sign: validateSign
};

export { Validate };
