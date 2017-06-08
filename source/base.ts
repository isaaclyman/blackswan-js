// This file contains the external interface for blackswan.js
import { Articulation } from './articulation';
import { Notes } from './notes';
import { TimedNote } from './scheduler';
import { SongData } from './song-data';
import { Synth } from './synth';

function setSongTitle(title: string): void {
  SongData.Title = title;
}

function setTempo(tempo: number): void {
  SongData.Tempo = tempo;
}

function setTimeSignature(signature: [number, number]): void {
  SongData.TimeSignature.beatsPerBar = signature[0];
  SongData.TimeSignature.noteValue = signature[1];
}

function note(noteName: string, duration: number, ...config: Articulation[]): TimedNote {
  let note = Synth.SynthesizeNote(Notes.getFrequency(noteName), config);
  return {
    Duration: duration,
    Note: note
  } as TimedNote;
}

let Base = {
  as: Articulation,
  note,
  setTempo,
  setTimeSignature,
  song: setSongTitle,
};

export { Base as blackswan };
