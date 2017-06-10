import { Validate } from './validate';
function improvises(scale) {
}
function plays(playable) {
    this.Song._master.concat(getTracks(this, playable));
}
function repeats(repeatable, config) {
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
    if (Validate.isTimedNote(playable)) {
        let track = {
            Notes: [playable.Note],
            DurationSeconds: measuresToSeconds(playable.Duration, context.Song),
            WhenSeconds: WhenSeconds
        };
        return [track];
    }
    else if (Validate.isTimedChord(playable)) {
        let track = {
            Notes: playable.Notes,
            DurationSeconds: measuresToSeconds(playable.Duration, context.Song),
            WhenSeconds: WhenSeconds
        };
        return [track];
    }
    else {
        return playable.map((item) => {
            if (Validate.isTimedNote(item)) {
                return getTracks(context, item);
            }
            else if (Validate.isTimedChord(item)) {
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
function getActions(measure) {
    let actionContext = {
        Measure: measure,
        Song: this
    };
    let actions = {
        improvises: improvises.bind(actionContext),
        plays: plays.bind(actionContext),
        repeats: repeats.bind(actionContext)
    };
    return actions;
}
let Scheduler = {
    GetActions: getActions,
};
export { Scheduler };
//# sourceMappingURL=scheduler.js.map