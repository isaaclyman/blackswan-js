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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blackswan", function() { return Base; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__improviser__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__player__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scheduler__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__song__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__synth__ = __webpack_require__(2);
// This file contains the external interface for blackswan.js







let Base = (function (window) {
    /* song initializer and instance members */
    function createSong(title) {
        let metadata = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__song__["a" /* DefaultSongData */])();
        metadata.Title = title;
        let song = {
            at: getActions,
            play: __WEBPACK_IMPORTED_MODULE_3__player__["a" /* Player */].play,
            setTimeSignature: setTimeSignature,
            setTempo: setTempo,
            _master: [],
            _metadata: metadata,
        };
        return song;
    }
    function getActions(measure) {
        return __WEBPACK_IMPORTED_MODULE_4__scheduler__["a" /* Scheduler */].GetActions(this, measure);
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
            Notes: notes.map((n) => __WEBPACK_IMPORTED_MODULE_6__synth__["a" /* Synth */].SynthesizeNote(__WEBPACK_IMPORTED_MODULE_2__notes__["a" /* Notes */].getFrequency(n), config)),
            Duration: duration,
        };
    }
    function note(noteName, duration, ...config) {
        let note = __WEBPACK_IMPORTED_MODULE_6__synth__["a" /* Synth */].SynthesizeNote(__WEBPACK_IMPORTED_MODULE_2__notes__["a" /* Notes */].getFrequency(noteName), config);
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
    function scale(playables, config) {
        return {
            Config: config || {
                durations: [1 / 4],
                style: []
            },
            Playables: playables
        };
    }
    function sequence(sequence) {
        return sequence;
    }
    let settings = {
        setGain: __WEBPACK_IMPORTED_MODULE_6__synth__["a" /* Synth */].SetGain,
        setImproviser: __WEBPACK_IMPORTED_MODULE_1__improviser__["a" /* Improviser */].setImproviser,
        setOscillator: __WEBPACK_IMPORTED_MODULE_6__synth__["a" /* Synth */].SetOscillator,
        setPlayer: __WEBPACK_IMPORTED_MODULE_6__synth__["a" /* Synth */].SetPlayer
    };
    let Base = {
        as: __WEBPACK_IMPORTED_MODULE_0__style__["a" /* Style */],
        chord,
        note,
        rest,
        scale,
        sequence,
        settings,
        song: createSong,
    };
    // Create the blackswan global, for people choosing to use it that way
    window.blackswan = Base;
    return Base;
})(window);

/* harmony default export */ __webpack_exports__["default"] = (Base);


/***/ }),
/* 1 */
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



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Synth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__brickwall_limiter_lib__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style__ = __webpack_require__(4);
// This file contains code for generating the piano synth.
// All variables are pluggable so that a user-configured synth
//  can be used seamlessly, and arbitrary notes can be played with
//  arbitrary articulation and dynamics.


