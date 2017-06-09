"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../dist/base");
let song = base_1.blackswan.song('one note');
// Default tempo and time signature will be fine.
song.at(0).plays(base_1.blackswan.note('c4', 4));
song.play();
//# sourceMappingURL=play-one-note.js.map