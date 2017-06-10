define(["require", "exports", "../dist/base"], function (require, exports, base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let song = base_1.blackswan.song('one note');
    // Default tempo and time signature will be fine.
    song.at(0).plays(base_1.blackswan.note('c4', 4));
    song.play();
});
//# sourceMappingURL=play-one-note.js.map