System.register("source/articulation", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Articulation;
    return {
        setters: [],
        execute: function () {
            (function (Articulation) {
                Articulation[Articulation["None"] = 0] = "None";
                Articulation[Articulation["Legato"] = 1] = "Legato";
                Articulation[Articulation["Staccato"] = 2] = "Staccato";
            })(Articulation || (Articulation = {}));
            ;
        }
    };
});
System.register("source/song-data", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var title, timeSignature, tempo, SongData;
    return {
        setters: [],
        execute: function () {
            title = `Unnamed`;
            timeSignature = {
                beatsPerBar: 4,
                noteValue: 4
            };
            tempo = 120;
            SongData = {
                Tempo: tempo,
                TimeSignature: timeSignature,
                Title: title,
            };
            exports_2("SongData", SongData);
        }
    };
});
// This file contains code for generating the piano synth.
// All variables are pluggable so that a user-configured synth
//  can be used seamlessly, and arbitrary notes can be played with
//  arbitrary articulation and voicing.
System.register("source/synth", ["source/articulation"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    function defaultOscillator(frequency) {
        let oscillator = _context.createOscillator();
        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';
        return oscillator;
    }
    function createNote(frequency) {
        let oscillator = _oscillator(frequency);
        return {
            Articulation: articulation_1.Articulation.None,
            Frequency: frequency,
            Oscillator: oscillator
        };
    }
    function setOscillator(oscillator) {
        _oscillator = oscillator;
    }
    function playNote(note) {
        note.Oscillator.connect(_context.destination);
        note.Oscillator.start(0);
    }
    function stopNote(note) {
        note.Oscillator.stop();
        note.Oscillator.disconnect(_context.destination);
    }
    var articulation_1, _context, _oscillator, Synth;
    return {
        setters: [
            function (articulation_1_1) {
                articulation_1 = articulation_1_1;
            }
        ],
        execute: function () {
            _context = new AudioContext();
            _oscillator = defaultOscillator;
            Synth = {
                CreateNote: createNote,
                SetOscillator: setOscillator,
                StopNote: stopNote,
                PlayNote: playNote,
            };
            exports_3("Synth", Synth);
        }
    };
});
System.register("source/base", ["source/articulation", "source/song-data"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    function setSongTitle(title) {
        song_data_1.SongData.Title = title;
    }
    function setTempo(tempo) {
        song_data_1.SongData.Tempo = tempo;
    }
    function setTimeSignature(signature) {
        song_data_1.SongData.TimeSignature.beatsPerBar = signature[0];
        song_data_1.SongData.TimeSignature.noteValue = signature[1];
    }
    var articulation_2, song_data_1, Base;
    return {
        setters: [
            function (articulation_2_1) {
                articulation_2 = articulation_2_1;
            },
            function (song_data_1_1) {
                song_data_1 = song_data_1_1;
            }
        ],
        execute: function () {
            Base = {
                as: articulation_2.Articulation,
                song: setSongTitle,
                setTempo,
                setTimeSignature,
            };
            exports_4("muzak", Base);
        }
    };
});
System.register("source/TEST", [], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("source/piano-data", [], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var _noteMap, _notes, _flatSigns, _sharpSigns, PianoData;
    return {
        setters: [],
        execute: function () {
            // Only sharps are noted here; flats can be converted on-the-fly
            _noteMap = {
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
            _notes = [
                'a', 'b', 'c', 'd', 'e', 'f', 'g'
            ];
            _flatSigns = ['b', '@'];
            _sharpSigns = ['#'];
            PianoData = {
                FlatSigns: _flatSigns,
                NoteMap: _noteMap,
                Notes: _notes,
                SharpSigns: _sharpSigns
            };
            exports_6("PianoData", PianoData);
        }
    };
});
System.register("source/validate", ["source/piano-data"], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    function validateNote(note) {
        if (!~piano_data_1.PianoData.Notes.indexOf(note)) {
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
        if (!~piano_data_1.PianoData.FlatSigns.indexOf(sign) && !~piano_data_1.PianoData.SharpSigns.indexOf(sign)) {
            throw Error(`Invalid sign "${sign}".`);
        }
    }
    var piano_data_1, Validate;
    return {
        setters: [
            function (piano_data_1_1) {
                piano_data_1 = piano_data_1_1;
            }
        ],
        execute: function () {
            Validate = {
                Note: validateNote,
                Octave: validateOctave,
                Sign: validateSign
            };
            exports_7("Validate", Validate);
        }
    };
});
System.register("source/notes", ["source/piano-data", "source/validate"], function (exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    function createNote(noteName, frequency, overrideExisting = false) {
        if (!overrideExisting && !!piano_data_2.PianoData.NoteMap[noteName]) {
            throw Error(`
      The note "${noteName}" already exists and cannot be overwritten unless
      the 'overrideExisting' parameter is set to 'true'.`);
        }
        piano_data_2.PianoData.NoteMap[noteName] = frequency;
        return;
    }
    function setOctave(newOctave) {
        validate_1.Validate.Octave(newOctave);
        _octave = Number(newOctave);
    }
    function getNoteIndex(note) {
        validate_1.Validate.Note(note);
        let index = piano_data_2.PianoData.Notes.indexOf(note);
        return index;
    }
    function getNextNote(note) {
        let currentNote = getNoteIndex(note);
        return currentNote + 1 < piano_data_2.PianoData.Notes.length
            ? piano_data_2.PianoData.Notes[currentNote + 1]
            : piano_data_2.PianoData.Notes[0];
    }
    function getPrevNote(note) {
        let currentNote = getNoteIndex(note);
        return currentNote > 0
            ? piano_data_2.PianoData.Notes[currentNote - 1]
            : piano_data_2.PianoData.Notes[piano_data_2.PianoData.Notes.length - 1];
    }
    function getFrequency(noteName) {
        let byKey = piano_data_2.PianoData.NoteMap[noteName];
        if (byKey) {
            return byKey;
        }
        let key, note, sign = '', octave;
        note = noteName[0];
        if (noteName.length === 3) {
            sign = noteName[1];
            validate_1.Validate.Sign(sign);
            octave = Number(noteName[2]);
            validate_1.Validate.Octave(octave);
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
        if (!!~'abdeg'.indexOf(note) && !!~piano_data_2.PianoData.FlatSigns.indexOf(sign)) {
            // If it's ABDEG-flat, transform into a sharp
            // This will never change octaves, because C is not in this group
            key = getPrevNote(note) +
                '#' +
                octave;
            return piano_data_2.PianoData.NoteMap[key];
        }
        else if (!!~'cf'.indexOf(note) && !!~piano_data_2.PianoData.FlatSigns.indexOf(sign)) {
            // If it's CF-flat, transform into the next note down
            // This changes octaves if the note is a C
            key = getPrevNote(note) +
                note === 'c' ?
                (octave - 1).toString() :
                octave.toString();
            return piano_data_2.PianoData.NoteMap[key];
        }
        else if (!!~'be'.indexOf(note) && !!~piano_data_2.PianoData.SharpSigns.indexOf(sign)) {
            // If it's BE-sharp, transform it into the next note up
            // This changes octaves if the note is a B
            key = getNextNote(note) +
                note === 'b' ?
                (octave + 1).toString() :
                octave.toString();
            return piano_data_2.PianoData.NoteMap[key];
        }
        throw Error(`The note "${noteName}" is unknown.`);
    }
    var piano_data_2, validate_1, _octave, Notes;
    return {
        setters: [
            function (piano_data_2_1) {
                piano_data_2 = piano_data_2_1;
            },
            function (validate_1_1) {
                validate_1 = validate_1_1;
            }
        ],
        execute: function () {
            _octave = 4;
            Notes = {
                createNote,
                getFrequency,
                setOctave
            };
            exports_8("Notes", Notes);
        }
    };
});
//# sourceMappingURL=muzak.js.map