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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./examples/example-player.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/call-back-recursively.js":
/*!*******************************************!*\
  !*** ./examples/call-back-recursively.js ***!
  \*******************************************/
/*! exports provided: mysong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mysong\", function() { return wrapper; });\n/* harmony import */ var _source_song__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../source/song */ \"./source/song.ts\");\n/* harmony import */ var _source_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../source/base */ \"./source/base.ts\");\n/* harmony import */ var _play_la_cucaracha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./play-la-cucaracha */ \"./examples/play-la-cucaracha.js\");\n\r\n\r\n\r\n\r\n// Play La Cucaracha continuously, on a loop\r\nfunction recurse() {\r\n  _play_la_cucaracha__WEBPACK_IMPORTED_MODULE_2__[\"mysong\"].at(4).callback(recurse);\r\n\r\n  _play_la_cucaracha__WEBPACK_IMPORTED_MODULE_2__[\"mysong\"].play();\r\n};\r\n\r\nlet wrapper = {\r\n  play: recurse\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./examples/call-back-recursively.js?");

/***/ }),

/***/ "./examples/example-player.js":
/*!************************************!*\
  !*** ./examples/example-player.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _play_one_note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./play-one-note */ \"./examples/play-one-note.js\");\n/* harmony import */ var _play_a_sequence__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play-a-sequence */ \"./examples/play-a-sequence.js\");\n/* harmony import */ var _play_chords__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./play-chords */ \"./examples/play-chords.js\");\n/* harmony import */ var _repeat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./repeat */ \"./examples/repeat.js\");\n/* harmony import */ var _improvise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./improvise */ \"./examples/improvise.js\");\n/* harmony import */ var _call_back_recursively__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./call-back-recursively */ \"./examples/call-back-recursively.js\");\n/* harmony import */ var _play_legato_staccato__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./play-legato-staccato */ \"./examples/play-legato-staccato.js\");\n/* harmony import */ var _play_glissandos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./play-glissandos */ \"./examples/play-glissandos.js\");\n/* harmony import */ var _play_dynamics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./play-dynamics */ \"./examples/play-dynamics.js\");\n/* harmony import */ var _play_strange_notes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./play-strange-notes */ \"./examples/play-strange-notes.js\");\n/* harmony import */ var _play_then_stop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./play-then-stop */ \"./examples/play-then-stop.js\");\n/* harmony import */ var _play_stop_restart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./play-stop-restart */ \"./examples/play-stop-restart.js\");\n/* harmony import */ var _metronome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./metronome */ \"./examples/metronome.js\");\n/* harmony import */ var _improvise_default__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./improvise-default */ \"./examples/improvise-default.js\");\n/* harmony import */ var _play_la_cucaracha__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./play-la-cucaracha */ \"./examples/play-la-cucaracha.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n_play_stop_restart__WEBPACK_IMPORTED_MODULE_11__[\"mysong\"].play();\r\n\n\n//# sourceURL=webpack:///./examples/example-player.js?");

/***/ }),

/***/ "./examples/improvise-default.js":
/*!***************************************!*\
  !*** ./examples/improvise-default.js ***!
  \***************************************/
/*! exports provided: mysong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mysong\", function() { return mysong; });\n/* harmony import */ var _source_song__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../source/song */ \"./source/song.ts\");\n/* harmony import */ var _source_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../source/base */ \"./source/base.ts\");\n\r\n\r\n\r\nlet mysong = _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].song('improvise with default settings');\r\n\r\nmysong.at(0).improvises(_source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].scale([\r\n  'a4', 'b4', 'c5', 'e5'\r\n]), 4);\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./examples/improvise-default.js?");

/***/ }),

/***/ "./examples/improvise.js":
/*!*******************************!*\
  !*** ./examples/improvise.js ***!
  \*******************************/
/*! exports provided: mysong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mysong\", function() { return mysong; });\n/* harmony import */ var _source_song__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../source/song */ \"./source/song.ts\");\n/* harmony import */ var _source_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../source/base */ \"./source/base.ts\");\n\r\n\r\n\r\nlet mysong = _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].song('improvise');\r\n\r\n// Default tempo and time signature will be fine.\r\n\r\nlet scale = _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].scale([\r\n  'c4', 'e4', 'f4', 'g4', 'c5',\r\n  ['e4', 'g4']\r\n], {\r\n  durations: [1/4, 1/4, 1/2],\r\n  style: []\r\n});\r\n\r\nmysong.at(0).improvises(scale, 4);\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./examples/improvise.js?");

/***/ }),

/***/ "./examples/metronome.js":
/*!*******************************!*\
  !*** ./examples/metronome.js ***!
  \*******************************/
/*! exports provided: mysong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mysong\", function() { return mysong; });\n/* harmony import */ var _source_song__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../source/song */ \"./source/song.ts\");\n/* harmony import */ var _source_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../source/base */ \"./source/base.ts\");\n\r\n\r\n\r\nlet mysong = _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].song('metronome');\r\nmysong.setTempo(120);\r\nmysong.setTimeSignature(4, 4);\r\n\r\nmysong.at(0).repeats(_source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('a3', 1/4), { every: 1/2, times: 20 });\r\nmysong.at(0.25).repeats(_source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('a4', 1/4), { every: 1/2, times: 20 });\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./examples/metronome.js?");

/***/ }),

/***/ "./examples/play-a-sequence.js":
/*!*************************************!*\
  !*** ./examples/play-a-sequence.js ***!
  \*************************************/
/*! exports provided: mysong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mysong\", function() { return mysong; });\n/* harmony import */ var _source_song__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../source/song */ \"./source/song.ts\");\n/* harmony import */ var _source_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../source/base */ \"./source/base.ts\");\n\r\n\r\n\r\nlet mysong = _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].song('sequence');\r\n\r\n// Default tempo and time signature will be fine.\r\n\r\nlet sequence = _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].sequence([\r\n  _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('c4', 1/4),\r\n  _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('d4', 1/4),\r\n  _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('e4', 1/4),\r\n  _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].rest(1/4),\r\n  _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('f4', 1/4)\r\n]);\r\n\r\n// Play c4 for two seconds (four measures)\r\nmysong.at(0).plays(sequence);\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./examples/play-a-sequence.js?");

/***/ }),

/***/ "./examples/play-chords.js":
/*!*********************************!*\
  !*** ./examples/play-chords.js ***!
  \*********************************/
/*! exports provided: mysong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mysong\", function() { return mysong; });\n/* harmony import */ var _source_song__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../source/song */ \"./source/song.ts\");\n/* harmony import */ var _source_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../source/base */ \"./source/base.ts\");\n\r\n\r\n\r\nlet mysong = _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].song('chords');\r\n\r\n// Default tempo and time signature will be fine.\r\n\r\nlet sequence = _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].sequence([\r\n  _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].chord(['c4', 'e4', 'g4'], 1/4),\r\n  _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].chord(['d4', 'f4', 'a4'], 1/4),\r\n  _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].chord(['e4', 'g4', 'b4'], 1/4),\r\n  _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].rest(1/4),\r\n  _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].chord(['f4', 'a4', 'c5'], 1/4)\r\n]);\r\n\r\n// Play c4 for two seconds (four measures)\r\nmysong.at(0).plays(sequence);\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./examples/play-chords.js?");

/***/ }),

/***/ "./examples/play-dynamics.js":
/*!***********************************!*\
  !*** ./examples/play-dynamics.js ***!
  \***********************************/
/*! exports provided: mysong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mysong\", function() { return mysong; });\n/* harmony import */ var _source_song__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../source/song */ \"./source/song.ts\");\n/* harmony import */ var _source_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../source/base */ \"./source/base.ts\");\n\r\n\r\n\r\nlet mysong = _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].song('dynamics');\r\n\r\n// Default tempo and time signature will be fine.\r\n\r\nmysong.at(0).plays(_source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].sequence([\r\n  _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('a4', 1/4, _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].as.Pianissimo),\r\n  _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('a4', 1/4, _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].as.Piano),\r\n  _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('a4', 1/4, _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].as.MezzoPiano),\r\n  _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('a4', 1/4, _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].as.MezzoForte),\r\n  _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('a4', 1/4, _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].as.Forte),\r\n  _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('a4', 1/4, _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].as.Fortissimo),\r\n]));\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./examples/play-dynamics.js?");

/***/ }),

/***/ "./examples/play-glissandos.js":
/*!*************************************!*\
  !*** ./examples/play-glissandos.js ***!
  \*************************************/
