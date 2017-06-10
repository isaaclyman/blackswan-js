/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__source_base__ = __webpack_require__(13);

let song = __WEBPACK_IMPORTED_MODULE_0__source_base__["a" /* blackswan */].song('one note');
// Default tempo and time signature will be fine.
song.at(0).plays(__WEBPACK_IMPORTED_MODULE_0__source_base__["a" /* blackswan */].note('c4', 4));
song.play();


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PianoData; });
// Only sharps are noted here; flats can be converted on-the-fly
let _noteMap = {
    'a0': 27.5, 'a#0': 29.1353, 'b0': 30.8677, 'c1': 32.7032, 'c#1': 34.6478,
    'd1': 36.7081, 'd#1': 38.8909, 'e1': 41.2034, 'f1': 43.6535, 'f#1': 46.2493,
    'g1': 48.9994, 'g#1': 51.9131, 'a1': 55.0, 'a#1': 58.2705, 'b1': 61.7354,
    'c2': 65.4064, 'c#2': 69.2957, 'd2': 73.4162, 'd#2': 77.7817, 'e2': 82.4069,
    'f2': 87.3071, 'f#2': 92.4986, 'g2': 97.9989, 'g#2': 103.826, 'a2': 110.0,
    'a#2': 116.541, 'b2': 123.471, 'c3': 130.813, 'c#3': 138.591, 'd3': 146.832,
    'd#3': 155.563, 'e3': 164.814, 'f3': 174.614, 'f#3': 184.997, 'g3': 195.998,
    'g#3': 207.562, 'a3': 220.0, 'a#3': 233.082, 'b3': 246.942, 'c4': 261.626,
    'c#4': 277.183, 'd4': 293.665, 'd#4': 311.127, 'e4': 329.628, 'f4': 349.228,
    'f#4': 369.994, 'g4': 391.995, 'g#4': 415.305, 'a4': 440.0, 'a#4': 466.164,
    'b4': 493.883, 'c5': 523.251, 'c#5': 554.365, 'd5': 587.330, 'd#5': 622.254,
    'e5': 659.255, 'f5': 698.456, 'f#5': 739.989, 'g5': 783.991, 'g#5': 830.609,
    'a5': 880.0, 'a#5': 932.328, 'b5': 987.767, 'c6': 1046.5, 'c#6': 1108.73,
    'd6': 1174.66, 'd#6': 1244.51, 'e6': 1318.51, 'f6': 1396.91, 'f#6': 1479.98,
    'g6': 1567.98, 'g#6': 1661.22, 'a6': 1760.0, 'a#6': 1864.66, 'b6': 1975.53,
    'c7': 2093.00, 'c#7': 2217.46, 'd7': 2349.32, 'd#7': 2489.02, 'e7': 2637.02,
    'f7': 2793.83, 'f#7': 2959.96, 'g7': 3135.96, 'g#7': 3322.44, 'a7': 3520.0,
    'a#7': 3729.31, 'b7': 3951.07, 'c8': 4186.01
};
let _notes = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g'
];
let _flatSigns = ['b', '@'];
let _sharpSigns = ['#'];
let PianoData = {
    FlatSigns: _flatSigns,
    NoteMap: _noteMap,
    Notes: _notes,
    SharpSigns: _sharpSigns
};



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Synth; });
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



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Validate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__piano_data__ = __webpack_require__(10);

function isTimedChord(value) {
    return value.Notes !== undefined;
}
function isTimedNote(value) {
    return value.Note !== undefined;
}
function validateNote(note) {
    if (!~__WEBPACK_IMPORTED_MODULE_0__piano_data__["a" /* PianoData */].Notes.indexOf(note)) {
        throw Error(`"${note}" is not a valid note name between "a" and "g".`);
    }
}
function validateOctave(octave) {
    octave = Number(octave);
    if (isNaN(octave)) {
        throw Error(`Invalid octave "${octave}".`);
    }
    if (octave > 8 || octave < 0) {
        throw Error(`This octave is out of range (0 - 8) on a standard piano.`);
    }
}
function validateSign(sign) {
    if (!~__WEBPACK_IMPORTED_MODULE_0__piano_data__["a" /* PianoData */].FlatSigns.indexOf(sign) && !~__WEBPACK_IMPORTED_MODULE_0__piano_data__["a" /* PianoData */].SharpSigns.indexOf(sign)) {
        throw Error(`Invalid sign "${sign}".`);
    }
}
let Validate = {
    isTimedChord,
    isTimedNote,
    Note: validateNote,
    Octave: validateOctave,
    Sign: validateSign
};



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Base; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__articulation__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notes__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scheduler__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__song__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__synth__ = __webpack_require__(11);
// This file contains the external interface for blackswan.js






