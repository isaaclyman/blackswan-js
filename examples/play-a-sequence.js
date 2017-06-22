import { Song } from '../source/song';
import { blackswan } from '../source/base';

let mysong = blackswan.song('sequence');

// Default tempo and time signature will be fine.

let sequence = blackswan.sequence([
  blackswan.note('c4', 1/4),
  blackswan.note('d4', 1/4),
  blackswan.note('e4', 1/4),
  blackswan.rest(1/4),
  blackswan.note('f4', 1/4)
]);

// Play c4 for two seconds (four measures)
mysong.at(0).plays(sequence);

export { mysong }