/*! exports provided: mysong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mysong\", function() { return mysong; });\n/* harmony import */ var _source_song__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../source/song */ \"./source/song.ts\");\n/* harmony import */ var _source_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../source/base */ \"./source/base.ts\");\n\r\n\r\n\r\nlet mysong = _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].song('glissandos');\r\n\r\n// Default tempo and time signature will be fine.\r\n\r\nfunction createNotes(octave) {\r\n  let noteNames = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];\r\n  return noteNames.map((name) => name + octave);\r\n}\r\n\r\nlet lowerNotes = createNotes(1).concat(createNotes(2)).concat(createNotes(3));\r\nlet middleNotes = createNotes(4).concat(createNotes(5));\r\nlet highNotes = createNotes(6).concat(createNotes(7));\r\n\r\nfunction createGliss(notesArr) {\r\n  let glissArr = [];\r\n\r\n  for (let note of notesArr) {\r\n    glissArr.push(_source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note(note, 3/80));\r\n  }\r\n\r\n  return _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].sequence(glissArr);\r\n}\r\n\r\nmysong.at(0).plays(createGliss(lowerNotes));\r\nmysong.at(1).plays(createGliss(middleNotes));\r\nmysong.at(2).plays(createGliss(highNotes));\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./examples/play-glissandos.js?");

/***/ }),

/***/ "./examples/play-la-cucaracha.js":
/*!***************************************!*\
  !*** ./examples/play-la-cucaracha.js ***!
  \***************************************/
/*! exports provided: mysong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mysong\", function() { return mysong; });\n/* harmony import */ var _source_song__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../source/song */ \"./source/song.ts\");\n/* harmony import */ var _source_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../source/base */ \"./source/base.ts\");\n\r\n\r\n\r\nlet mysong = _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].song('La Cucaracha');\r\n\r\n// Kick up the tempo, arriba!\r\nmysong.setTempo(200);\r\n\r\nlet la = _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('c4', 1/8);\r\nlet cu = la;\r\nlet ca = cu;\r\nlet ra = _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('f4', 3/8);\r\nlet cha = _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('a4', 1/4);\r\n\r\nlet climb = _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('f4', 1/4);\r\nlet ing = _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('f4', 1/8);\r\nlet up = _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('e4', 1/8);\r\nlet and = up;\r\nlet down = _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('d4', 1/8);\r\nlet the = down;\r\nlet wall = _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('c4', 3/8);\r\n\r\nlet sequence = _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].sequence([\r\n  la, cu, ca, ra, cha, la, cu, ca, ra, cha,\r\n  _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].rest(3/8),\r\n  climb, ing, up, and, down, the, wall\r\n]);\r\n\r\nmysong.at(0).plays(sequence);\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./examples/play-la-cucaracha.js?");

/***/ }),

/***/ "./examples/play-legato-staccato.js":
/*!******************************************!*\
  !*** ./examples/play-legato-staccato.js ***!
  \******************************************/
/*! exports provided: mysong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mysong\", function() { return mysong; });\n/* harmony import */ var _source_song__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../source/song */ \"./source/song.ts\");\n/* harmony import */ var _source_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../source/base */ \"./source/base.ts\");\n\r\n\r\n\r\nlet mysong = _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].song('legato and staccato');\r\n\r\n// Default tempo and time signature will be fine.\r\n\r\n// Play a few staccato notes\r\nlet staccatoSeq = _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].sequence([\r\n  _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('c4', 1/4, _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].as.Staccato),\r\n  _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('e4', 1/4, _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].as.Staccato),\r\n  _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('c4', 1/4, _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].as.Staccato)\r\n]);\r\n\r\n// Play a couple of legato chords\r\nlet legatoSeq = _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].sequence([\r\n  _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].chord(['c4', 'f4', 'g4'], 1/4, _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].as.Legato),\r\n  _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].chord(['c4', 'e4', 'g4'], 1/4, _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].as.Legato)\r\n]);\r\n\r\nmysong.at(0).plays(staccatoSeq);\r\nmysong.at(0.75).plays(legatoSeq);\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./examples/play-legato-staccato.js?");

/***/ }),

/***/ "./examples/play-one-note.js":
/*!***********************************!*\
  !*** ./examples/play-one-note.js ***!
  \***********************************/
/*! exports provided: mysong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mysong\", function() { return mysong; });\n/* harmony import */ var _source_song__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../source/song */ \"./source/song.ts\");\n/* harmony import */ var _source_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../source/base */ \"./source/base.ts\");\n\r\n\r\n\r\nlet mysong = _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].song('one note');\r\n\r\n// Default tempo and time signature will be fine.\r\n\r\n// Play c4 as a whole note\r\nmysong.at(0).plays(_source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('c4', 1));\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./examples/play-one-note.js?");

/***/ }),

/***/ "./examples/play-stop-restart.js":
/*!***************************************!*\
  !*** ./examples/play-stop-restart.js ***!
  \***************************************/
/*! exports provided: mysong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mysong\", function() { return mysong; });\n/* harmony import */ var _source_song__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../source/song */ \"./source/song.ts\");\n/* harmony import */ var _source_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../source/base */ \"./source/base.ts\");\n\r\n\r\n\r\nlet mysong = _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].song('play then stop');\r\n\r\n// Default tempo and time signature will be fine.\r\n\r\n// Play c4 for a while\r\nmysong.at(0).plays(_source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('c4', 4));\r\nsetTimeout(() => {\r\n  mysong.stop()\r\n}, 1000)\r\nsetTimeout(() => {\r\n  mysong.play()\r\n}, 2000)\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./examples/play-stop-restart.js?");

/***/ }),

/***/ "./examples/play-strange-notes.js":
/*!****************************************!*\
  !*** ./examples/play-strange-notes.js ***!
  \****************************************/
/*! exports provided: mysong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mysong\", function() { return mysong; });\n/* harmony import */ var _source_song__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../source/song */ \"./source/song.ts\");\n/* harmony import */ var _source_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../source/base */ \"./source/base.ts\");\n\r\n\r\n\r\nlet mysong = _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].song('strange notes');\r\n\r\nmysong.at(0).plays(_source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].sequence([\r\n  _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('c', 1/4),\r\n  _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('c#', 1/4),\r\n  _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('c@4', 1/4),\r\n  _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('cb4', 1/4),\r\n  _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('A5', 1/4),\r\n  _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('b#', 1/4)\r\n]));\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./examples/play-strange-notes.js?");

/***/ }),

/***/ "./examples/play-then-stop.js":
/*!************************************!*\
  !*** ./examples/play-then-stop.js ***!
  \************************************/
/*! exports provided: mysong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mysong\", function() { return mysong; });\n/* harmony import */ var _source_song__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../source/song */ \"./source/song.ts\");\n/* harmony import */ var _source_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../source/base */ \"./source/base.ts\");\n\r\n\r\n\r\nlet mysong = _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].song('play then stop');\r\n\r\n// Default tempo and time signature will be fine.\r\n\r\n// Play c4 for a while\r\nmysong.at(0).plays(_source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('c4', 16));\r\nmysong.at(1).callback(() => {\r\n  mysong.stop()\r\n})\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./examples/play-then-stop.js?");

/***/ }),

/***/ "./examples/repeat.js":
/*!****************************!*\
  !*** ./examples/repeat.js ***!
  \****************************/
