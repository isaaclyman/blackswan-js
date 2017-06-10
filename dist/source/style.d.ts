declare enum Style {
    None = 0,
    Legato = 1,
    Staccato = 2,
    Pianissimo = 3,
    Piano = 4,
    MezzoPiano = 5,
    MezzoForte = 6,
    Forte = 7,
    Fortissimo = 8,
}
declare let StyleDynamics: {
    [style: Style]: number;
};
export { Style, StyleDynamics };