let _context = new AudioContext();
let masterGain = _context.createGain();
masterGain.gain.value = 0.7;
let brickwallLimiter = _context.createScriptProcessor(4096, 1, 1);
brickwallLimiter.onaudioprocess = __WEBPACK_IMPORTED_MODULE_0__brickwall_limiter_lib__["a" /* default */];
brickwallLimiter.connect(_context.destination);
masterGain.connect(brickwallLimiter);
function defaultGain(frequency, style, masterGain) {
    let gainNode = _context.createGain();
    gainNode.gain.value = 0.2;
    style.some((st) => {
        let dynamics = __WEBPACK_IMPORTED_MODULE_1__style__["b" /* StyleDynamics */][st];
        if (dynamics) {
            gainNode.gain.value += dynamics * 0.12;
            return true;
        }
        return false;
    });
    // Lower frequencies are too quiet and higher frequencies are too loud.
    // To solve this, let's modify the gain based on the frequency.
    // Frequency is exponential, i.e. frequency = note ** 2
    // We'll square root everything to make it linear
    let frequencyLinear = Math.sqrt(frequency);
    let maxFrequencyLinear = Math.sqrt(4200);
    // Then we take the percent of max frequency and place it in the range [-f + g, f + g]
    //  where f + g is the maximum amount we want to increase gain
    //  do magic to it if f + g > 0
    //  then add that to the gain.
    let frequencyScale = frequencyLinear / maxFrequencyLinear;
    let frequencyFactor = 0.25;
    let frequencyOffset = 0.08;
    let frequencyModifier = (frequencyScale * -frequencyFactor) + (frequencyFactor / 2) + frequencyOffset;
    if (frequencyModifier > 0) {
        frequencyModifier = (Math.pow((frequencyModifier + 1), 3)) - 1;
    }
    gainNode.gain.value += frequencyModifier;
    gainNode.connect(masterGain);
    return gainNode;
}
function defaultOscillator(frequency, _style, gainNode) {
    let oscillator = _context.createOscillator();
    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';
    oscillator.connect(gainNode);
    return oscillator;
}
function defaultPlayer(note, startSeconds, stopSeconds) {
    let nodes = note.GetNodeChain();
    let noteDuration = stopSeconds - startSeconds, noteFadePct = 0.04, noteStopTime = stopSeconds;
    if (!!~note.Style.indexOf(__WEBPACK_IMPORTED_MODULE_1__style__["a" /* Style */].Legato)) {
        noteFadePct = 0.01;
        noteStopTime = stopSeconds;
    }
    else if (!!~note.Style.indexOf(__WEBPACK_IMPORTED_MODULE_1__style__["a" /* Style */].Staccato)) {
        noteFadePct = 0.01;
        noteStopTime = startSeconds + 0.15;
    }
    let noteFadeTime = noteFadePct * noteDuration;
    let maxGain = nodes.Gain.gain.value;
    nodes.Gain.gain.value = 0;
    nodes.Gain.gain.setTargetAtTime(maxGain, startSeconds, noteFadeTime);
    nodes.Gain.gain.setTargetAtTime(0, noteStopTime - (noteFadeTime * 4), noteFadeTime);
    nodes.Oscillator.start(startSeconds);
    nodes.Oscillator.stop(noteStopTime);
}
let _gain = defaultGain;
let _oscillator = defaultOscillator;
let _player = defaultPlayer;
function synthesizeNote(frequency, style) {
    let note = {
        Frequency: frequency,
        GetNodeChain: function () {
            let gain = _gain(frequency, style, masterGain);
            let oscillator = _oscillator(frequency, style, gain);
            let nodeChain = {
                Gain: gain,
                Oscillator: oscillator
            };
            return nodeChain;
        },
        Play: function (startSeconds, stopSeconds) {
            _player(this, startSeconds, stopSeconds);
        },
        Style: style,
    };
    return note;
}
function setGain(gain) {
    _gain = gain;
}
function setOscillator(oscillator) {
    _oscillator = oscillator;
}
function setPlayer(player) {
    _player = player;
}
let Synth = {
    Context: _context,
    SetGain: setGain,
    SetOscillator: setOscillator,
    SetPlayer: setPlayer,
    SynthesizeNote: synthesizeNote,
};



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Improviser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(0);

function getRandomElement(elements) {
    // maximum is exclusive here, so highest number returned will be
    //  (notes.length - 1)
    let max = elements.length;
    let index = Math.floor(Math.random() * max);
    return elements[index];
}
let _improviser = function getImprovisedSequence(scale, duration) {
    let cursor = 0;
    let nextDuration = getRandomElement(scale.Config.durations);
    let sequence = [];
    while (cursor + nextDuration < duration) {
        let nextPlay = getRandomElement(scale.Playables);
        if (Array.isArray(nextPlay)) {
            let nextChord = __WEBPACK_IMPORTED_MODULE_0__base__["blackswan"].chord(nextPlay, nextDuration, ...scale.Config.style);
            sequence.push(nextChord);
        }
        else {
            let nextNote = __WEBPACK_IMPORTED_MODULE_0__base__["blackswan"].note(nextPlay, nextDuration, ...scale.Config.style);
            sequence.push(nextNote);
        }
        cursor += nextDuration;
        nextDuration = getRandomElement(scale.Config.durations);
    }
    return sequence;
};
function improvise(scale, duration) {
    return _improviser(scale, duration);
}
function setImproviser(improviser) {
    _improviser = improviser;
}
let Improviser = {
    improvise,
    setImproviser
};



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StyleDynamics; });
var Style;
(function (Style) {
    Style[Style["None"] = 0] = "None";
    Style[Style["Legato"] = 1] = "Legato";
    Style[Style["Staccato"] = 2] = "Staccato";
    Style[Style["Pianissimo"] = 3] = "Pianissimo";
    Style[Style["Piano"] = 4] = "Piano";
    Style[Style["MezzoPiano"] = 5] = "MezzoPiano";
    Style[Style["MezzoForte"] = 6] = "MezzoForte";
    Style[Style["Forte"] = 7] = "Forte";
    Style[Style["Fortissimo"] = 8] = "Fortissimo";
})(Style || (Style = {}));
;
let StyleDynamics = {
    [Style.Pianissimo]: -3,
    [Style.Piano]: -2,
    [Style.MezzoPiano]: -1,
    [Style.MezzoForte]: 1,
    [Style.Forte]: 2,
    [Style.Fortissimo]: 3
};



