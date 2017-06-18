import { Sequence } from './scheduler';
import { Style } from './style';
export interface ImproviseConfig {
    durations: number[];
    style: Style[];
}
export interface Scale {
    Config: ImproviseConfig;
    Playables: Array<string | Array<string>>;
}
declare let Improviser: {
    improvise: (scale: Scale, duration: number) => Sequence;
    setImproviser: (improviser: (scale: Scale, duration: number) => Sequence) => void;
};
export { Improviser };
