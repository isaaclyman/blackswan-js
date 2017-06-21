import { Song } from '../source/song';
import { blackswan } from '../source/base';

let mysong = blackswan.song('one note');

// Default tempo and time signature will be fine.

function createNotes(octave) {
  let noteNames = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
  return noteNames.map((name) => name + octave);
}

let lowerNotes = createNotes(1).concat(createNotes(2)).concat(createNotes(3));
let middleNotes = createNotes(4).concat(createNotes(5));
let highNotes = createNotes(6).concat(createNotes(7));

function createGliss(notesArr) {
  let glissArr = [];

  for (let note of notesArr) {
    glissArr.push(blackswan.note(note, 0.15));
  }

  return blackswan.sequence(glissArr);
}

mysong.at(0).plays(createGliss(lowerNotes));
mysong.at(1).plays(createGliss(middleNotes));
mysong.at(2).plays(createGliss(highNotes));

export { mysong }