/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Validate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__piano_data__ = __webpack_require__(5);

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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__piano_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validate__ = __webpack_require__(6);


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
    note = noteName[0].toLowerCase();
    if (noteName.length === 3) {
        sign = noteName[1];
        __WEBPACK_IMPORTED_MODULE_1__validate__["a" /* Validate */].Sign(sign);
        octave = Number(noteName[2]);
        __WEBPACK_IMPORTED_MODULE_1__validate__["a" /* Validate */].Octave(octave);
    }
    else if (noteName.length === 2) {
        if (!!~__WEBPACK_IMPORTED_MODULE_0__piano_data__["a" /* PianoData */].FlatSigns.indexOf(noteName[1]) || !!~__WEBPACK_IMPORTED_MODULE_0__piano_data__["a" /* PianoData */].SharpSigns.indexOf(noteName[1])) {
            sign = noteName[1];
            octave = _octave;
        }
        else {
            octave = Number(noteName[1]);
        }
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
            (note === 'c' ?
                (octave - 1).toString() :
                octave.toString());
        return __WEBPACK_IMPORTED_MODULE_0__piano_data__["a" /* PianoData */].NoteMap[key];
    }
    else if (!!~'be'.indexOf(note) && !!~__WEBPACK_IMPORTED_MODULE_0__piano_data__["a" /* PianoData */].SharpSigns.indexOf(sign)) {
        // If it's BE-sharp, transform it into the next note up
        // This changes octaves if the note is a B
        key = getNextNote(note) +
            (note === 'b' ?
                (octave + 1).toString() :
                octave.toString());
        return __WEBPACK_IMPORTED_MODULE_0__piano_data__["a" /* PianoData */].NoteMap[key];
    }
    else {
        key = note + (sign || '') + (octave || '');
        let byConstructedKey = __WEBPACK_IMPORTED_MODULE_0__piano_data__["a" /* PianoData */].NoteMap[key];
        if (byConstructedKey) {
            return byConstructedKey;
        }
    }
    throw Error(`The note "${noteName}" is unknown.`);
}
let Notes = {
    createNote,
    getFrequency,
    setOctave
};



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__synth__ = __webpack_require__(2);