/*! exports provided: mysong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mysong\", function() { return mysong; });\n/* harmony import */ var _source_song__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../source/song */ \"./source/song.ts\");\n/* harmony import */ var _source_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../source/base */ \"./source/base.ts\");\n\r\n\r\n\r\nlet mysong = _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].song('repeats');\r\n\r\n// Default tempo and time signature will be fine.\r\n\r\nlet note = _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].note('c4', 1/4);\r\nlet chord = _source_base__WEBPACK_IMPORTED_MODULE_1__[\"blackswan\"].chord(['e4', 'g4'], 1/4);\r\n\r\n// Repeat c4 four times, then repeat the chord twice\r\nmysong.at(0).repeats(note, { every: 1/4, times: 4 });\r\nmysong.at(0.25).repeats(chord, { every: 1/4, times: 2 });\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./examples/repeat.js?");

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\nfunction EventEmitter() {\n  this._events = this._events || {};\n  this._maxListeners = this._maxListeners || undefined;\n}\nmodule.exports = EventEmitter;\n\n// Backwards-compat with node 0.10.x\nEventEmitter.EventEmitter = EventEmitter;\n\nEventEmitter.prototype._events = undefined;\nEventEmitter.prototype._maxListeners = undefined;\n\n// By default EventEmitters will print a warning if more than 10 listeners are\n// added to it. This is a useful default which helps finding memory leaks.\nEventEmitter.defaultMaxListeners = 10;\n\n// Obviously not all Emitters should be limited to 10. This function allows\n// that to be increased. Set to zero for unlimited.\nEventEmitter.prototype.setMaxListeners = function(n) {\n  if (!isNumber(n) || n < 0 || isNaN(n))\n    throw TypeError('n must be a positive number');\n  this._maxListeners = n;\n  return this;\n};\n\nEventEmitter.prototype.emit = function(type) {\n  var er, handler, len, args, i, listeners;\n\n  if (!this._events)\n    this._events = {};\n\n  // If there is no 'error' event listener then throw.\n  if (type === 'error') {\n    if (!this._events.error ||\n        (isObject(this._events.error) && !this._events.error.length)) {\n      er = arguments[1];\n      if (er instanceof Error) {\n        throw er; // Unhandled 'error' event\n      } else {\n        // At least give some kind of context to the user\n        var err = new Error('Uncaught, unspecified \"error\" event. (' + er + ')');\n        err.context = er;\n        throw err;\n      }\n    }\n  }\n\n  handler = this._events[type];\n\n  if (isUndefined(handler))\n    return false;\n\n  if (isFunction(handler)) {\n    switch (arguments.length) {\n      // fast cases\n      case 1:\n        handler.call(this);\n        break;\n      case 2:\n        handler.call(this, arguments[1]);\n        break;\n      case 3:\n        handler.call(this, arguments[1], arguments[2]);\n        break;\n      // slower\n      default:\n        args = Array.prototype.slice.call(arguments, 1);\n        handler.apply(this, args);\n    }\n  } else if (isObject(handler)) {\n    args = Array.prototype.slice.call(arguments, 1);\n    listeners = handler.slice();\n    len = listeners.length;\n    for (i = 0; i < len; i++)\n      listeners[i].apply(this, args);\n  }\n\n  return true;\n};\n\nEventEmitter.prototype.addListener = function(type, listener) {\n  var m;\n\n  if (!isFunction(listener))\n    throw TypeError('listener must be a function');\n\n  if (!this._events)\n    this._events = {};\n\n  // To avoid recursion in the case that type === \"newListener\"! Before\n  // adding it to the listeners, first emit \"newListener\".\n  if (this._events.newListener)\n    this.emit('newListener', type,\n              isFunction(listener.listener) ?\n              listener.listener : listener);\n\n  if (!this._events[type])\n    // Optimize the case of one listener. Don't need the extra array object.\n    this._events[type] = listener;\n  else if (isObject(this._events[type]))\n    // If we've already got an array, just append.\n    this._events[type].push(listener);\n  else\n    // Adding the second element, need to change to array.\n    this._events[type] = [this._events[type], listener];\n\n  // Check for listener leak\n  if (isObject(this._events[type]) && !this._events[type].warned) {\n    if (!isUndefined(this._maxListeners)) {\n      m = this._maxListeners;\n    } else {\n      m = EventEmitter.defaultMaxListeners;\n    }\n\n    if (m && m > 0 && this._events[type].length > m) {\n      this._events[type].warned = true;\n      console.error('(node) warning: possible EventEmitter memory ' +\n                    'leak detected. %d listeners added. ' +\n                    'Use emitter.setMaxListeners() to increase limit.',\n                    this._events[type].length);\n      if (typeof console.trace === 'function') {\n        // not supported in IE 10\n        console.trace();\n      }\n    }\n  }\n\n  return this;\n};\n\nEventEmitter.prototype.on = EventEmitter.prototype.addListener;\n\nEventEmitter.prototype.once = function(type, listener) {\n  if (!isFunction(listener))\n    throw TypeError('listener must be a function');\n\n  var fired = false;\n\n  function g() {\n    this.removeListener(type, g);\n\n    if (!fired) {\n      fired = true;\n      listener.apply(this, arguments);\n    }\n  }\n\n  g.listener = listener;\n  this.on(type, g);\n\n  return this;\n};\n\n// emits a 'removeListener' event iff the listener was removed\nEventEmitter.prototype.removeListener = function(type, listener) {\n  var list, position, length, i;\n\n  if (!isFunction(listener))\n    throw TypeError('listener must be a function');\n\n  if (!this._events || !this._events[type])\n    return this;\n\n  list = this._events[type];\n  length = list.length;\n  position = -1;\n\n  if (list === listener ||\n      (isFunction(list.listener) && list.listener === listener)) {\n    delete this._events[type];\n    if (this._events.removeListener)\n      this.emit('removeListener', type, listener);\n\n  } else if (isObject(list)) {\n    for (i = length; i-- > 0;) {\n      if (list[i] === listener ||\n          (list[i].listener && list[i].listener === listener)) {\n        position = i;\n        break;\n      }\n    }\n\n    if (position < 0)\n      return this;\n\n    if (list.length === 1) {\n      list.length = 0;\n      delete this._events[type];\n    } else {\n      list.splice(position, 1);\n    }\n\n    if (this._events.removeListener)\n      this.emit('removeListener', type, listener);\n  }\n\n  return this;\n};\n\nEventEmitter.prototype.removeAllListeners = function(type) {\n  var key, listeners;\n\n  if (!this._events)\n    return this;\n\n  // not listening for removeListener, no need to emit\n  if (!this._events.removeListener) {\n    if (arguments.length === 0)\n      this._events = {};\n    else if (this._events[type])\n      delete this._events[type];\n    return this;\n  }\n\n  // emit removeListener for all listeners on all events\n  if (arguments.length === 0) {\n    for (key in this._events) {\n      if (key === 'removeListener') continue;\n      this.removeAllListeners(key);\n    }\n    this.removeAllListeners('removeListener');\n    this._events = {};\n    return this;\n  }\n\n  listeners = this._events[type];\n\n  if (isFunction(listeners)) {\n    this.removeListener(type, listeners);\n  } else if (listeners) {\n    // LIFO order\n    while (listeners.length)\n      this.removeListener(type, listeners[listeners.length - 1]);\n  }\n  delete this._events[type];\n\n  return this;\n};\n\nEventEmitter.prototype.listeners = function(type) {\n  var ret;\n  if (!this._events || !this._events[type])\n    ret = [];\n  else if (isFunction(this._events[type]))\n    ret = [this._events[type]];\n  else\n    ret = this._events[type].slice();\n  return ret;\n};\n\nEventEmitter.prototype.listenerCount = function(type) {\n  if (this._events) {\n    var evlistener = this._events[type];\n\n    if (isFunction(evlistener))\n      return 1;\n    else if (evlistener)\n      return evlistener.length;\n  }\n  return 0;\n};\n\nEventEmitter.listenerCount = function(emitter, type) {\n  return emitter.listenerCount(type);\n};\n\nfunction isFunction(arg) {\n  return typeof arg === 'function';\n}\n\nfunction isNumber(arg) {\n  return typeof arg === 'number';\n}\n\nfunction isObject(arg) {\n  return typeof arg === 'object' && arg !== null;\n}\n\nfunction isUndefined(arg) {\n  return arg === void 0;\n}\n\n\n//# sourceURL=webpack:///./node_modules/events/events.js?");

/***/ }),

/***/ "./node_modules/web-audio-scheduler/index.js":
/*!***************************************************!*\
  !*** ./node_modules/web-audio-scheduler/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./lib */ \"./node_modules/web-audio-scheduler/lib/index.js\");\n\n\n//# sourceURL=webpack:///./node_modules/web-audio-scheduler/index.js?");

/***/ }),

