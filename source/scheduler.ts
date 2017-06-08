import { Note } from './synth';

interface Rest {
  Duration: number,
}

interface TimedNote {
  Duration: number,
  Note: Note,
}

export { Rest, TimedNote }