function play(when) {
    if (when === undefined) {
        when = __WEBPACK_IMPORTED_MODULE_0__synth__["a" /* Synth */].Context.currentTime;
    }
    for (let track of this._master) {
        for (let note of track.Notes) {
            playAt(note, track.WhenSeconds + when, track.DurationSeconds);
        }
    }
}
function playAt(note, whenSeconds, durationSeconds, startingAtSeconds = 0) {
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



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scheduler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__improviser__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__synth__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validate__ = __webpack_require__(6);
const WebAudioScheduler = __webpack_require__(11);



function improvises(context, improvisable, duration) {
    let improvisedSequence = __WEBPACK_IMPORTED_MODULE_0__improviser__["a" /* Improviser */].improvise(improvisable, duration);
    plays(context, improvisedSequence);
}
function plays(context, playable) {
    let tracksToAdd = getTracks(context, playable);
    context.Song._master = context.Song._master.concat(tracksToAdd);
}
function repeats(context, repeatable, config) {
    let tracksToAdd = [];
    let baseTrack = getTracks(context, repeatable)[0];
    for (let index = 0; index < config.times; index++) {
        let track = {
            Notes: baseTrack.Notes,
            DurationSeconds: baseTrack.DurationSeconds,
            WhenSeconds: baseTrack.WhenSeconds + (index * noteValueToSeconds(config.every, context.Song))
        };
        tracksToAdd.push(track);
    }
    context.Song._master = context.Song._master.concat(tracksToAdd);
}
function noteValueToMeasures(noteValue, song) {
    return noteValue * (song._metadata.TimeSignature.noteValue /
        song._metadata.TimeSignature.beatsPerMeasure);
}
function noteValueToSeconds(noteValue, song) {
    let beatsPerMinute = song._metadata.Tempo;
    let secondsPerMinute = 60;
    let secondsPerBeat = secondsPerMinute / beatsPerMinute;
    let beats = noteValue * song._metadata.TimeSignature.noteValue;
    return secondsPerBeat * beats;
}
function measuresToSeconds(measures, song) {
    let beatsPerMinute = song._metadata.Tempo;
    let secondsPerMinute = 60;
    let beatsPerSecond = beatsPerMinute / secondsPerMinute;
    let beatsPerMeasure = song._metadata.TimeSignature.beatsPerMeasure;
    let secondsPerMeasure = beatsPerMeasure / beatsPerSecond;
    return secondsPerMeasure * measures;
}
function getTracks(context, playable) {
    let WhenSeconds = measuresToSeconds(context.Measure, context.Song);
    if (__WEBPACK_IMPORTED_MODULE_2__validate__["a" /* Validate */].isTimedNote(playable)) {
        let track = {
            Notes: [playable.Note],
            DurationSeconds: noteValueToSeconds(playable.Duration, context.Song),
            WhenSeconds: WhenSeconds
        };
        return [track];
    }
    else if (__WEBPACK_IMPORTED_MODULE_2__validate__["a" /* Validate */].isTimedChord(playable)) {
        let track = {
            Notes: playable.Notes,
            DurationSeconds: noteValueToSeconds(playable.Duration, context.Song),
            WhenSeconds: WhenSeconds
        };
        return [track];
    }
    else {
        return playable.map((item, index) => {
            if (index > 0) {
                context.Measure += noteValueToMeasures(playable[index - 1].Duration, context.Song);
            }
            if (__WEBPACK_IMPORTED_MODULE_2__validate__["a" /* Validate */].isTimedNote(item)) {
                return getTracks(context, item);
            }
            else if (__WEBPACK_IMPORTED_MODULE_2__validate__["a" /* Validate */].isTimedChord(item)) {
                return getTracks(context, item);
            }
            else {
                let track = {
                    Notes: [],
                    DurationSeconds: noteValueToSeconds(item.Duration, context.Song),
                    WhenSeconds: WhenSeconds
                };
                return [track];
            }
        }).reduce((a, b) => a.concat(b), []);
    }
}
function getActions(song, measure) {
    let context = __WEBPACK_IMPORTED_MODULE_1__synth__["a" /* Synth */].Context;
    let scheduler = new WebAudioScheduler({ context });
    scheduler.start();
    let actionContext = {
        Measure: measure,
        Song: song
    };
    let actions = {
        callback: function (callback) {
            let whenSeconds = measuresToSeconds(measure, song);
            scheduler.insert(whenSeconds + context.currentTime, callback);
        },
        improvises: function (improvisable, duration) {
            return improvises(actionContext, improvisable, duration);
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
/* 10 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var events = __webpack_require__(10);
var defaults = __webpack_require__(15);
var defaultContext = __webpack_require__(13);

var WebAudioScheduler = function (_events$EventEmitter) {
  _inherits(WebAudioScheduler, _events$EventEmitter);

  function WebAudioScheduler(opts) {
    _classCallCheck(this, WebAudioScheduler);

    opts = opts || /* istanbul ignore next */{};

    var _this = _possibleConstructorReturn(this, (WebAudioScheduler.__proto__ || Object.getPrototypeOf(WebAudioScheduler)).call(this));

    _this.context = defaults(opts.context, defaultContext);
    _this.interval = defaults(opts.interval, 0.025);
    _this.aheadTime = defaults(opts.aheadTime, 0.1);
    _this.timerAPI = defaults(opts.timerAPI, global);
    _this.playbackTime = _this.currentTime;

    _this._timerId = 0;
    _this._schedId = 0;
    _this._scheds = [];
    return _this;
  }

  _createClass(WebAudioScheduler, [{
    key: "start",
    value: function start(callback, args) {
      var loop = this.process.bind(this);

      if (this._timerId === 0) {
        this._timerId = this.timerAPI.setInterval(loop, this.interval * 1000);

        this.emit("start");

        if (callback) {
          this.insert(this.context.currentTime, callback, args);
          loop();
        }
      } else if (callback) {
        this.insert(this.context.currentTime, callback, args);
      }

      return this;
    }
  }, {
    key: "stop",
    value: function stop() {
      var reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (this._timerId !== 0) {
        this.timerAPI.clearInterval(this._timerId);
        this._timerId = 0;

        this.emit("stop");
      }

      if (reset) {
        this._scheds.splice(0);
      }

      return this;
    }
  }, {
    key: "insert",
    value: function insert(time, callback, args) {
      var id = ++this._schedId;
      var event = { id: id, time: time, callback: callback, args: args };
      var scheds = this._scheds;

      if (scheds.length === 0 || scheds[scheds.length - 1].time <= time) {
        scheds.push(event);
      } else {
        for (var i = 0, imax = scheds.length; i < imax; i++) {
          if (time < scheds[i].time) {
            scheds.splice(i, 0, event);
            break;
          }
        }
      }

      return id;
    }
  }, {
    key: "nextTick",
    value: function nextTick(time, callback, args) {
      if (typeof time === "function") {
        args = callback;
        callback = time;
        time = this.playbackTime;
      }

      return this.insert(time + this.aheadTime, callback, args);
    }
  }, {
    key: "remove",
    value: function remove(schedId) {
      var scheds = this._scheds;

      if (typeof schedId === "number") {
        for (var i = 0, imax = scheds.length; i < imax; i++) {
          if (schedId === scheds[i].id) {
            scheds.splice(i, 1);
            break;
          }
        }
      }

      return schedId;
    }
  }, {
    key: "removeAll",
    value: function removeAll() {
      this._scheds.splice(0);
    }
  }, {
    key: "process",
    value: function process() {
      var t0 = this.context.currentTime;
      var t1 = t0 + this.aheadTime;

      this._process(t0, t1);
    }
  }, {
    key: "_process",
    value: function _process(t0, t1) {
      var scheds = this._scheds;
      var playbackTime = t0;

      this.playbackTime = playbackTime;
      this.emit("process", { playbackTime: playbackTime });

      while (scheds.length && scheds[0].time < t1) {
        var event = scheds.shift();
        var _playbackTime = event.time;
        var args = event.args;

        this.playbackTime = _playbackTime;

        event.callback({ playbackTime: _playbackTime, args: args });
      }

      this.playbackTime = playbackTime;
      this.emit("processed", { playbackTime: playbackTime });
    }
  }, {
    key: "state",
    get: function get() {
      return this._timerId !== 0 ? "running" : "suspended";
    }
  }, {
    key: "currentTime",
    get: function get() {
      return this.context.currentTime;
    }
  }, {
    key: "events",
    get: function get() {
      return this._scheds.slice();
    }
  }]);

  return WebAudioScheduler;
}(events.EventEmitter);

module.exports = WebAudioScheduler;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  get currentTime() {
    return Date.now() / 1000;
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(12);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function defaults(value, defaultValue) {
  return value !== undefined ? value : defaultValue;
}

module.exports = defaults;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var sampleRate = 44100; // Hz
var preGain = 0; //db
var postGain = 0; //db
var attackTime = 0; //s
var releaseTime = 0.05; //s
var threshold = -2; //dB
var lookAheadTime = 0.005; //s  5ms hard-coded
var delayBuffer = new DelayBuffer(lookAheadTime * sampleRate);

function DelayBuffer(n) {
	n = Math.floor(n);
    this._array = new Float32Array(2 * n);
    this.length = this._array.length;  // can be optimized!
    this.readPointer = 0;
    this.writePointer = n - 1;
	for (var i=0; i<this.length; i++){
		this._array[i] = 0;
	}
}
DelayBuffer.prototype.read = function() {
    var value = this._array[this.readPointer % this.length];
    this.readPointer++;
    return value;
};
DelayBuffer.prototype.push = function(v) {
    this._array[this.writePointer % this.length] = v;
    this.writePointer++;
};

var envelopeSample = 0;
var getEnvelope = function(data, attackTime, releaseTime, sampleRate){

	//attack and release in milliseconds
	var attackGain = Math.exp(-1/(sampleRate*attackTime));
	var releaseGain = Math.exp(-1/(sampleRate*releaseTime));

	var envelope = new Float32Array(data.length);

	for (var i=0; i < data.length; i++){

		var envIn = Math.abs(data[i]);

		if (envelopeSample < envIn){

			envelopeSample = envIn + attackGain * (envelopeSample - envIn);

		}

		else {

			envelopeSample = envIn + releaseGain * (envelopeSample - envIn);

		}

		envelope[i] = envelopeSample;

	}

	return envelope;

}


var ampToDB = function(value){

	return 20 * Math.log10(value);

}


var dBToAmp = function(db){

	return Math.pow(10, db/20);

}


var limit = function(audioProcessingEvent){

	var inp = audioProcessingEvent.inputBuffer.getChannelData(0);
	var out = audioProcessingEvent.outputBuffer.getChannelData(0);

	//transform db to amplitude value
	var postGainAmp = dBToAmp(postGain);

	//apply pre gain to signal
	var preGainAmp = dBToAmp(preGain);
	for (var k=0; k < inp.length; ++k){

		out[k] = preGainAmp * inp[k];

	}

	var envelopeData = getEnvelope(out, attackTime, releaseTime, sampleRate);

	if (lookAheadTime > 0){

		//write signal into buffer and read delayed signal
		for (var i = 0; i < out.length; i++){

			delayBuffer.push(out[i]);
			out[i] = delayBuffer.read();

		}
	}

	//limiter mode: slope is 1
	var slope = 1;

	for (var i=0; i<inp.length; i++){

		var gainDB = slope * (threshold - ampToDB(envelopeData[i]));
		//is gain below zero?
		gainDB = Math.min(0, gainDB);
		var gain = dBToAmp(gainDB);
		out[i] *= (gain * postGainAmp);

	}

}

/* harmony default export */ __webpack_exports__["a"] = (limit);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mysong; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__source_song__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__source_base__ = __webpack_require__(0);



let mysong = __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].song('La Cucaracha');

// Kick up the tempo, arriba!
mysong.setTempo(200);

let la = __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note('c4', 1/8);
let cu = la;
let ca = cu;
let ra = __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note('f4', 3/8);
let cha = __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note('a4', 1/4);

let climb = __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note('f4', 1/4);
let ing = __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note('f4', 1/8);
let up = __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note('e4', 1/8);
let and = up;
let down = __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note('d4', 1/8);
let the = down;
let wall = __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note('c4', 3/8);

let sequence = __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].sequence([
  la, cu, ca, ra, cha, la, cu, ca, ra, cha,
  __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].rest(3/8),
  climb, ing, up, and, down, the, wall
]);