/***/ "./node_modules/web-audio-scheduler/lib/WebAudioScheduler.js":
/*!*******************************************************************!*\
  !*** ./node_modules/web-audio-scheduler/lib/WebAudioScheduler.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar events = __webpack_require__(/*! events */ \"./node_modules/events/events.js\");\nvar defaults = __webpack_require__(/*! ./utils/defaults */ \"./node_modules/web-audio-scheduler/lib/utils/defaults.js\");\nvar defaultContext = __webpack_require__(/*! ./defaultContext */ \"./node_modules/web-audio-scheduler/lib/defaultContext.js\");\n\nvar WebAudioScheduler = function (_events$EventEmitter) {\n  _inherits(WebAudioScheduler, _events$EventEmitter);\n\n  function WebAudioScheduler(opts) {\n    _classCallCheck(this, WebAudioScheduler);\n\n    opts = opts || /* istanbul ignore next */{};\n\n    var _this = _possibleConstructorReturn(this, (WebAudioScheduler.__proto__ || Object.getPrototypeOf(WebAudioScheduler)).call(this));\n\n    _this.context = defaults(opts.context, defaultContext);\n    _this.interval = defaults(opts.interval, 0.025);\n    _this.aheadTime = defaults(opts.aheadTime, 0.1);\n    _this.timerAPI = defaults(opts.timerAPI, global);\n    _this.playbackTime = _this.currentTime;\n\n    _this._timerId = 0;\n    _this._schedId = 0;\n    _this._scheds = [];\n    return _this;\n  }\n\n  _createClass(WebAudioScheduler, [{\n    key: \"start\",\n    value: function start(callback, args) {\n      var loop = this.process.bind(this);\n\n      if (this._timerId === 0) {\n        this._timerId = this.timerAPI.setInterval(loop, this.interval * 1000);\n\n        this.emit(\"start\");\n\n        if (callback) {\n          this.insert(this.context.currentTime, callback, args);\n          loop();\n        }\n      } else if (callback) {\n        this.insert(this.context.currentTime, callback, args);\n      }\n\n      return this;\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      var reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n\n      if (this._timerId !== 0) {\n        this.timerAPI.clearInterval(this._timerId);\n        this._timerId = 0;\n\n        this.emit(\"stop\");\n      }\n\n      if (reset) {\n        this._scheds.splice(0);\n      }\n\n      return this;\n    }\n  }, {\n    key: \"insert\",\n    value: function insert(time, callback, args) {\n      var id = ++this._schedId;\n      var event = { id: id, time: time, callback: callback, args: args };\n      var scheds = this._scheds;\n\n      if (scheds.length === 0 || scheds[scheds.length - 1].time <= time) {\n        scheds.push(event);\n      } else {\n        for (var i = 0, imax = scheds.length; i < imax; i++) {\n          if (time < scheds[i].time) {\n            scheds.splice(i, 0, event);\n            break;\n          }\n        }\n      }\n\n      return id;\n    }\n  }, {\n    key: \"nextTick\",\n    value: function nextTick(time, callback, args) {\n      if (typeof time === \"function\") {\n        args = callback;\n        callback = time;\n        time = this.playbackTime;\n      }\n\n      return this.insert(time + this.aheadTime, callback, args);\n    }\n  }, {\n    key: \"remove\",\n    value: function remove(schedId) {\n      var scheds = this._scheds;\n\n      if (typeof schedId === \"number\") {\n        for (var i = 0, imax = scheds.length; i < imax; i++) {\n          if (schedId === scheds[i].id) {\n            scheds.splice(i, 1);\n            break;\n          }\n        }\n      }\n\n      return schedId;\n    }\n  }, {\n    key: \"removeAll\",\n    value: function removeAll() {\n      this._scheds.splice(0);\n    }\n  }, {\n    key: \"process\",\n    value: function process() {\n      var t0 = this.context.currentTime;\n      var t1 = t0 + this.aheadTime;\n\n      this._process(t0, t1);\n    }\n  }, {\n    key: \"_process\",\n    value: function _process(t0, t1) {\n      var scheds = this._scheds;\n      var playbackTime = t0;\n\n      this.playbackTime = playbackTime;\n      this.emit(\"process\", { playbackTime: playbackTime });\n\n      while (scheds.length && scheds[0].time < t1) {\n        var event = scheds.shift();\n        var _playbackTime = event.time;\n        var args = event.args;\n\n        this.playbackTime = _playbackTime;\n\n        event.callback({ playbackTime: _playbackTime, args: args });\n      }\n\n      this.playbackTime = playbackTime;\n      this.emit(\"processed\", { playbackTime: playbackTime });\n    }\n  }, {\n    key: \"state\",\n    get: function get() {\n      return this._timerId !== 0 ? \"running\" : \"suspended\";\n    }\n  }, {\n    key: \"currentTime\",\n    get: function get() {\n      return this.context.currentTime;\n    }\n  }, {\n    key: \"events\",\n    get: function get() {\n      return this._scheds.slice();\n    }\n  }]);\n\n  return WebAudioScheduler;\n}(events.EventEmitter);\n\nmodule.exports = WebAudioScheduler;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/web-audio-scheduler/lib/WebAudioScheduler.js?");

/***/ }),

/***/ "./node_modules/web-audio-scheduler/lib/defaultContext.js":
/*!****************************************************************!*\
  !*** ./node_modules/web-audio-scheduler/lib/defaultContext.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n  get currentTime() {\n    return Date.now() / 1000;\n  }\n};\n\n//# sourceURL=webpack:///./node_modules/web-audio-scheduler/lib/defaultContext.js?");

/***/ }),

/***/ "./node_modules/web-audio-scheduler/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/web-audio-scheduler/lib/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./WebAudioScheduler */ \"./node_modules/web-audio-scheduler/lib/WebAudioScheduler.js\");\n\n//# sourceURL=webpack:///./node_modules/web-audio-scheduler/lib/index.js?");

/***/ }),

/***/ "./node_modules/web-audio-scheduler/lib/utils/defaults.js":
/*!****************************************************************!*\
  !*** ./node_modules/web-audio-scheduler/lib/utils/defaults.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction defaults(value, defaultValue) {\n  return value !== undefined ? value : defaultValue;\n}\n\nmodule.exports = defaults;\n\n//# sourceURL=webpack:///./node_modules/web-audio-scheduler/lib/utils/defaults.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\r\n} catch (e) {\r\n\t// This works if the window reference is available\r\n\tif (typeof window === \"object\") g = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./source/base.ts":
/*!************************!*\
  !*** ./source/base.ts ***!
  \************************/
/*! exports provided: blackswan, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"blackswan\", function() { return Base; });\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ \"./source/style.ts\");\n/* harmony import */ var _improviser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./improviser */ \"./source/improviser.ts\");\n/* harmony import */ var _notes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notes */ \"./source/notes.ts\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ \"./source/player.ts\");\n/* harmony import */ var _scheduler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scheduler */ \"./source/scheduler.ts\");\n/* harmony import */ var _song__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./song */ \"./source/song.ts\");\n/* harmony import */ var _synth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./synth */ \"./source/synth.ts\");\n// This file contains the external interface for blackswan.js\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet Base = (function (window) {\r\n    /* song initializer and instance members */\r\n    function createSong(title) {\r\n        let metadata = Object(_song__WEBPACK_IMPORTED_MODULE_5__[\"DefaultSongData\"])();\r\n        metadata.Title = title;\r\n        let song = {\r\n            at: getActions,\r\n            play: _player__WEBPACK_IMPORTED_MODULE_3__[\"Player\"].play,\r\n            stop: _player__WEBPACK_IMPORTED_MODULE_3__[\"Player\"].stop,\r\n            setTimeSignature: setTimeSignature,\r\n            setTempo: setTempo,\r\n            _master: [],\r\n            _metadata: metadata,\r\n        };\r\n        return song;\r\n    }\r\n    function getActions(measure) {\r\n        return _scheduler__WEBPACK_IMPORTED_MODULE_4__[\"Scheduler\"].GetActions(this, measure);\r\n    }\r\n    function setTimeSignature(numerator, denominator) {\r\n        let timeSignature = {\r\n            beatsPerMeasure: numerator,\r\n            noteValue: denominator\r\n        };\r\n        this._metadata.TimeSignature = timeSignature;\r\n    }\r\n    function setTempo(tempo) {\r\n        this._metadata.Tempo = tempo;\r\n    }\r\n    /* blackswan static functions */\r\n    function chord(notes, duration, ...config) {\r\n        return {\r\n            Notes: notes.map((n) => _synth__WEBPACK_IMPORTED_MODULE_6__[\"Synth\"].SynthesizeNote(_notes__WEBPACK_IMPORTED_MODULE_2__[\"Notes\"].getFrequency(n), config)),\r\n            Duration: duration,\r\n        };\r\n    }\r\n    function note(noteName, duration, ...config) {\r\n        let note = _synth__WEBPACK_IMPORTED_MODULE_6__[\"Synth\"].SynthesizeNote(_notes__WEBPACK_IMPORTED_MODULE_2__[\"Notes\"].getFrequency(noteName), config);\r\n        return {\r\n            Duration: duration,\r\n            Note: note\r\n        };\r\n    }\r\n    function rest(duration) {\r\n        return {\r\n            Duration: duration\r\n        };\r\n    }\r\n    function scale(playables, config) {\r\n        return {\r\n            Config: config || {\r\n                durations: [1 / 4],\r\n                style: []\r\n            },\r\n            Playables: playables\r\n        };\r\n    }\r\n    function sequence(sequence) {\r\n        return sequence;\r\n    }\r\n    let settings = {\r\n        setGain: _synth__WEBPACK_IMPORTED_MODULE_6__[\"Synth\"].SetGain,\r\n        setImproviser: _improviser__WEBPACK_IMPORTED_MODULE_1__[\"Improviser\"].setImproviser,\r\n        setOscillator: _synth__WEBPACK_IMPORTED_MODULE_6__[\"Synth\"].SetOscillator,\r\n        setPlayer: _synth__WEBPACK_IMPORTED_MODULE_6__[\"Synth\"].SetPlayer\r\n    };\r\n    let Base = {\r\n        as: _style__WEBPACK_IMPORTED_MODULE_0__[\"Style\"],\r\n        chord,\r\n        note,\r\n        rest,\r\n        scale,\r\n        sequence,\r\n        settings,\r\n        song: createSong,\r\n    };\r\n    // Create the blackswan global, for people choosing to use it that way\r\n    window.blackswan = Base;\r\n    return Base;\r\n})(window);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Base);\r\n\n\n//# sourceURL=webpack:///./source/base.ts?");

