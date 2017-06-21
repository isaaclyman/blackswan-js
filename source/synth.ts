// This file contains code for generating the piano synth.
// All variables are pluggable so that a user-configured synth
//  can be used seamlessly, and arbitrary notes can be played with
//  arbitrary articulation and dynamics.

import  Limit from './brickwall-limiter.lib';

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
masterGain.gain.value = 0.4;

let brickwallLimiter = _context.createScriptProcessor(4096, 1, 1);
brickwallLimiter.onaudioprocess = Limit;
brickwallLimiter.connect(_context.destination);

masterGain.connect(brickwallLimiter);


function defaultGain(frequency: number, style: Style[], masterGain: GainNode): GainNode {
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

  // Lower frequencies are too quiet and higher frequencies are too loud.
  // To solve this, let's modify the gain based on the frequency.

  // Frequency is exponential, i.e. frequency = note ** 2
  // We'll square root everything to make it linear
  let frequencyLinear = Math.sqrt(frequency);
  let maxFrequencyLinear = Math.sqrt(4200);

  // Then we take the percent of max frequency and place it in the range [-f + g, f + g]
  //  where f + g is the maximum amount we want to increase gain
  //  do magic to it if f > 1
  //  then add that to the gain.
  let frequencyScale = frequencyLinear / maxFrequencyLinear;
  let frequencyFactor = 0.25;
  let frequencyOffset = 0.08;
  let frequencyModifier = (frequencyScale * -frequencyFactor) + (frequencyFactor / 2) + frequencyOffset;

  if (frequencyModifier > 0) {
    frequencyModifier = ((frequencyModifier + 1) ** 8) - 1;
  }

  gainNode.gain.value += frequencyModifier;

  gainNode.connect(masterGain);

  return gainNode;
}

function defaultOscillator(frequency: number, _style: Style[], gainNode: GainNode): OscillatorNode {
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
      let gain = _gain(frequency, style, masterGain);
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

function setGain(gain: (frequency: number, style: Style[], masterGain: GainNode) => GainNode): void {
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