mysong.at(0).plays(sequence);




/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mysong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__source_song__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__source_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__play_la_cucaracha__ = __webpack_require__(18);




// Play La Cucaracha continuously, on a loop
function recurse() {
  __WEBPACK_IMPORTED_MODULE_2__play_la_cucaracha__["a" /* mysong */].at(4).callback(recurse);

  __WEBPACK_IMPORTED_MODULE_2__play_la_cucaracha__["a" /* mysong */].play();
};

let wrapper = {
  play: recurse
};




/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mysong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__source_song__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__source_base__ = __webpack_require__(0);



let mysong = __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].song('improvise');

// Default tempo and time signature will be fine.

let scale = __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].scale([
  'c4', 'e4', 'f4', 'g4', 'c5',
  ['e4', 'g4']
], {
  durations: [1/4, 1/4, 1/2],
  style: []
});

mysong.at(0).improvises(scale, 4);




/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mysong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__source_song__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__source_base__ = __webpack_require__(0);



let mysong = __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].song('sequence');

// Default tempo and time signature will be fine.

let sequence = __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].sequence([
  __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note('c4', 1/4),
  __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note('d4', 1/4),
  __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note('e4', 1/4),
  __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].rest(1/4),
  __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note('f4', 1/4)
]);

// Play c4 for two seconds (four measures)
mysong.at(0).plays(sequence);




