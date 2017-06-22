import { Song } from '../source/song';
import { blackswan } from '../source/base';

let mysong = blackswan.song('strange notes');

mysong.at(0).plays(blackswan.sequence([
  blackswan.note('c', 1/4),
  blackswan.note('c#', 1/4),
  blackswan.note('c@4', 1/4),
  blackswan.note('cb4', 1/4),
  blackswan.note('A5', 1/4),
  blackswan.note('b#', 1/4)
]));

export { mysong }
