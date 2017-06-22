import { Song } from '../source/song';
import { blackswan } from '../source/base';

let mysong = blackswan.song('one note');

// Default tempo and time signature will be fine.

// Play c4 as a whole note
mysong.at(0).plays(blackswan.note('c4', 1));

export { mysong }