let Base = (function (window) {
    /* song initializer and instance members */
    function createSong(title) {
        let metadata = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__song__["a" /* DefaultSongData */])();
        metadata.Title = title;
        let song = {
            at: getActions,
            play: __WEBPACK_IMPORTED_MODULE_2__player__["a" /* Player */].play,
            setTimeSignature: setTimeSignature,
            setTempo: setTempo,
            _master: [],
            _metadata: metadata,
        };
        return song;
    }
    function getActions(measure) {
        return __WEBPACK_IMPORTED_MODULE_3__scheduler__["a" /* Scheduler */].GetActions(this, measure);
    }
    function setTimeSignature(numerator, denominator) {
        let timeSignature = {
            beatsPerMeasure: numerator,
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
            Notes: notes.map((n) => __WEBPACK_IMPORTED_MODULE_5__synth__["a" /* Synth */].SynthesizeNote(__WEBPACK_IMPORTED_MODULE_1__notes__["a" /* Notes */].getFrequency(n), config)),
            Duration: duration,
        };
    }
    function note(noteName, duration, ...config) {
        let note = __WEBPACK_IMPORTED_MODULE_5__synth__["a" /* Synth */].SynthesizeNote(__WEBPACK_IMPORTED_MODULE_1__notes__["a" /* Notes */].getFrequency(noteName), config);
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
        as: __WEBPACK_IMPORTED_MODULE_0__articulation__["a" /* Articulation */],
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



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Articulation; });
var Articulation;
(function (Articulation) {
    Articulation[Articulation["None"] = 0] = "None";
    Articulation[Articulation["Legato"] = 1] = "Legato";
    Articulation[Articulation["Staccato"] = 2] = "Staccato";
})(Articulation || (Articulation = {}));
;



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__piano_data__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validate__ = __webpack_require__(12);


function createNote(noteName, frequency, overrideExisting = false) {
    if (!overrideExisting && !!__WEBPACK_IMPORTED_MODULE_0__piano_data__["a" /* PianoData */].NoteMap[noteName]) {
        throw Error(`
      The note "${noteName}" already exists and cannot be overwritten unless
      the 'overrideExisting' parameter is set to 'true'.`);
    }
    __WEBPACK_IMPORTED_MODULE_0__piano_data__["a" /* PianoData */].NoteMap[noteName] = frequency;
    return;
}
let _octave = 4;
function setOctave(newOctave) {
    __WEBPACK_IMPORTED_MODULE_1__validate__["a" /* Validate */].Octave(newOctave);
    _octave = Number(newOctave);
}
function getNoteIndex(note) {
    __WEBPACK_IMPORTED_MODULE_1__validate__["a" /* Validate */].Note(note);
    let index = __WEBPACK_IMPORTED_MODULE_0__piano_data__["a" /* PianoData */].Notes.indexOf(note);
    return index;
}
function getNextNote(note) {
    let currentNote = getNoteIndex(note);
    return currentNote + 1 < __WEBPACK_IMPORTED_MODULE_0__piano_data__["a" /* PianoData */].Notes.length
        ? __WEBPACK_IMPORTED_MODULE_0__piano_data__["a" /* PianoData */].Notes[currentNote + 1]
        : __WEBPACK_IMPORTED_MODULE_0__piano_data__["a" /* PianoData */].Notes[0];
}
function getPrevNote(note) {
    let currentNote = getNoteIndex(note);
    return currentNote > 0
        ? __WEBPACK_IMPORTED_MODULE_0__piano_data__["a" /* PianoData */].Notes[currentNote - 1]
        : __WEBPACK_IMPORTED_MODULE_0__piano_data__["a" /* PianoData */].Notes[__WEBPACK_IMPORTED_MODULE_0__piano_data__["a" /* PianoData */].Notes.length - 1];
}
function getFrequency(noteName) {
    let byKey = __WEBPACK_IMPORTED_MODULE_0__piano_data__["a" /* PianoData */].NoteMap[noteName];
    if (byKey) {
        return byKey;
    }
    let key, note, sign = '', octave;
    note = noteName[0];
    if (noteName.length === 3) {
        sign = noteName[1];
        __WEBPACK_IMPORTED_MODULE_1__validate__["a" /* Validate */].Sign(sign);
        octave = Number(noteName[2]);
        __WEBPACK_IMPORTED_MODULE_1__validate__["a" /* Validate */].Octave(octave);
    }
    else if (noteName.length === 2) {
        octave = Number(noteName[1]);
    }
    else if (noteName.length === 1) {
        octave = _octave;
    }
    else {
        throw Error(`Unrecognized note format "${noteName}".`);
    }
    if (!!~'abdeg'.indexOf(note) && !!~__WEBPACK_IMPORTED_MODULE_0__piano_data__["a" /* PianoData */].FlatSigns.indexOf(sign)) {
        // If it's ABDEG-flat, transform into a sharp
        // This will never change octaves, because C is not in this group
        key = getPrevNote(note) +
            '#' +
            octave;
        return __WEBPACK_IMPORTED_MODULE_0__piano_data__["a" /* PianoData */].NoteMap[key];
    }
    else if (!!~'cf'.indexOf(note) && !!~__WEBPACK_IMPORTED_MODULE_0__piano_data__["a" /* PianoData */].FlatSigns.indexOf(sign)) {
        // If it's CF-flat, transform into the next note down
        // This changes octaves if the note is a C
        key = getPrevNote(note) +
            note === 'c' ?
            (octave - 1).toString() :
            octave.toString();
        return __WEBPACK_IMPORTED_MODULE_0__piano_data__["a" /* PianoData */].NoteMap[key];
    }
    else if (!!~'be'.indexOf(note) && !!~__WEBPACK_IMPORTED_MODULE_0__piano_data__["a" /* PianoData */].SharpSigns.indexOf(sign)) {
        // If it's BE-sharp, transform it into the next note up
        // This changes octaves if the note is a B
        key = getNextNote(note) +
            note === 'b' ?
            (octave + 1).toString() :
            octave.toString();
        return __WEBPACK_IMPORTED_MODULE_0__piano_data__["a" /* PianoData */].NoteMap[key];
    }
    throw Error(`The note "${noteName}" is unknown.`);
}
let Notes = {
    createNote,
    getFrequency,
    setOctave
};



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__synth__ = __webpack_require__(11);