/***/ }),

/***/ "./source/brickwall-limiter.lib.ts":
/*!*****************************************!*\
  !*** ./source/brickwall-limiter.lib.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar sampleRate = 44100; // Hz\r\nvar preGain = 0; //db\r\nvar postGain = 0; //db\r\nvar attackTime = 0; //s\r\nvar releaseTime = 0.05; //s\r\nvar threshold = -2; //dB\r\nvar lookAheadTime = 0.005; //s  5ms hard-coded\r\nvar delayBuffer = new DelayBuffer(lookAheadTime * sampleRate);\r\nfunction DelayBuffer(n) {\r\n    n = Math.floor(n);\r\n    this._array = new Float32Array(2 * n);\r\n    this.length = this._array.length; // can be optimized!\r\n    this.readPointer = 0;\r\n    this.writePointer = n - 1;\r\n    for (var i = 0; i < this.length; i++) {\r\n        this._array[i] = 0;\r\n    }\r\n}\r\nDelayBuffer.prototype.read = function () {\r\n    var value = this._array[this.readPointer % this.length];\r\n    this.readPointer++;\r\n    return value;\r\n};\r\nDelayBuffer.prototype.push = function (v) {\r\n    this._array[this.writePointer % this.length] = v;\r\n    this.writePointer++;\r\n};\r\nvar envelopeSample = 0;\r\nvar getEnvelope = function (data, attackTime, releaseTime, sampleRate) {\r\n    //attack and release in milliseconds\r\n    var attackGain = Math.exp(-1 / (sampleRate * attackTime));\r\n    var releaseGain = Math.exp(-1 / (sampleRate * releaseTime));\r\n    var envelope = new Float32Array(data.length);\r\n    for (var i = 0; i < data.length; i++) {\r\n        var envIn = Math.abs(data[i]);\r\n        if (envelopeSample < envIn) {\r\n            envelopeSample = envIn + attackGain * (envelopeSample - envIn);\r\n        }\r\n        else {\r\n            envelopeSample = envIn + releaseGain * (envelopeSample - envIn);\r\n        }\r\n        envelope[i] = envelopeSample;\r\n    }\r\n    return envelope;\r\n};\r\nvar ampToDB = function (value) {\r\n    return 20 * Math.log10(value);\r\n};\r\nvar dBToAmp = function (db) {\r\n    return Math.pow(10, db / 20);\r\n};\r\nvar limit = function (audioProcessingEvent) {\r\n    var inp = audioProcessingEvent.inputBuffer.getChannelData(0);\r\n    var out = audioProcessingEvent.outputBuffer.getChannelData(0);\r\n    //transform db to amplitude value\r\n    var postGainAmp = dBToAmp(postGain);\r\n    //apply pre gain to signal\r\n    var preGainAmp = dBToAmp(preGain);\r\n    for (var k = 0; k < inp.length; ++k) {\r\n        out[k] = preGainAmp * inp[k];\r\n    }\r\n    var envelopeData = getEnvelope(out, attackTime, releaseTime, sampleRate);\r\n    if (lookAheadTime > 0) {\r\n        //write signal into buffer and read delayed signal\r\n        for (var i = 0; i < out.length; i++) {\r\n            delayBuffer.push(out[i]);\r\n            out[i] = delayBuffer.read();\r\n        }\r\n    }\r\n    //limiter mode: slope is 1\r\n    var slope = 1;\r\n    for (var i = 0; i < inp.length; i++) {\r\n        var gainDB = slope * (threshold - ampToDB(envelopeData[i]));\r\n        //is gain below zero?\r\n        gainDB = Math.min(0, gainDB);\r\n        var gain = dBToAmp(gainDB);\r\n        out[i] *= (gain * postGainAmp);\r\n    }\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (limit);\r\n\n\n//# sourceURL=webpack:///./source/brickwall-limiter.lib.ts?");

/***/ }),

/***/ "./source/improviser.ts":
/*!******************************!*\
  !*** ./source/improviser.ts ***!
  \******************************/
/*! exports provided: Improviser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Improviser\", function() { return Improviser; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./source/base.ts\");\n\r\nfunction getRandomElement(elements) {\r\n    // maximum is exclusive here, so highest number returned will be\r\n    //  (notes.length - 1)\r\n    let max = elements.length;\r\n    let index = Math.floor(Math.random() * max);\r\n    return elements[index];\r\n}\r\nlet _improviser = function getImprovisedSequence(scale, duration) {\r\n    let cursor = 0;\r\n    let nextDuration = getRandomElement(scale.Config.durations);\r\n    let sequence = [];\r\n    while (cursor + nextDuration < duration) {\r\n        let nextPlay = getRandomElement(scale.Playables);\r\n        if (Array.isArray(nextPlay)) {\r\n            let nextChord = _base__WEBPACK_IMPORTED_MODULE_0__[\"blackswan\"].chord(nextPlay, nextDuration, ...scale.Config.style);\r\n            sequence.push(nextChord);\r\n        }\r\n        else {\r\n            let nextNote = _base__WEBPACK_IMPORTED_MODULE_0__[\"blackswan\"].note(nextPlay, nextDuration, ...scale.Config.style);\r\n            sequence.push(nextNote);\r\n        }\r\n        cursor += nextDuration;\r\n        nextDuration = getRandomElement(scale.Config.durations);\r\n    }\r\n    return sequence;\r\n};\r\nfunction improvise(scale, duration) {\r\n    return _improviser(scale, duration);\r\n}\r\nfunction setImproviser(improviser) {\r\n    _improviser = improviser;\r\n}\r\nlet Improviser = {\r\n    improvise,\r\n    setImproviser\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./source/improviser.ts?");

/***/ }),

/***/ "./source/notes.ts":
/*!*************************!*\
  !*** ./source/notes.ts ***!
  \*************************/
