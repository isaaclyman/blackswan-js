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

let SongData = {
  Tempo: tempo,
  TimeSignature: timeSignature,
  Title: title,
};

export { SongData };
