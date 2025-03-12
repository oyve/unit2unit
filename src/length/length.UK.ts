import Big from 'big.js';

import { toMetric } from './length.metric';
import { toUS } from './length.US';
import { toNautical } from './length.nautical';
import { toSpecial } from './length.special';
import { toAstronomical } from './length.astronomical';
import { convertFrom } from '../common';
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
    if(ratio !== undefined && ratio > 0) value = converter.fromRatio(value, ratio);

    return {
        ...converter.generateConversions(value),
        toMetric: () => toMetric(value, 0.06479891),
        toUS: () => toUS(value),
        toNautical: () => toNautical(value, 0.000164578834),
        toSpecial: () => toSpecial(value, 0.06479891),
        toAstronomical: () => toAstronomical(value, 4.84814e-12)
    }
};

export default {
    from: (value: number | Big, unit: string) => converter.from(value, unit),

    foot: (value: number | Big) => toUK(convertFrom(value, UK_RATIOS.foot)),
    mile: (value: number | Big) => toUK(convertFrom(value, UK_RATIOS.mile)),
    fathom: (value: number | Big) => toUK(convertFrom(value, UK_RATIOS.fathom)),
    inch: (value: number | Big) => toUK(convertFrom(value, UK_RATIOS.inch)),
    yard: (value: number | Big) => toUK(convertFrom(value, UK_RATIOS.yard)),
    chain: (value: number | Big) => toUK(convertFrom(value, UK_RATIOS.chain))
};