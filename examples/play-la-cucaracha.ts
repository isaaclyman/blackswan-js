import { Song } from '../source/song';
import { blackswan } from '../source/base';

let mysong = blackswan.song('La Cucaracha');

// Default tempo and time signature will be fine.

let la = blackswan.note('c4', 0.5);
let cu = la;
let ca = cu;
let ra = blackswan.note('f4', 1.5);
let cha = blackswan.note('a4', 1);

let climb = blackswan.note('f4', 1);
let ing = blackswan.note('f4', 0.5);
let up = blackswan.note('e4', 0.5);
let and = up;
let down = blackswan.note('d4', 0.5);
let the = down;
let wall = blackswan.note('c4', 1.5);

let sequence = blackswan.sequence([
  la, cu, ca, ra, cha, la, cu, ca, ra, cha,
  blackswan.rest(1.5),
  climb, ing, up, and, down, the, wall
]);

mysong.at(0).plays(sequence);

export { mysong }
