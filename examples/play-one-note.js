import { Song } from '../source/song';
import { blackswan } from '../source/base';

let mysong = blackswan.song('one note');

// Default tempo and time signature will be fine.

// Play c4 for two seconds (four measures)
mysong.at(0).plays(blackswan.note('c4', 4));

export { mysong }
