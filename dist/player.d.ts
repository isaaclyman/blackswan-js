import { Song } from './song';
declare let Player: {
    play: (this: Song) => void;
};
export { Player };
