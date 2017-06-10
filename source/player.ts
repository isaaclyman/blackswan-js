import { Song } from './song';
import { Note, Synth } from './synth';

let _lastPaused = 0;

function pause(this: Song) {
  _lastPaused = Synth.Context.currentTime;
  // Synth.Context.close();
}

function play(this: Song) {
  _lastPaused = 0;

  for (var track of this._master) {
    for (var note of track.Notes) {
      if (note.Oscillator.numberOfOutputs === 0) {
        note.Oscillator.connect(Synth.Context.destination);
      }
      playAt(note, track.WhenSeconds, track.DurationSeconds);
    }
  }
}

function playAt(note: Note, whenSeconds: number, durationSeconds: number, startingAtSeconds: number = 0) {
  let startSeconds = Math.max(whenSeconds - startingAtSeconds, 0);
  let stopSeconds = Math.max((whenSeconds + durationSeconds) - startingAtSeconds, 0);

  console.log('played', startSeconds, stopSeconds, note.Oscillator);

  if (stopSeconds === 0) {
    return;
  }

  note.Oscillator.start(startSeconds);
  note.Oscillator.stop(stopSeconds);
}

let Player = {
  play
};

export { Player };
