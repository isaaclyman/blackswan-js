import { Song } from '../source/song';
import { blackswan } from '../source/base';

let mysong = blackswan.song('play then stop');

// Default tempo and time signature will be fine.

// Play c4 for a while
mysong.at(0).plays(blackswan.note('c4', 4));
setTimeout(() => {
  mysong.stop()
}, 1000)
setTimeout(() => {
  mysong.play()
}, 2000)

export { mysong }
