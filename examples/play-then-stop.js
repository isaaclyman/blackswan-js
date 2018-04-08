import { Song } from '../source/song';
import { blackswan } from '../source/base';

let mysong = blackswan.song('play then stop');

// Default tempo and time signature will be fine.

// Play c4 for a while
mysong.at(0).plays(blackswan.note('c4', 16));
mysong.at(1).callback(() => {
  mysong.stop()
})

export { mysong }
