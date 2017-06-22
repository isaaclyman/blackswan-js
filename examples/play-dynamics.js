import { Song } from '../source/song';
import { blackswan } from '../source/base';

let mysong = blackswan.song('dynamics');

// Default tempo and time signature will be fine.

mysong.at(0).plays(blackswan.sequence([
  blackswan.note('a4', 1/4, blackswan.as.Pianissimo),
  blackswan.note('a4', 1/4, blackswan.as.Piano),
  blackswan.note('a4', 1/4, blackswan.as.MezzoPiano),
  blackswan.note('a4', 1/4, blackswan.as.MezzoForte),
  blackswan.note('a4', 1/4, blackswan.as.Forte),
  blackswan.note('a4', 1/4, blackswan.as.Fortissimo),
]));

export { mysong }
