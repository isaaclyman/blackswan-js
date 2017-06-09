function improvises(improvisable) {
}
function plays(playable) {
}
function repeats(repeatable) {
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