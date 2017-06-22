import { Song } from '../source/song';
import { blackswan } from '../source/base';

let mysong = blackswan.song('repeats');

// Default tempo and time signature will be fine.

let note = blackswan.note('c4', 1/4);
let chord = blackswan.chord(['e4', 'g4'], 1/4);

// Repeat c4 four times, then repeat the chord twice
mysong.at(0).repeats(note, { every: 1/4, times: 4 });
mysong.at(0.25).repeats(chord, { every: 1/4, times: 2 });

export { mysong }
