import { PianoData } from './piano-data';
import { Validate } from './validate';

function createNote(noteName: string, frequency: number, overrideExisting: boolean = false): void {
  if (!overrideExisting && !!PianoData.NoteMap[noteName]) {
    throw Error(`
      The note "${noteName}" already exists and cannot be overwritten unless
      the 'overrideExisting' parameter is set to 'true'.`
    );
  }

  PianoData.NoteMap[noteName] = frequency;
  return;
}

let _octave = 4;
function setOctave(newOctave: number|string): void {
  Validate.Octave(newOctave);
  _octave = Number(newOctave);
}

function getNoteIndex(note: string): number {
  Validate.Note(note);
  let index = PianoData.Notes.indexOf(note);
  return index;
}

function getNextNote(note: string): string {
  let currentNote = getNoteIndex(note);
  return currentNote + 1 < PianoData.Notes.length
    ? PianoData.Notes[currentNote + 1]
    : PianoData.Notes[0];
}

function getPrevNote(note: string): string {
  let currentNote = getNoteIndex(note);
  return currentNote > 0
    ? PianoData.Notes[currentNote - 1]
    : PianoData.Notes[PianoData.Notes.length - 1];
}

function getFrequency(noteName: string): number {
  let byKey = PianoData.NoteMap[noteName];
  if (byKey) {
    return byKey;
  }

  let key: string,
      note: string,
      sign: string = '',
      octave: number;

  note = noteName[0].toLowerCase();
  if (noteName.length === 3) {
    sign = noteName[1];
    Validate.Sign(sign);
    octave = Number(noteName[2]);
    Validate.Octave(octave);
  } else if (noteName.length === 2) {
    if (!!~PianoData.FlatSigns.indexOf(noteName[1]) || !!~PianoData.SharpSigns.indexOf(noteName[1])) {
      sign = noteName[1];
      octave = _octave;
    } else {
      octave = Number(noteName[1]);
    }
  } else if (noteName.length === 1) {
    octave = _octave;
  } else {
    throw Error(`Unrecognized note format "${noteName}".`);
  }

  if (!!~'abdeg'.indexOf(note) && !!~PianoData.FlatSigns.indexOf(sign)) {
    // If it's ABDEG-flat, transform into a sharp
    // This will never change octaves, because C is not in this group
    key = getPrevNote(note) +
      '#' +
      octave;
    return PianoData.NoteMap[key];
  } else if (!!~'cf'.indexOf(note) && !!~PianoData.FlatSigns.indexOf(sign)) {
    // If it's CF-flat, transform into the next note down
    // This changes octaves if the note is a C
    key = getPrevNote(note) +
      (note === 'c' ?
        (octave - 1).toString() :
        octave.toString());

    return PianoData.NoteMap[key];
  } else if (!!~'be'.indexOf(note) && !!~PianoData.SharpSigns.indexOf(sign)) {
    // If it's BE-sharp, transform it into the next note up
    // This changes octaves if the note is a B
    key = getNextNote(note) +
      (note === 'b' ?
        (octave + 1).toString() :
        octave.toString());
    return PianoData.NoteMap[key];
  } else {
    key = note + (sign || '') + (octave || '');
    let byConstructedKey = PianoData.NoteMap[key];

    if (byConstructedKey) {
      return byConstructedKey;
    }
  }

  throw Error(`The note "${noteName}" is unknown.`);
}

let Notes = {
  createNote,
  getFrequency,
  setOctave
};

export { Notes };
