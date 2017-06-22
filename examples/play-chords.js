import { Song } from '../source/song';
import { blackswan } from '../source/base';

let mysong = blackswan.song('chords');

// Default tempo and time signature will be fine.

let sequence = blackswan.sequence([
  blackswan.chord(['c4', 'e4', 'g4'], 1/4),
  blackswan.chord(['d4', 'f4', 'a4'], 1/4),
  blackswan.chord(['e4', 'g4', 'b4'], 1/4),
  blackswan.rest(1/4),
  blackswan.chord(['f4', 'a4', 'c5'], 1/4)
]);

// Play c4 for two seconds (four measures)
mysong.at(0).plays(sequence);

export { mysong }
