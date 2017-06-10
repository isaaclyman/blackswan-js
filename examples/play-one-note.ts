import { blackswan } from '../source/base';

let song = blackswan.song('one note');

// Default tempo and time signature will be fine.

song.at(0).plays(blackswan.note('c4', 4));

song.play();
