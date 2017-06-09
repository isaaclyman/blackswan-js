// This file contains the external interface for blackswan.js
import { Articulation } from './articulation';
import { Notes } from './notes';
import { Actions, Rest, Scheduler, Sequence, TimedChord, TimedNote } from './scheduler';
import { DefaultSongData, Song, TimeSignature } from './song';
import { Synth } from './synth';

let Base = (function (window) {
  /* song initializer and instance members */

  function createSong(title: string): Song {
    let metadata = DefaultSongData();
    metadata.Title = title;

    let song: Song = {
      at: getActions,
      play: play,
      setTimeSignature: setTimeSignature,
      setTempo: setTempo,
      _master: [],
      _metadata: metadata,
    };

    return song;
  }

  function getActions(this: Song, measure: number): Actions {
    return Scheduler.GetActions(measure, this);
  }

  function play(this: Song) {

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

  function chord(notes: string[], duration: number, ...config: Articulation[]): TimedChord {
    return {
      Notes: notes.map((n) => Synth.SynthesizeNote(Notes.getFrequency(n), config)),
      Duration: duration,
    } as TimedChord;
  }

  function note(noteName: string, duration: number, ...config: Articulation[]): TimedNote {
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

  function sequence(sequence: Sequence): Sequence {
    return sequence;
  }

  let Base = {
    as: Articulation,
    chord,
    note,
    rest,
    sequence,
    song: createSong,
  };

  // Create the blackswan global, for people choosing to use it that way
  (<any>window).blackswan = Base;

  return Base;
})(window);

export { Base as blackswan };
