import { Song } from '../source/song';
import { blackswan } from '../source/base';

let mysong = blackswan.song('repeats');

// Default tempo and time signature will be fine.

let note = blackswan.note('c4', 1);
let chord = blackswan.chord(['c4', 'e4', 'g4'], 1);

// Repeat c4 four times, then repeat the chord twice
mysong.at(0).repeats(note, { every: 1, times: 4 });
mysong.at(1).repeats(chord, { every: 1, times: 2 });

export { mysong }