/*! exports provided: Notes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Notes\", function() { return Notes; });\n/* harmony import */ var _piano_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piano-data */ \"./source/piano-data.ts\");\n/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validate */ \"./source/validate.ts\");\n\r\n\r\nfunction createNote(noteName, frequency, overrideExisting = false) {\r\n    if (!overrideExisting && !!_piano_data__WEBPACK_IMPORTED_MODULE_0__[\"PianoData\"].NoteMap[noteName]) {\r\n        throw Error(`\r\n      The note \"${noteName}\" already exists and cannot be overwritten unless\r\n      the 'overrideExisting' parameter is set to 'true'.`);\r\n    }\r\n    _piano_data__WEBPACK_IMPORTED_MODULE_0__[\"PianoData\"].NoteMap[noteName] = frequency;\r\n    return;\r\n}\r\nlet _octave = 4;\r\nfunction setOctave(newOctave) {\r\n    _validate__WEBPACK_IMPORTED_MODULE_1__[\"Validate\"].Octave(newOctave);\r\n    _octave = Number(newOctave);\r\n}\r\nfunction getNoteIndex(note) {\r\n    _validate__WEBPACK_IMPORTED_MODULE_1__[\"Validate\"].Note(note);\r\n    let index = _piano_data__WEBPACK_IMPORTED_MODULE_0__[\"PianoData\"].Notes.indexOf(note);\r\n    return index;\r\n}\r\nfunction getNextNote(note) {\r\n    let currentNote = getNoteIndex(note);\r\n    return currentNote + 1 < _piano_data__WEBPACK_IMPORTED_MODULE_0__[\"PianoData\"].Notes.length\r\n        ? _piano_data__WEBPACK_IMPORTED_MODULE_0__[\"PianoData\"].Notes[currentNote + 1]\r\n        : _piano_data__WEBPACK_IMPORTED_MODULE_0__[\"PianoData\"].Notes[0];\r\n}\r\nfunction getPrevNote(note) {\r\n    let currentNote = getNoteIndex(note);\r\n    return currentNote > 0\r\n        ? _piano_data__WEBPACK_IMPORTED_MODULE_0__[\"PianoData\"].Notes[currentNote - 1]\r\n        : _piano_data__WEBPACK_IMPORTED_MODULE_0__[\"PianoData\"].Notes[_piano_data__WEBPACK_IMPORTED_MODULE_0__[\"PianoData\"].Notes.length - 1];\r\n}\r\nfunction getFrequency(noteName) {\r\n    let byKey = _piano_data__WEBPACK_IMPORTED_MODULE_0__[\"PianoData\"].NoteMap[noteName];\r\n    if (byKey) {\r\n        return byKey;\r\n    }\r\n    let key, note, sign = '', octave;\r\n    note = noteName[0].toLowerCase();\r\n    if (noteName.length === 3) {\r\n        sign = noteName[1];\r\n        _validate__WEBPACK_IMPORTED_MODULE_1__[\"Validate\"].Sign(sign);\r\n        octave = Number(noteName[2]);\r\n        _validate__WEBPACK_IMPORTED_MODULE_1__[\"Validate\"].Octave(octave);\r\n    }\r\n    else if (noteName.length === 2) {\r\n        if (!!~_piano_data__WEBPACK_IMPORTED_MODULE_0__[\"PianoData\"].FlatSigns.indexOf(noteName[1]) || !!~_piano_data__WEBPACK_IMPORTED_MODULE_0__[\"PianoData\"].SharpSigns.indexOf(noteName[1])) {\r\n            sign = noteName[1];\r\n            octave = _octave;\r\n        }\r\n        else {\r\n            octave = Number(noteName[1]);\r\n        }\r\n    }\r\n    else if (noteName.length === 1) {\r\n        octave = _octave;\r\n    }\r\n    else {\r\n        throw Error(`Unrecognized note format \"${noteName}\".`);\r\n    }\r\n    if (!!~'abdeg'.indexOf(note) && !!~_piano_data__WEBPACK_IMPORTED_MODULE_0__[\"PianoData\"].FlatSigns.indexOf(sign)) {\r\n        // If it's ABDEG-flat, transform into a sharp\r\n        // This will never change octaves, because C is not in this group\r\n        key = getPrevNote(note) +\r\n            '#' +\r\n            octave;\r\n        return _piano_data__WEBPACK_IMPORTED_MODULE_0__[\"PianoData\"].NoteMap[key];\r\n    }\r\n    else if (!!~'cf'.indexOf(note) && !!~_piano_data__WEBPACK_IMPORTED_MODULE_0__[\"PianoData\"].FlatSigns.indexOf(sign)) {\r\n        // If it's CF-flat, transform into the next note down\r\n        // This changes octaves if the note is a C\r\n        key = getPrevNote(note) +\r\n            (note === 'c' ?\r\n                (octave - 1).toString() :\r\n                octave.toString());\r\n        return _piano_data__WEBPACK_IMPORTED_MODULE_0__[\"PianoData\"].NoteMap[key];\r\n    }\r\n    else if (!!~'be'.indexOf(note) && !!~_piano_data__WEBPACK_IMPORTED_MODULE_0__[\"PianoData\"].SharpSigns.indexOf(sign)) {\r\n        // If it's BE-sharp, transform it into the next note up\r\n        // This changes octaves if the note is a B\r\n        key = getNextNote(note) +\r\n            (note === 'b' ?\r\n                (octave + 1).toString() :\r\n                octave.toString());\r\n        return _piano_data__WEBPACK_IMPORTED_MODULE_0__[\"PianoData\"].NoteMap[key];\r\n    }\r\n    else {\r\n        key = note + (sign || '') + (octave || '');\r\n        let byConstructedKey = _piano_data__WEBPACK_IMPORTED_MODULE_0__[\"PianoData\"].NoteMap[key];\r\n        if (byConstructedKey) {\r\n            return byConstructedKey;\r\n        }\r\n    }\r\n    throw Error(`The note \"${noteName}\" is unknown.`);\r\n}\r\nlet Notes = {\r\n    createNote,\r\n    getFrequency,\r\n    setOctave\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./source/notes.ts?");

/***/ }),

/***/ "./source/piano-data.ts":
/*!******************************!*\
  !*** ./source/piano-data.ts ***!
  \******************************/
/*! exports provided: PianoData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PianoData\", function() { return PianoData; });\n// Only sharps are noted here; flats can be converted on-the-fly\r\nlet _noteMap = {\r\n    'a0': 27.5, 'a#0': 29.1353, 'b0': 30.8677, 'c1': 32.7032, 'c#1': 34.6478,\r\n    'd1': 36.7081, 'd#1': 38.8909, 'e1': 41.2034, 'f1': 43.6535, 'f#1': 46.2493,\r\n    'g1': 48.9994, 'g#1': 51.9131, 'a1': 55.0, 'a#1': 58.2705, 'b1': 61.7354,\r\n    'c2': 65.4064, 'c#2': 69.2957, 'd2': 73.4162, 'd#2': 77.7817, 'e2': 82.4069,\r\n    'f2': 87.3071, 'f#2': 92.4986, 'g2': 97.9989, 'g#2': 103.826, 'a2': 110.0,\r\n    'a#2': 116.541, 'b2': 123.471, 'c3': 130.813, 'c#3': 138.591, 'd3': 146.832,\r\n    'd#3': 155.563, 'e3': 164.814, 'f3': 174.614, 'f#3': 184.997, 'g3': 195.998,\r\n    'g#3': 207.562, 'a3': 220.0, 'a#3': 233.082, 'b3': 246.942, 'c4': 261.626,\r\n    'c#4': 277.183, 'd4': 293.665, 'd#4': 311.127, 'e4': 329.628, 'f4': 349.228,\r\n    'f#4': 369.994, 'g4': 391.995, 'g#4': 415.305, 'a4': 440.0, 'a#4': 466.164,\r\n    'b4': 493.883, 'c5': 523.251, 'c#5': 554.365, 'd5': 587.330, 'd#5': 622.254,\r\n    'e5': 659.255, 'f5': 698.456, 'f#5': 739.989, 'g5': 783.991, 'g#5': 830.609,\r\n    'a5': 880.0, 'a#5': 932.328, 'b5': 987.767, 'c6': 1046.5, 'c#6': 1108.73,\r\n    'd6': 1174.66, 'd#6': 1244.51, 'e6': 1318.51, 'f6': 1396.91, 'f#6': 1479.98,\r\n    'g6': 1567.98, 'g#6': 1661.22, 'a6': 1760.0, 'a#6': 1864.66, 'b6': 1975.53,\r\n    'c7': 2093.00, 'c#7': 2217.46, 'd7': 2349.32, 'd#7': 2489.02, 'e7': 2637.02,\r\n    'f7': 2793.83, 'f#7': 2959.96, 'g7': 3135.96, 'g#7': 3322.44, 'a7': 3520.0,\r\n    'a#7': 3729.31, 'b7': 3951.07, 'c8': 4186.01\r\n};\r\nlet _notes = [\r\n    'a', 'b', 'c', 'd', 'e', 'f', 'g'\r\n];\r\nlet _flatSigns = ['b', '@'];\r\nlet _sharpSigns = ['#'];\r\nlet PianoData = {\r\n    FlatSigns: _flatSigns,\r\n    NoteMap: _noteMap,\r\n    Notes: _notes,\r\n    SharpSigns: _sharpSigns\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./source/piano-data.ts?");

/***/ }),

