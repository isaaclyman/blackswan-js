// This file contains code for generating the piano synth.
// All variables are pluggable so that a user-configured synth
//  can be used seamlessly, and arbitrary notes can be played with
//  arbitrary articulation and dynamics.

import { Style, StyleDynamics } from './style';

export interface Note {
  Frequency: number;
  Gain: GainNode;
  GetOscillator: (this: Note) => OscillatorNode;
  Style: Style[];
}

let _context = new AudioContext();

function defaultGain(style: Style[]): GainNode {
  let gainNode = _context.createGain();

  var hasDynamics = style.some((st) => {
    let dynamics: number = StyleDynamics[st];
    if (dynamics) {
      gainNode.gain.value = dynamics;
      return true;
    }
    return false;
  });

  if (!hasDynamics) {
    gainNode.gain.value = 0.5;
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

function synthesizeNote(frequency: number, style: Style[]): Note {
  let gain = _gain(style);
  gain.connect(_context.destination);

  let note: Note = {
    Frequency: frequency,
    Gain: gain,
    GetOscillator: function(this: Note) {
      // No need to disconnect a previous oscillator, since the browser
      //  disposes them once Node.stop() is called.
      let oscillator = _oscillator(frequency);
      oscillator.connect(this.Gain);
      return oscillator;
    },
    Style: style,
  };

  return note;
}

function setGain(gain: (style: Style[]) => GainNode): void {
  _gain = gain;
}

function setOscillator(oscillator: (frequency: number) => OscillatorNode): void {
  _oscillator = oscillator;
}

var Synth = {
  Context: _context,
  SetGain: setGain,
  SetOscillator: setOscillator,
  SynthesizeNote: synthesizeNote,
};

export { Synth };
