// This file contains code for generating the piano synth.
// All variables are pluggable so that a user-configured synth
//  can be used seamlessly, and arbitrary notes can be played with
//  arbitrary articulation and voicing.

import { Articulation } from './articulation';

let _context = new AudioContext();
let _oscillator:
  (frequency: number) => OscillatorNode
  = null;

function defaultOscillator(frequency: number) {
  let oscillator = _context.createOscillator();
  oscillator.frequency.value = frequency;
  oscillator.type = 'sine';
  return oscillator;
}

interface Note {
  Articulation: Articulation;
  Frequency: number;
  Oscillator: OscillatorNode;
}

function createNote(frequency: number): Note {
  let oscillator = _oscillator
    ? _oscillator(frequency)
    : defaultOscillator(frequency);

  return {
    Articulation: Articulation.None,
    Frequency: frequency,
    Oscillator: oscillator
  };
}

function setOscillator(oscillator: (frequency: number) => OscillatorNode): void {
  _oscillator = oscillator;
}

function playNote(note: Note): void {
  note.Oscillator.connect(_context.destination);
  note.Oscillator.start(0);
}

function stopNote(note: Note): void {
  note.Oscillator.stop();
  note.Oscillator.disconnect(_context.destination);
}

var Synth = {
  CreateNote: createNote,
  SetOscillator: setOscillator,
  StopNote: stopNote,
  PlayNote: playNote,
};

export { Note, Synth };
