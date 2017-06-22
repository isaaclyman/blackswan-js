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

export interface StyleDynamicsDict {
  [style: number]: number;
}

let StyleDynamics: StyleDynamicsDict = {
  [Style.Pianissimo]: -3,
  [Style.Piano]: -2,
  [Style.MezzoPiano]: -1,
  [Style.MezzoForte]: 1,
  [Style.Forte]: 2,
  [Style.Fortissimo]: 3
};

export { Style, StyleDynamics };
