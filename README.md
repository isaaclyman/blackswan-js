# Muzak.js
## A spec for expressive music programming in JavaScript
#### (Later: A library for expressive music programming in JavaScript)

## Principles
- Writing a song in Muzak.js should be more like writing sheet music than sound programming.
- Structured improvisation should be baked in.
- Later: tools should be provided for setting the musical key/scale in order to guide the composition process and improvisation.
- Later: there should be configuration methods for setting up custom improvisation methods.
- Later: there should be methods for plugging in new synths.

## Quick Reference

After including muzak.js in a page:

```javascript
// Create a song with a title, time signature and tempo (BPM)
var song = muzak.song('My First Song');
song.setTimeSignature(4, 4);
song.setTempo(120);

// Now let's set up a chord to use later
// muzak.chord: pass in all the notes to be played simultaneously, a
//  duration (number of beats), and optional configuration parameters
// Here we only want to set the notes, not the duration or config, so
//  we use fn.bind(scope, param1..paramN)
var cMajorChord = muzak.chord.bind(null, ['c4', 'e4', 'g4']);

// Here's a riff we can use later
// muzak.sequence: pass in an array of rests, notes, chords, etc.
//  in the order that they should be played
// Sequences are single-threaded, but multiple sequences can be
//  played at once
// Sequences start at the beginning of an imaginary measure
//  in the given time signature
var lowerRiff = muzak.sequence([
  // muzak.rest: pass in the number of beats
  muzak.rest(3),
  // muzak.note: pass in the note name (as before), a duration (number
  //  of beats) and optional configuration parameters
  muzak.note('c3', 0.75, muzak.staccato),
  muzak.note('e3', 0.25, muzak.staccato),
  muzak.note('c3', 1, muzak.staccato)
]);

// Defining a set of notes to use for later improvisation
// muzak.scale: pass in an array of notes and chords to improvise with
//  and an optional configuration object
var lowerScale = muzak.scale([
  'b3', 'c3', 'e3', 'f3', 'g3', 'c4',
], {
  // minDuration: the shortest duration that a note should play, in number of beats
  //  defaults to 1
  minDuration: 0.5,
  // maxDuration: the longest duration that a note should play, in number of beats
  //  defaults to 1
  maxDuration: 1,
  // syncEvery: how often the improv should be required to sync up with
  //  the beat, in number of beats
  //  defaults to the number of beats in a measure
  syncEvery: 4
})

// muzak.song.at: pass in the measure to start from
song.at(0)
// muzak.song.at.repeats: pass in a note or chord and a configuration
//  object
// "every": how many beats to pause between repeats
// "times": how many times to repeat
  .repeats(cMajorChord(1, muzak.staccato), { every: 1, times: 21 })

// muzak.song.at.plays: pass in a note, chord, or riff
song.at(1)
  .plays(lowerRiff);

// muzak.song.at.improvises: pass in a scale and a duration (number of beats)
song.at(3)
  .improvises(lowerScale, 8);

```
