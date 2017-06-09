import { Validate } from './validate';
function improvises(scale) {
}
function plays(playable) {
    this.Song._master.concat(getTracks(this, playable));
}
function repeats(repeatable, config) {
}
function getRelativeWhen(measure, song) {
    let beatsPerMinute = song._metadata.Tempo;
    let secondsPerMinute = 60;
    let beatsPerSecond = beatsPerMinute / secondsPerMinute;
    let beatsPerMeasure = song._metadata.TimeSignature.beatsPerMeasure;
    return (beatsPerSecond / beatsPerMeasure) * measure;
}
function getTracks(context, playable) {
    let relativeWhen = getRelativeWhen(context.Measure, context.Song);
    if (Validate.isTimedNote(playable)) {
        let track = {
            Notes: [playable.Note],
            Duration: playable.Duration,
            RelativeWhen: relativeWhen
        };
        return [track];
    }
    else if (Validate.isTimedChord(playable)) {
        let track = {
            Notes: playable.Notes,
            Duration: playable.Duration,
            RelativeWhen: relativeWhen
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
                    Duration: item.Duration,
                    RelativeWhen: relativeWhen
                };
                return [track];
            }
        }).reduce((a, b) => a.concat(b));
    }
}
function getActions(measure, song) {
    let actionContext = {
        Measure: measure,
        Song: song
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