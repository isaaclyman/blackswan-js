let _commonTime = {
    beatsPerBar: 4,
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
export { DefaultSongData };
//# sourceMappingURL=song-metadata.js.map