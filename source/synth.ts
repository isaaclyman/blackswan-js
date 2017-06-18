// This file contains code for generating the piano synth.
// All variables are pluggable so that a user-configured synth
//  can be used seamlessly, and arbitrary notes can be played with
//  arbitrary articulation and dynamics.

import { Style, StyleDynamics } from './style';

export interface Note {
  Frequency: number;
  GetNoteNodes: (this: Note) => NoteNodes;
  Play: (this: Note, startSeconds: number, stopSeconds: number) => void;
  Style: Style[];
}

export interface NoteNodes {
  Gain: GainNode;
  Oscillator: OscillatorNode;
}

let _context = new AudioContext();

function defaultGain(style: Style[]): GainNode {
  let gainNode = _context.createGain();

  let hasDynamics = style.some((st) => {
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

function defaultPlayer(note: Note, startSeconds: number, stopSeconds: number): void {
  let nodes = note.GetNoteNodes();

  nodes.Gain.gain.setTargetAtTime(0, stopSeconds - 0.04, 0.02);

  nodes.Oscillator.start(startSeconds);
  nodes.Oscillator.stop(stopSeconds);
}

let _gain = defaultGain;
let _oscillator = defaultOscillator;
let _player = defaultPlayer;

function synthesizeNote(frequency: number, style: Style[]): Note {
  let note: Note = {
    Frequency: frequency,
    GetNoteNodes: function(this: Note): NoteNodes {
      let gain = _gain(style);
      gain.connect(_context.destination);
      // No need to disconnect a previous oscillator, since the browser
      //  disposes them once Node.stop() is called.
      let oscillator = _oscillator(frequency);
      oscillator.connect(gain);

      let nodes: NoteNodes = {
        Gain: gain,
        Oscillator: oscillator
      };

      return nodes;
    },
    Play: function(this: Note, startSeconds: number, stopSeconds: number): void {
      _player(this, startSeconds, stopSeconds);
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

function setPlayer(player: (note: Note, startSeconds: number, stopSeconds: number) => void) {
  _player = player;
}

let Synth = {
  Context: _context,
  SetGain: setGain,
  SetOscillator: setOscillator,
  SetPlayer: setPlayer,
  SynthesizeNote: synthesizeNote,
};

export { Synth };
