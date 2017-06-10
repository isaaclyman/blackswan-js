// This file contains code for generating the piano synth.
// All variables are pluggable so that a user-configured synth
//  can be used seamlessly, and arbitrary notes can be played with
//  arbitrary articulation and voicing.

import { Articulation } from './articulation';

export interface Note {
  Articulation: Articulation[];
  Frequency: number;
  Oscillator: OscillatorNode;
}

let _context = new AudioContext();

function defaultOscillator(frequency: number): OscillatorNode {
  let oscillator = _context.createOscillator();
  oscillator.frequency.value = frequency;
  oscillator.type = 'sine';
  return oscillator;
}

let _oscillator = defaultOscillator;

let _memoizedNotes: Note[] = [];

function getMemoizedNote(frequency: number, articulation: Articulation[]): Note | undefined {
  return _memoizedNotes.find(
    (note) => note.Frequency === frequency && note.Articulation.every(
      (art) => !!~articulation.indexOf(art)
    )
  );
}

function synthesizeNote(frequency: number, articulation: Articulation[]): Note {
  let memoizedNote = getMemoizedNote(frequency, articulation);

  return memoizedNote || {
    Articulation: articulation,
    Frequency: frequency,
    Oscillator: _oscillator(frequency)
  };
}

function setOscillator(oscillator: (frequency: number) => OscillatorNode): void {
  _oscillator = oscillator;
}

var Synth = {
  Context: _context,
  SetOscillator: setOscillator,
  SynthesizeNote: synthesizeNote,
};

export { Synth };
