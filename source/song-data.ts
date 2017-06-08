let title = `Unnamed`;

interface TimeSignature {
  beatsPerBar: number;
  noteValue: number;
}

let timeSignature: TimeSignature = {
  beatsPerBar: 4,
  noteValue: 4
};

let tempo = 120;

interface Song {
  Tempo: number,
  TimeSignature: TimeSignature,
  Title: string,
}

let SongData: Song = {
  Tempo: tempo,
  TimeSignature: timeSignature,
  Title: title,
};

export { SongData };
