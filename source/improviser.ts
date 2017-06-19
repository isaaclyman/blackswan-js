import { blackswan } from './base';
import { Sequence, TimedChord, TimedNote } from './scheduler';
import { Style } from './style'

export interface ImproviseConfig {
  durations: number[];
  style: Style[];
}

export interface Scale {
  Config: ImproviseConfig;
  Playables: Array<string|Array<string>>;
}

function getRandomElement<T>(elements: Array<T>): T {
  // maximum is exclusive here, so highest number returned will be
  //  (notes.length - 1)
  let max = elements.length;
  let index = Math.floor(Math.random() * max);

  return elements[index];
}

let _improviser = function getImprovisedSequence(scale: Scale, duration: number): Sequence {
  let cursor = 0;
  let nextDuration: number = getRandomElement(scale.Config.durations);
  let sequence: Sequence = [];

  while (cursor + nextDuration < duration) {
    let nextPlay = getRandomElement(scale.Playables);

    if (Array.isArray(nextPlay)) {
      let nextChord: TimedChord = blackswan.chord(nextPlay, nextDuration, ...scale.Config.style);
      sequence.push(nextChord);
    } else {
      let nextNote: TimedNote = blackswan.note(nextPlay, nextDuration, ...scale.Config.style);
      sequence.push(nextNote);
    }

    cursor += nextDuration;
    nextDuration = getRandomElement(scale.Config.durations);
  }

  return sequence;
}

function improvise(scale: Scale, duration: number): Sequence {
  return _improviser(scale, duration);
}

function setImproviser(improviser: (scale: Scale, duration: number) => Sequence): void {
  _improviser = improviser;
}

let Improviser = {
  improvise,
  setImproviser
};

export { Improviser };
