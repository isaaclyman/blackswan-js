// This file contains code for generating the piano synth.
// All variables are pluggable so that a user-configured synth
//  can be used seamlessly, and arbitrary notes can be played with
//  arbitrary articulation and dynamics.

import { Style, StyleDynamics } from './style';

export interface Note {
  Frequency: number;
  GetNodeChain: (this: Note) => NodeChain;
  Play: (this: Note, startSeconds: number, stopSeconds: number) => void;
  Style: Style[];
}

interface NodeChain {
  Gain: GainNode;
  Oscillator: OscillatorNode;
}

let _context = new AudioContext();
let masterGain = _context.createGain();
masterGain.connect(_context.destination);

function defaultGain(frequency: number, style: Style[]): GainNode {
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

  let frequencyModifier = ((frequency - 440) / 37600);

  gainNode.gain.value -= frequencyModifier;

  return gainNode;
}

function defaultOscillator(frequency: number, style: Style[], gainNode: GainNode): OscillatorNode {
  let oscillator = _context.createOscillator();
  oscillator.frequency.value = frequency;
  oscillator.type = 'sine';

  oscillator.connect(gainNode);

  return oscillator;
}

function defaultPlayer(note: Note, startSeconds: number, stopSeconds: number): void {
  let nodes = note.GetNodeChain();

  let noteDuration = stopSeconds - startSeconds,
      noteFadePct = 0.04,
      noteStopTime = stopSeconds;

  if (!!~note.Style.indexOf(Style.Legato)) {
    noteFadePct = 0.01;
    noteStopTime = stopSeconds;
  } else if (!!~note.Style.indexOf(Style.Staccato)) {
    noteFadePct = 0.01;
    noteStopTime = startSeconds + 0.15;
  }

  let noteFadeTime = noteFadePct * noteDuration;

  let maxGain = nodes.Gain.gain.value;
  nodes.Gain.gain.value = 0;
  nodes.Gain.gain.setTargetAtTime(maxGain, startSeconds, noteFadeTime);
  nodes.Gain.gain.setTargetAtTime(0, noteStopTime - (noteFadeTime * 4), noteFadeTime);

  nodes.Oscillator.start(startSeconds);
  nodes.Oscillator.stop(noteStopTime);
}

let _gain = defaultGain;
let _oscillator = defaultOscillator;
let _player = defaultPlayer;

function synthesizeNote(frequency: number, style: Style[]): Note {
  let note: Note = {
    Frequency: frequency,
    GetNodeChain: function(this: Note): NodeChain {
      let gain = _gain(frequency, style);
      gain.connect(masterGain);

      let oscillator = _oscillator(frequency, style, gain);

      let nodeChain: NodeChain = {
        Gain: gain,
        Oscillator: oscillator
      };

      return nodeChain;
    },
    Play: function(this: Note, startSeconds: number, stopSeconds: number): void {
      _player(this, startSeconds, stopSeconds);
    },
    Style: style,
  };

  return note;
}

function setGain(gain: (frequency: number, style: Style[]) => GainNode): void {
  _gain = gain;
}

function setOscillator(oscillator: (frequency: number, style: Style[], gainNode: GainNode) => OscillatorNode): void {
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
