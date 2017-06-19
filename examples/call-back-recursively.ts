import { Song } from '../source/song';
import { blackswan } from '../source/base';
import { mysong as LaCucaracha } from './play-la-cucaracha';

// Play La Cucaracha continuously, on a loop
function recurse() {
  LaCucaracha.at(4).callback(recurse);

  LaCucaracha.play();
};

let wrapper = {
  play: recurse
};

export { wrapper as mysong }
