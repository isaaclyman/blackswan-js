import { Actions, Track } from './scheduler';

export interface Song {
  at: (measure: number) => Actions,
  play: () => void,
  setTimeSignature: (numerator: number, denominator: number) => void,
  setTempo: (tempo: number) => void,
  _master: Track[],
  _metadata: SongMetadata,
}

export interface SongMetadata {
  Tempo: number,
  TimeSignature: TimeSignature,
  Title: string,
}

export interface TimeSignature {
  beatsPerMeasure: number;
  noteValue: number;
}

let _commonTime: TimeSignature = {
  beatsPerMeasure: 4,
  noteValue: 4
};

let _defaultTempo = 120;

let _defaultTitle = 'Unnamed';

function DefaultSongData(): SongMetadata {
  let metadata: SongMetadata = {
    Tempo: _defaultTempo,
    TimeSignature: _commonTime,
    Title: _defaultTitle,
  };

  return metadata;
}

export { DefaultSongData };