let _lastPaused = 0;
function pause() {
    _lastPaused = __WEBPACK_IMPORTED_MODULE_0__synth__["a" /* Synth */].Context.currentTime;
    // Synth.Context.close();
}
function play() {
    _lastPaused = 0;
    for (var track of this._master) {
        for (var note of track.Notes) {
            if (note.Oscillator.numberOfOutputs === 0) {
                note.Oscillator.connect(__WEBPACK_IMPORTED_MODULE_0__synth__["a" /* Synth */].Context.destination);
            }
            playAt(note, track.WhenSeconds, track.DurationSeconds);
        }
    }
}
function playAt(note, whenSeconds, durationSeconds, startingAtSeconds = 0) {
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



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scheduler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validate__ = __webpack_require__(12);

function improvises(context, scale) {
}
function plays(context, playable) {
    let tracksToAdd = getTracks(context, playable);
    context.Song._master = context.Song._master.concat(tracksToAdd);
}
function repeats(context, repeatable, config) {
}
function measuresToSeconds(measures, song) {
    let beatsPerMinute = song._metadata.Tempo;
    let secondsPerMinute = 60;
    let beatsPerSecond = beatsPerMinute / secondsPerMinute;
    let beatsPerMeasure = song._metadata.TimeSignature.beatsPerMeasure;
    return (beatsPerSecond / beatsPerMeasure) * measures;
}
function getTracks(context, playable) {
    let WhenSeconds = measuresToSeconds(context.Measure, context.Song);
    if (__WEBPACK_IMPORTED_MODULE_0__validate__["a" /* Validate */].isTimedNote(playable)) {
        let track = {
            Notes: [playable.Note],
            DurationSeconds: measuresToSeconds(playable.Duration, context.Song),
            WhenSeconds: WhenSeconds
        };
        return [track];
    }
    else if (__WEBPACK_IMPORTED_MODULE_0__validate__["a" /* Validate */].isTimedChord(playable)) {
        let track = {
            Notes: playable.Notes,
            DurationSeconds: measuresToSeconds(playable.Duration, context.Song),
            WhenSeconds: WhenSeconds
        };
        return [track];
    }
    else {
        return playable.map((item) => {
            if (__WEBPACK_IMPORTED_MODULE_0__validate__["a" /* Validate */].isTimedNote(item)) {
                return getTracks(context, item);
            }
            else if (__WEBPACK_IMPORTED_MODULE_0__validate__["a" /* Validate */].isTimedChord(item)) {
                return getTracks(context, item);
            }
            else {
                let track = {
                    Notes: [],
                    DurationSeconds: measuresToSeconds(item.Duration, context.Song),
                    WhenSeconds: WhenSeconds
                };
                return [track];
            }
        }).reduce((a, b) => a.concat(b));
    }
}
function getActions(song, measure) {
    let actionContext = {
        Measure: measure,
        Song: song
    };
    let actions = {
        improvises: function (improvisable) {
            return improvises(actionContext, improvisable);
        },
        plays: function (playable) {
            return plays(actionContext, playable);
        },
        repeats: function (repeatable, config) {
            return repeats(actionContext, repeatable, config);
        }
    };
    return actions;
}
let Scheduler = {
    GetActions: getActions,
};



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultSongData; });
let _commonTime = {
    beatsPerMeasure: 4,
    noteValue: 4
};
let _defaultTempo = 120;
let _defaultTitle = 'Unnamed';
function DefaultSongData() {
    let metadata = {
        Tempo: _defaultTempo,
        TimeSignature: _commonTime,
        Title: _defaultTitle,
    };
    return metadata;
}



/***/ })
/******/ ]);