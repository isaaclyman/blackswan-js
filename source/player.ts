import { Song } from './song';
import { Note, Synth } from './synth';

function play(this: Song, when?: number) {
  if (when === undefined) {
    when = Synth.Context.currentTime;
  }

  for (let track of this._master) {
    for (let note of track.Notes) {
      playAt(note, track.WhenSeconds + when, track.DurationSeconds);
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
