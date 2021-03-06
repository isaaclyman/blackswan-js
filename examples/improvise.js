import { Song } from '../source/song';
import { blackswan } from '../source/base';

let mysong = blackswan.song('improvise');

// Default tempo and time signature will be fine.

let scale = blackswan.scale([
  'c4', 'e4', 'f4', 'g4', 'c5',
  ['e4', 'g4']
], {
  durations: [1/4, 1/4, 1/2],
  style: []
});

mysong.at(0).improvises(scale, 4);

export { mysong }
