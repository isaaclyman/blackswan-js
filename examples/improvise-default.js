import { Song } from '../source/song';
import { blackswan } from '../source/base';

let mysong = blackswan.song('improvise with default settings');

mysong.at(0).improvises(blackswan.scale([
  'a4', 'b4', 'c5', 'e5'
]), 4);

export { mysong }
