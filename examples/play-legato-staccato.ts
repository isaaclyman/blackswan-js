import { Song } from '../source/song';
import { blackswan } from '../source/base';

let mysong = blackswan.song('legato and staccato');

// Default tempo and time signature will be fine.

// Play a few staccato notes
let staccatoSeq = blackswan.sequence([
  blackswan.note('c4', 1, blackswan.as.Staccato),
  blackswan.note('e4', 1, blackswan.as.Staccato),
  blackswan.note('c4', 1, blackswan.as.Staccato)
]);

// Play a couple of legato chords
let legatoSeq = blackswan.sequence([
  blackswan.chord(['c4', 'f4', 'g4'], 1, blackswan.as.Legato),
  blackswan.chord(['c4', 'e4', 'g4'], 1, blackswan.as.Legato)
]);

mysong.at(0).plays(staccatoSeq);
mysong.at(0.75).plays(legatoSeq);

export { mysong }