/***/ "./source/player.ts":
/*!**************************!*\
  !*** ./source/player.ts ***!
  \**************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\n/* harmony import */ var _synth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./synth */ \"./source/synth.ts\");\n\r\nfunction play(when) {\r\n    if (when === undefined) {\r\n        when = _synth__WEBPACK_IMPORTED_MODULE_0__[\"Synth\"].Context.currentTime;\r\n    }\r\n    for (let track of this._master) {\r\n        for (let note of track.Notes) {\r\n            playAt(note, track.WhenSeconds + when, track.DurationSeconds);\r\n        }\r\n    }\r\n}\r\nfunction stop() {\r\n    for (let track of this._master) {\r\n        for (let note of track.Notes) {\r\n            note.Stop();\r\n        }\r\n    }\r\n}\r\nfunction playAt(note, whenSeconds, durationSeconds, startingAtSeconds = 0) {\r\n    let startSeconds = Math.max(whenSeconds - startingAtSeconds, 0);\r\n    let stopSeconds = Math.max((whenSeconds + durationSeconds) - startingAtSeconds, 0);\r\n    if (stopSeconds === 0) {\r\n        return;\r\n    }\r\n    note.Play(startSeconds, stopSeconds);\r\n}\r\nlet Player = {\r\n    play,\r\n    stop\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./source/player.ts?");

/***/ }),

/***/ "./source/scheduler.ts":
/*!*****************************!*\
  !*** ./source/scheduler.ts ***!
  \*****************************/
/*! exports provided: Scheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Scheduler\", function() { return Scheduler; });\n/* harmony import */ var _improviser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./improviser */ \"./source/improviser.ts\");\n/* harmony import */ var _synth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./synth */ \"./source/synth.ts\");\n/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validate */ \"./source/validate.ts\");\nconst WebAudioScheduler = __webpack_require__(/*! web-audio-scheduler */ \"./node_modules/web-audio-scheduler/index.js\");\r\n\r\n\r\n\r\nfunction improvises(context, improvisable, duration) {\r\n    let improvisedSequence = _improviser__WEBPACK_IMPORTED_MODULE_0__[\"Improviser\"].improvise(improvisable, duration);\r\n    plays(context, improvisedSequence);\r\n}\r\nfunction plays(context, playable) {\r\n    let tracksToAdd = getTracks(context, playable);\r\n    context.Song._master = context.Song._master.concat(tracksToAdd);\r\n}\r\nfunction repeats(context, repeatable, config) {\r\n    let tracksToAdd = [];\r\n    let baseTrack = getTracks(context, repeatable)[0];\r\n    for (let index = 0; index < config.times; index++) {\r\n        let track = {\r\n            Notes: baseTrack.Notes,\r\n            DurationSeconds: baseTrack.DurationSeconds,\r\n            WhenSeconds: baseTrack.WhenSeconds + (index * noteValueToSeconds(config.every, context.Song))\r\n        };\r\n        tracksToAdd.push(track);\r\n    }\r\n    context.Song._master = context.Song._master.concat(tracksToAdd);\r\n}\r\nfunction noteValueToMeasures(noteValue, song) {\r\n    return noteValue * (song._metadata.TimeSignature.noteValue /\r\n        song._metadata.TimeSignature.beatsPerMeasure);\r\n}\r\nfunction noteValueToSeconds(noteValue, song) {\r\n    let beatsPerMinute = song._metadata.Tempo;\r\n    let secondsPerMinute = 60;\r\n    let secondsPerBeat = secondsPerMinute / beatsPerMinute;\r\n    let beats = noteValue * song._metadata.TimeSignature.noteValue;\r\n    return secondsPerBeat * beats;\r\n}\r\nfunction measuresToSeconds(measures, song) {\r\n    let beatsPerMinute = song._metadata.Tempo;\r\n    let secondsPerMinute = 60;\r\n    let beatsPerSecond = beatsPerMinute / secondsPerMinute;\r\n    let beatsPerMeasure = song._metadata.TimeSignature.beatsPerMeasure;\r\n    let secondsPerMeasure = beatsPerMeasure / beatsPerSecond;\r\n    return secondsPerMeasure * measures;\r\n}\r\nfunction getTracks(context, playable) {\r\n    let WhenSeconds = measuresToSeconds(context.Measure, context.Song);\r\n    if (_validate__WEBPACK_IMPORTED_MODULE_2__[\"Validate\"].isTimedNote(playable)) {\r\n        let track = {\r\n            Notes: [playable.Note],\r\n            DurationSeconds: noteValueToSeconds(playable.Duration, context.Song),\r\n            WhenSeconds: WhenSeconds\r\n        };\r\n        return [track];\r\n    }\r\n    else if (_validate__WEBPACK_IMPORTED_MODULE_2__[\"Validate\"].isTimedChord(playable)) {\r\n        let track = {\r\n            Notes: playable.Notes,\r\n            DurationSeconds: noteValueToSeconds(playable.Duration, context.Song),\r\n            WhenSeconds: WhenSeconds\r\n        };\r\n        return [track];\r\n    }\r\n    else {\r\n        return playable.map((item, index) => {\r\n            if (index > 0) {\r\n                context.Measure += noteValueToMeasures(playable[index - 1].Duration, context.Song);\r\n            }\r\n            if (_validate__WEBPACK_IMPORTED_MODULE_2__[\"Validate\"].isTimedNote(item)) {\r\n                return getTracks(context, item);\r\n            }\r\n            else if (_validate__WEBPACK_IMPORTED_MODULE_2__[\"Validate\"].isTimedChord(item)) {\r\n                return getTracks(context, item);\r\n            }\r\n            else {\r\n                let track = {\r\n                    Notes: [],\r\n                    DurationSeconds: noteValueToSeconds(item.Duration, context.Song),\r\n                    WhenSeconds: WhenSeconds\r\n                };\r\n                return [track];\r\n            }\r\n        }).reduce((a, b) => a.concat(b), []);\r\n    }\r\n}\r\nfunction getActions(song, measure) {\r\n    let context = _synth__WEBPACK_IMPORTED_MODULE_1__[\"Synth\"].Context;\r\n    let scheduler = new WebAudioScheduler({ context });\r\n    scheduler.start();\r\n    let actionContext = {\r\n        Measure: measure,\r\n        Song: song\r\n    };\r\n    let actions = {\r\n        callback: function (callback) {\r\n            let whenSeconds = measuresToSeconds(measure, song);\r\n            scheduler.insert(whenSeconds + context.currentTime, callback);\r\n        },\r\n        improvises: function (improvisable, duration) {\r\n            return improvises(actionContext, improvisable, duration);\r\n        },\r\n        plays: function (playable) {\r\n            return plays(actionContext, playable);\r\n        },\r\n        repeats: function (repeatable, config) {\r\n            return repeats(actionContext, repeatable, config);\r\n        }\r\n    };\r\n    return actions;\r\n}\r\nlet Scheduler = {\r\n    GetActions: getActions,\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./source/scheduler.ts?");

/***/ }),

/***/ "./source/song.ts":
/*!************************!*\
  !*** ./source/song.ts ***!
  \************************/
/*! exports provided: DefaultSongData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DefaultSongData\", function() { return DefaultSongData; });\nlet _commonTime = {\r\n    beatsPerMeasure: 4,\r\n    noteValue: 4\r\n};\r\nlet _defaultTempo = 120;\r\nlet _defaultTitle = 'Unnamed';\r\nfunction DefaultSongData() {\r\n    let metadata = {\r\n        Tempo: _defaultTempo,\r\n        TimeSignature: _commonTime,\r\n        Title: _defaultTitle,\r\n    };\r\n    return metadata;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./source/song.ts?");

/***/ }),

/***/ "./source/style.ts":
/*!*************************!*\
  !*** ./source/style.ts ***!
  \*************************/
/*! exports provided: Style, StyleDynamics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Style\", function() { return Style; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyleDynamics\", function() { return StyleDynamics; });\nvar Style;\r\n(function (Style) {\r\n    Style[Style[\"None\"] = 0] = \"None\";\r\n    Style[Style[\"Legato\"] = 1] = \"Legato\";\r\n    Style[Style[\"Staccato\"] = 2] = \"Staccato\";\r\n    Style[Style[\"Pianissimo\"] = 3] = \"Pianissimo\";\r\n    Style[Style[\"Piano\"] = 4] = \"Piano\";\r\n    Style[Style[\"MezzoPiano\"] = 5] = \"MezzoPiano\";\r\n    Style[Style[\"MezzoForte\"] = 6] = \"MezzoForte\";\r\n    Style[Style[\"Forte\"] = 7] = \"Forte\";\r\n    Style[Style[\"Fortissimo\"] = 8] = \"Fortissimo\";\r\n})(Style || (Style = {}));\r\n;\r\nlet StyleDynamics = {\r\n    [Style.Pianissimo]: -3,\r\n    [Style.Piano]: -2,\r\n    [Style.MezzoPiano]: -1,\r\n    [Style.MezzoForte]: 1,\r\n    [Style.Forte]: 2,\r\n    [Style.Fortissimo]: 3\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./source/style.ts?");

/***/ }),

