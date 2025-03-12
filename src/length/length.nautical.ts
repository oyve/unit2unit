import Big from 'big.js';

import { toUK } from './length.UK';
import { toUS } from './length.US';
import { toAstronomical } from "./length.astronomical";
import { toSpecial } from './length.special';
import { toMetric } from './length.metric';
import UnitConverter from '../unitConverter';

const NAUTICAL_RATIOS = { //to the nautical mile
    foot: 1 / 6076.12,
    cableLength: 1 / 10,
    fathom: 1 / 1013.333,
    league: 3,
    nauticalMile: 1
};

const converter = new UnitConverter(NAUTICAL_RATIOS);

export const toNautical = (value: number | Big, ratio?: number) => {
    if(ratio !== undefined && ratio > 0) value = converter.fromRatio(value, ratio);

    return {
        ...converter.generateConversions(value),
        toUK: () => toUK(value, 3.28084),
        toUS: () => toUS(value, 3.28084),
        toSpecial: () => toSpecial(value),
        toMetric: () => toMetric(value, 1852),
        toAstronomical: () => toAstronomical(value, 6.68459e-12),
    }
};

export default {
    from: (value: number | Big, unit: string) => converter.from(value, unit),

    foot: (value: number | Big) => toNautical(converter.fromRatio(value, NAUTICAL_RATIOS.foot)),
    cableLength: (value: number | Big) => toNautical(converter.fromRatio(value, NAUTICAL_RATIOS.cableLength)),
    fathom: (value: number | Big) => toNautical(converter.fromRatio(value, NAUTICAL_RATIOS.fathom)),
    league: (value: number | Big) => toNautical(converter.fromRatio(value, NAUTICAL_RATIOS.league)),
    nauticalMile: (value: number | Big) => toNautical(converter.fromRatio(value, NAUTICAL_RATIOS.nauticalMile)),

    // ft: function(value: number | Big) { return this.foot(value); },
    // cb: function(value: number | Big) { return this.cableLength(value); },
    // ftm: function(value: number | Big) { return this.fathom(value); },
    // lg: function(value: number | Big) { return this.league(value); },
    // nmi: function(value: number | Big) { return this.nauticalMile(value); },
};