// This file contains the external interface for blackswan.js
import { Style } from './style';
import { Scale, ImproviseConfig, Improviser } from './improviser';
import { Notes } from './notes';
import { Player } from './player';
import { Actions, Rest, Scheduler, Sequence, TimedChord, TimedNote } from './scheduler';
import { DefaultSongData, Song, TimeSignature } from './song';
import { Note, Synth } from './synth';

export interface Settings {
  setGain: (gain: (frequency: number, style: Style[], masterGain: GainNode) => GainNode) => void;
  setImproviser: (improviser: (scale: Scale, duration: number) => Sequence) => void;
  setOscillator: (oscillator: (frequency: number, style: Style[], gainNode: GainNode) => OscillatorNode) => void;
  setPlayer: (player: (note: Note, startSeconds: number, stopSeconds: number) => void) => void;
}

let Base = (function (window) {
  /* song initializer and instance members */

  function createSong(title: string): Song {
    let metadata = DefaultSongData();
    metadata.Title = title;

    let song: Song = {
      at: getActions,
      play: Player.play,
      setTimeSignature: setTimeSignature,
      setTempo: setTempo,
      _master: [],
      _metadata: metadata,
    };

    return song;
  }

  function getActions(this: Song, measure: number): Actions {
    return Scheduler.GetActions(this, measure);
  }

  function setTimeSignature(this: Song, numerator: number, denominator: number): void {
    let timeSignature: TimeSignature = {
      beatsPerMeasure: numerator,
      noteValue: denominator
    };

    this._metadata.TimeSignature = timeSignature;
  }

  function setTempo(this: Song, tempo: number): void {
    this._metadata.Tempo = tempo;
  }

  /* muzak static functions */

  function chord(notes: string[], duration: number, ...config: Style[]): TimedChord {
    return {
      Notes: notes.map((n) => Synth.SynthesizeNote(Notes.getFrequency(n), config)),
      Duration: duration,
    } as TimedChord;
  }

  function note(noteName: string, duration: number, ...config: Style[]): TimedNote {
    let note = Synth.SynthesizeNote(Notes.getFrequency(noteName), config);
    return {
      Duration: duration,
      Note: note
    } as TimedNote;
  }

  function rest(duration: number): Rest {
    return {
      Duration: duration
    } as Rest;
  }

  function scale(playables: Array<string|Array<string>>, config?: ImproviseConfig) {
    return {
      Config: config || {
        durations: [1],
        style: []
      },
      Playables: playables
    } as Scale;
  }

  function sequence(sequence: Sequence): Sequence {
    return sequence;
  }

  let settings: Settings = {
    setGain: Synth.SetGain,
    setImproviser: Improviser.setImproviser,
    setOscillator: Synth.SetOscillator,
    setPlayer: Synth.SetPlayer
  };

  let Base = {
    as: Style,
    chord,
    note,
    rest,
    scale,
    sequence,
    settings,
    song: createSong,
  };

  // Create the blackswan global, for people choosing to use it that way
  (<any>window).blackswan = Base;

  return Base;
})(window);

export { Base as blackswan };
