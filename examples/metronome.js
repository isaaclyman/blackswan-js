import { Song } from '../source/song';
import { blackswan } from '../source/base';

let mysong = blackswan.song('metronome');
mysong.setTempo(120);
mysong.setTimeSignature(4, 4);

mysong.at(0).repeats(blackswan.note('a3', 1/4), { every: 1/2, times: 20 });
mysong.at(0.25).repeats(blackswan.note('a4', 1/4), { every: 1/2, times: 20 });

export { mysong }
