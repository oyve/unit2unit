import Big from 'big.js';
import { toMetric } from './length.metric';
import { toUS } from './length.US';
import { toNautical } from './length.nautical';
import { toSpecial } from './length.special';
import { toAstronomical } from './length.astronomical';
import UnitConverter from '../unitConverter';

export const UK_RATIOS = { //to the foot
    foot: 1,
    mile: 5280,
    fathom: 6,
    inch: 1 / 12,
    yard: 3,
    chain: 66
};

const converter = new UnitConverter(UK_RATIOS);

export const toUK = (value: number | Big, ratio?: number) => {
    value = ratio && ratio > 0 ? converter.fromRatio(value, ratio) : value;

    return {
        ...converter.createToMethods(value),
        toMetric: () => toMetric(value, 0.06479891),
        toUS: () => toUS(value),
        toNautical: () => toNautical(value, 0.000164578834),
        toSpecial: () => toSpecial(value, 0.06479891),
        toAstronomical: () => toAstronomical(value, 4.84814e-12)
    };
};

export default {
    from: (value: number | Big, unit: string) => converter.from(value, unit),
    ...converter.createFromMethods(toUK)
};