// This file contains code for generating the piano synth.
// All variables are pluggable so that a user-configured synth
//  can be used seamlessly, and arbitrary notes can be played with
//  arbitrary articulation and voicing.
let _context = new AudioContext();
function defaultOscillator(frequency) {
    let oscillator = _context.createOscillator();
    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';
    return oscillator;
}
let _oscillator = defaultOscillator;
let _memoizedNotes = [];
function getMemoizedNote(frequency, articulation) {
    return _memoizedNotes.find((note) => note.Frequency === frequency && note.Articulation.every((art) => !!~articulation.indexOf(art)));
}
function synthesizeNote(frequency, articulation) {
    let memoizedNote = getMemoizedNote(frequency, articulation);
    return memoizedNote || {
        Articulation: articulation,
        Frequency: frequency,
        Oscillator: _oscillator(frequency)
    };
}
function setOscillator(oscillator) {
    _oscillator = oscillator;
}
var Synth = {
    Context: _context,
    SetOscillator: setOscillator,
    SynthesizeNote: synthesizeNote,
};
export { Synth };
//# sourceMappingURL=synth.js.map