import { Song } from './song';
declare let Player: {
    play: (this: Song, when?: number) => void;
    stop: (this: Song) => void;
};
export { Player };