/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mysong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__source_song__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__source_base__ = __webpack_require__(0);



let mysong = __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].song('chords');

// Default tempo and time signature will be fine.

let sequence = __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].sequence([
  __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].chord(['c4', 'e4', 'g4'], 1/4),
  __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].chord(['d4', 'f4', 'a4'], 1/4),
  __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].chord(['e4', 'g4', 'b4'], 1/4),
  __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].rest(1/4),
  __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].chord(['f4', 'a4', 'c5'], 1/4)
]);

// Play c4 for two seconds (four measures)
mysong.at(0).plays(sequence);




/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mysong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__source_song__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__source_base__ = __webpack_require__(0);



let mysong = __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].song('dynamics');

// Default tempo and time signature will be fine.

mysong.at(0).plays(__WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].sequence([
  __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note('a4', 1/4, __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].as.Pianissimo),
  __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note('a4', 1/4, __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].as.Piano),
  __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note('a4', 1/4, __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].as.MezzoPiano),
  __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note('a4', 1/4, __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].as.MezzoForte),
  __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note('a4', 1/4, __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].as.Forte),
  __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note('a4', 1/4, __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].as.Fortissimo),
]));




/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mysong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__source_song__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__source_base__ = __webpack_require__(0);



let mysong = __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].song('glissandos');

