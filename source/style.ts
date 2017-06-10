enum Style {
  None,
  Legato,
  Staccato,
  Pianissimo,
  Piano,
  MezzoPiano,
  MezzoForte,
  Forte,
  Fortissimo
};

interface StyleDynamicsDict {
  [style: Style]: number;
}

let StyleDynamics: StyleDynamicsDict = {
  [Style.Pianissimo]: 0.01,
  [Style.Piano]: 0.05,
  [Style.MezzoPiano]: 0.2,
  [Style.MezzoForte]: 0.4,
  [Style.Forte]: 0.6,
  [Style.Fortissimo]: 1.0
};

export { Style, StyleDynamics };
