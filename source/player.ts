import { Song } from './song';
import { Note, Synth } from './synth';

let _lastPaused = 0;

function pause(this: Song) {
  _lastPaused = Synth.Context.currentTime;
  // Synth.Context.close();
}

function play(this: Song) {
  _lastPaused = 0;

  for (let track of this._master) {
    for (let note of track.Notes) {
      playAt(note, track.WhenSeconds, track.DurationSeconds);
    }
  }
}

function playAt(note: Note, whenSeconds: number, durationSeconds: number, startingAtSeconds: number = 0) {
  let startSeconds = Math.max(whenSeconds - startingAtSeconds, 0);
  let stopSeconds = Math.max((whenSeconds + durationSeconds) - startingAtSeconds, 0);

  if (stopSeconds === 0) {
    return;
  }

  note.Play(startSeconds, stopSeconds);
}

let Player = {
  play
};

export { Player };
