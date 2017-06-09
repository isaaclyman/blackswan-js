// This file contains the external interface for blackswan.js
import { Articulation } from './articulation';
import { Notes } from './notes';
import { Scheduler } from './scheduler';
import { DefaultSongData } from './song';
import { Synth } from './synth';
let Base = (function (window) {
    /* song initializer and instance members */
    function createSong(title) {
        let metadata = DefaultSongData();
        metadata.Title = title;
        let song = {
            at: getActions,
            play: play,
            setTimeSignature: setTimeSignature,
            setTempo: setTempo,
            _metadata: metadata,
        };
        return song;
    }
    function getActions(measure) {
        return Scheduler.GetActions(measure, this);
    }
    function play() {
    }
    function setTimeSignature(numerator, denominator) {
        let timeSignature = {
            beatsPerBar: numerator,
            noteValue: denominator
        };
        this._metadata.TimeSignature = timeSignature;
    }
    function setTempo(tempo) {
        this._metadata.Tempo = tempo;
    }
    /* muzak static functions */
    function chord(notes, duration, ...config) {
        return {
            Chord: notes.map((n) => note(n, duration, ...config)),
            Duration: duration,
        };
    }
    function note(noteName, duration, ...config) {
        let note = Synth.SynthesizeNote(Notes.getFrequency(noteName), config);
        return {
            Duration: duration,
            Note: note
        };
    }
    function rest(duration) {
        return {
            Duration: duration
        };
    }
    function sequence(sequence) {
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
    window.blackswan = Base;
    return Base;
})(window);
export { Base as blackswan };
//# sourceMappingURL=base.js.map