/***/ "./source/synth.ts":
/*!*************************!*\
  !*** ./source/synth.ts ***!
  \*************************/
/*! exports provided: Synth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Synth\", function() { return Synth; });\n/* harmony import */ var _brickwall_limiter_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brickwall-limiter.lib */ \"./source/brickwall-limiter.lib.ts\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./source/style.ts\");\n// This file contains code for generating the piano synth.\r\n// All variables are pluggable so that a user-configured synth\r\n//  can be used seamlessly, and arbitrary notes can be played with\r\n//  arbitrary articulation and dynamics.\r\n\r\n\r\nlet _context = new AudioContext();\r\nlet masterGain = _context.createGain();\r\nmasterGain.gain.value = 0.7;\r\nlet brickwallLimiter = _context.createScriptProcessor(4096, 1, 1);\r\nbrickwallLimiter.onaudioprocess = _brickwall_limiter_lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\nbrickwallLimiter.connect(_context.destination);\r\nmasterGain.connect(brickwallLimiter);\r\nfunction defaultGain(frequency, style, masterGain) {\r\n    let gainNode = _context.createGain();\r\n    gainNode.gain.value = 0.2;\r\n    style.some((st) => {\r\n        let dynamics = _style__WEBPACK_IMPORTED_MODULE_1__[\"StyleDynamics\"][st];\r\n        if (dynamics) {\r\n            gainNode.gain.value += dynamics * 0.12;\r\n            return true;\r\n        }\r\n        return false;\r\n    });\r\n    // Lower frequencies are too quiet and higher frequencies are too loud.\r\n    // To solve this, let's modify the gain based on the frequency.\r\n    // Frequency is exponential, i.e. frequency = note ** 2\r\n    // We'll square root everything to make it linear\r\n    let frequencyLinear = Math.sqrt(frequency);\r\n    let maxFrequencyLinear = Math.sqrt(4200);\r\n    // Then we take the percent of max frequency and place it in the range [-f + g, f + g]\r\n    //  where f + g is the maximum amount we want to increase gain\r\n    //  do magic to it if f + g > 0\r\n    //  then add that to the gain.\r\n    let frequencyScale = frequencyLinear / maxFrequencyLinear;\r\n    let frequencyFactor = 0.25;\r\n    let frequencyOffset = 0.08;\r\n    let frequencyModifier = (frequencyScale * -frequencyFactor) + (frequencyFactor / 2) + frequencyOffset;\r\n    if (frequencyModifier > 0) {\r\n        frequencyModifier = (Math.pow((frequencyModifier + 1), 3)) - 1;\r\n    }\r\n    gainNode.gain.value += frequencyModifier;\r\n    gainNode.connect(masterGain);\r\n    return gainNode;\r\n}\r\nfunction defaultOscillator(frequency, _style, gainNode) {\r\n    let oscillator = _context.createOscillator();\r\n    oscillator.frequency.value = frequency;\r\n    oscillator.type = 'sine';\r\n    oscillator.connect(gainNode);\r\n    return oscillator;\r\n}\r\nfunction defaultPlayer(note, startSeconds, stopSeconds) {\r\n    let nodes = note.GetNodeChain();\r\n    let noteDuration = stopSeconds - startSeconds, noteFadePct = 0.04, noteStopTime = stopSeconds;\r\n    if (!!~note.Style.indexOf(_style__WEBPACK_IMPORTED_MODULE_1__[\"Style\"].Legato)) {\r\n        noteFadePct = 0.01;\r\n        noteStopTime = stopSeconds;\r\n    }\r\n    else if (!!~note.Style.indexOf(_style__WEBPACK_IMPORTED_MODULE_1__[\"Style\"].Staccato)) {\r\n        noteFadePct = 0.01;\r\n        noteStopTime = startSeconds + 0.15;\r\n    }\r\n    let noteFadeTime = noteFadePct * noteDuration;\r\n    let maxGain = nodes.Gain.gain.value;\r\n    nodes.Gain.gain.value = 0;\r\n    nodes.Gain.gain.setTargetAtTime(maxGain, startSeconds, noteFadeTime);\r\n    nodes.Gain.gain.setTargetAtTime(0, noteStopTime - (noteFadeTime * 4), noteFadeTime);\r\n    nodes.Oscillator.start(startSeconds);\r\n    nodes.Oscillator.stop(noteStopTime);\r\n}\r\nlet _gain = defaultGain;\r\nlet _oscillator = defaultOscillator;\r\nlet _player = defaultPlayer;\r\nfunction synthesizeNote(frequency, style) {\r\n    let note = {\r\n        Frequency: frequency,\r\n        GetNodeChain: function () {\r\n            if (this._nodeChain) {\r\n                return this._nodeChain;\r\n            }\r\n            let gain = _gain(frequency, style, masterGain);\r\n            let oscillator = _oscillator(frequency, style, gain);\r\n            let nodeChain = {\r\n                Gain: gain,\r\n                Oscillator: oscillator\r\n            };\r\n            this._nodeChain = nodeChain;\r\n            return this._nodeChain;\r\n        },\r\n        Play: function (startSeconds, stopSeconds) {\r\n            _player(this, startSeconds, stopSeconds);\r\n            this._started = true;\r\n        },\r\n        Stop: function () {\r\n            if (this._started) {\r\n                this.GetNodeChain().Oscillator.stop();\r\n            }\r\n            this._nodeChain = null;\r\n        },\r\n        Style: style,\r\n        _nodeChain: null,\r\n        _started: false\r\n    };\r\n    return note;\r\n}\r\nfunction setGain(gain) {\r\n    _gain = gain;\r\n}\r\nfunction setOscillator(oscillator) {\r\n    _oscillator = oscillator;\r\n}\r\nfunction setPlayer(player) {\r\n    _player = player;\r\n}\r\nlet Synth = {\r\n    Context: _context,\r\n    SetGain: setGain,\r\n    SetOscillator: setOscillator,\r\n    SetPlayer: setPlayer,\r\n    SynthesizeNote: synthesizeNote,\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./source/synth.ts?");

/***/ }),

/***/ "./source/validate.ts":
/*!****************************!*\
  !*** ./source/validate.ts ***!
  \****************************/
/*! exports provided: Validate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Validate\", function() { return Validate; });\n/* harmony import */ var _piano_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piano-data */ \"./source/piano-data.ts\");\n\r\nfunction isTimedChord(value) {\r\n    return value.Notes !== undefined;\r\n}\r\nfunction isTimedNote(value) {\r\n    return value.Note !== undefined;\r\n}\r\nfunction validateNote(note) {\r\n    if (!~_piano_data__WEBPACK_IMPORTED_MODULE_0__[\"PianoData\"].Notes.indexOf(note)) {\r\n        throw Error(`\"${note}\" is not a valid note name between \"a\" and \"g\".`);\r\n    }\r\n}\r\nfunction validateOctave(octave) {\r\n    octave = Number(octave);\r\n    if (isNaN(octave)) {\r\n        throw Error(`Invalid octave \"${octave}\".`);\r\n    }\r\n    if (octave > 8 || octave < 0) {\r\n        throw Error(`This octave is out of range (0 - 8) on a standard piano.`);\r\n    }\r\n}\r\nfunction validateSign(sign) {\r\n    if (!~_piano_data__WEBPACK_IMPORTED_MODULE_0__[\"PianoData\"].FlatSigns.indexOf(sign) && !~_piano_data__WEBPACK_IMPORTED_MODULE_0__[\"PianoData\"].SharpSigns.indexOf(sign)) {\r\n        throw Error(`Invalid sign \"${sign}\".`);\r\n    }\r\n}\r\nlet Validate = {\r\n    isTimedChord,\r\n    isTimedNote,\r\n    Note: validateNote,\r\n    Octave: validateOctave,\r\n    Sign: validateSign\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./source/validate.ts?");

/***/ })

/******/ });