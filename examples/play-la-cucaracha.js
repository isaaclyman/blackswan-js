import { Song } from '../source/song';
import { blackswan } from '../source/base';

let mysong = blackswan.song('La Cucaracha');

// Kick up the tempo, arriba!
mysong.setTempo(200);

let la = blackswan.note('c4', 1/8);
let cu = la;
let ca = cu;
let ra = blackswan.note('f4', 3/8);
let cha = blackswan.note('a4', 1/4);

let climb = blackswan.note('f4', 1/4);
let ing = blackswan.note('f4', 1/8);
let up = blackswan.note('e4', 1/8);
let and = up;
let down = blackswan.note('d4', 1/8);
let the = down;
let wall = blackswan.note('c4', 3/8);

let sequence = blackswan.sequence([
  la, cu, ca, ra, cha, la, cu, ca, ra, cha,
  blackswan.rest(3/8),
  climb, ing, up, and, down, the, wall
]);

mysong.at(0).plays(sequence);

export { mysong }
