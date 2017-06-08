// This file contains the external interface for muzak.js
import { Articulation } from './articulation';
import { SongData } from './song-data';
import { Note, Synth } from './synth';

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

let Base = {
  as: Articulation,
  song: setSongTitle,
  setTempo,
  setTimeSignature,
};

export { Base as muzak };
