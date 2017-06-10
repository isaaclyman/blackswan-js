// This file contains code for generating the piano synth.
// All variables are pluggable so that a user-configured synth
//  can be used seamlessly, and arbitrary notes can be played with
//  arbitrary articulation and dynamics.

import { Style, StyleDynamics } from './style';

export interface Note {
  Frequency: number;
  Gain: GainNode;
  Oscillator: OscillatorNode;
  Style: Style[];
}

let _context = new AudioContext();

function defaultGain(style: Style[]): GainNode {
  let gainNode = _context.createGain();

  for (var st of style) {
    let dynamics: number = (<any>StyleDynamics)[st];
    if (dynamics) {
      gainNode.gain.value = dynamics;
    }
  }

  return gainNode;
}

function defaultOscillator(frequency: number): OscillatorNode {
  let oscillator = _context.createOscillator();
  oscillator.frequency.value = frequency;
  oscillator.type = 'sine';
  return oscillator;
}

let _oscillator = defaultOscillator;
let _gain = defaultGain;

let _memoizedNotes: Note[] = [];

function getMemoizedNote(frequency: number, style: Style[]): Note | undefined {
  return _memoizedNotes.find(
    (note) => note.Frequency === frequency && note.Style.every(
      (art) => !!~style.indexOf(art)
    )
  );
}

function synthesizeNote(frequency: number, style: Style[]): Note {
  let memoizedNote = getMemoizedNote(frequency, style);

  if (memoizedNote) {
    return memoizedNote;
  }

  let gain = _gain(style);
  let oscillator = _oscillator(frequency);
  oscillator.connect(gain);
  gain.connect(_context.destination);

  let note = {
    Frequency: frequency,
    Gain: gain,
    Oscillator: oscillator,
    Style: style,
  };

  _memoizedNotes.push(note);

  return note;
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