// Default tempo and time signature will be fine.

function createNotes(octave) {
  let noteNames = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
  return noteNames.map((name) => name + octave);
}

let lowerNotes = createNotes(1).concat(createNotes(2)).concat(createNotes(3));
let middleNotes = createNotes(4).concat(createNotes(5));
let highNotes = createNotes(6).concat(createNotes(7));

function createGliss(notesArr) {
  let glissArr = [];

  for (let note of notesArr) {
    glissArr.push(__WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note(note, 3/80));
  }

  return __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].sequence(glissArr);
}

mysong.at(0).plays(createGliss(lowerNotes));
mysong.at(1).plays(createGliss(middleNotes));
mysong.at(2).plays(createGliss(highNotes));




/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mysong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__source_song__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__source_base__ = __webpack_require__(0);



let mysong = __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].song('legato and staccato');

// Default tempo and time signature will be fine.

// Play a few staccato notes
let staccatoSeq = __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].sequence([
  __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note('c4', 1/4, __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].as.Staccato),
  __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note('e4', 1/4, __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].as.Staccato),
  __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note('c4', 1/4, __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].as.Staccato)
]);

// Play a couple of legato chords
let legatoSeq = __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].sequence([
  __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].chord(['c4', 'f4', 'g4'], 1/4, __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].as.Legato),
  __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].chord(['c4', 'e4', 'g4'], 1/4, __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].as.Legato)
]);

mysong.at(0).plays(staccatoSeq);
mysong.at(0.75).plays(legatoSeq);




/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mysong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__source_song__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__source_base__ = __webpack_require__(0);



let mysong = __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].song('one note');

// Default tempo and time signature will be fine.

// Play c4 as a whole note
mysong.at(0).plays(__WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note('c4', 1));




/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mysong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__source_song__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__source_base__ = __webpack_require__(0);



let mysong = __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].song('repeats');

// Default tempo and time signature will be fine.

let note = __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note('c4', 1/4);
let chord = __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].chord(['e4', 'g4'], 1/4);

// Repeat c4 four times, then repeat the chord twice
mysong.at(0).repeats(note, { every: 1/4, times: 4 });
mysong.at(0.25).repeats(chord, { every: 1/4, times: 2 });




/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__play_one_note__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__play_a_sequence__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__play_chords__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__repeat__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__improvise__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__call_back_recursively__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__play_legato_staccato__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__play_glissandos__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__play_dynamics__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__play_strange_notes__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__metronome__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__improvise_default__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__play_la_cucaracha__ = __webpack_require__(18);















__WEBPACK_IMPORTED_MODULE_9__play_strange_notes__["a" /* mysong */].play();


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mysong; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__source_song__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__source_base__ = __webpack_require__(0);



let mysong = __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].song('strange notes');

mysong.at(0).plays(__WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].sequence([
  __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note('c', 1/4),
  __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note('c#', 1/4),
  __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note('c@4', 1/4),
  __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note('cb4', 1/4),
  __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note('A5', 1/4),
  __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note('b#', 1/4)
]));




/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mysong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__source_song__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__source_base__ = __webpack_require__(0);



let mysong = __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].song('metronome');
mysong.setTempo(120);
mysong.setTimeSignature(4, 4);

mysong.at(0).repeats(__WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note('a3', 1/4), { every: 1/2, times: 20 });
mysong.at(0.25).repeats(__WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].note('a4', 1/4), { every: 1/2, times: 20 });




/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mysong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__source_song__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__source_base__ = __webpack_require__(0);



let mysong = __WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].song('improvise with default settings');

mysong.at(0).improvises(__WEBPACK_IMPORTED_MODULE_1__source_base__["blackswan"].scale([
  'a4', 'b4', 'c5', 'e5'
]), 4);




/***/ })
/******/ ]);