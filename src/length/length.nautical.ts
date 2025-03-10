import Big from 'big.js';

import { toUK } from './length.UK';
import { toUS } from './length.US';
import { toAstronomical } from "./length.astronomical";
import { toSpecial } from './length.special';
import { toMetric } from './length.metric';
import { convertFrom, convertTo, round } from '../common';

const NAUTICAL_RATIOS: { [key: string]: number } = { //to the nautical mile
    foot: 1 / 6076.12,
    cableLength: 1 / 10,
    fathom: 1 / 1013.333,
    league: 3,
    nauticalMile: 1
};

export const toNautical = (value: number | Big) => {
    return {
        toFoot: (decimalPlaces?: number) => round(convertTo(value, NAUTICAL_RATIOS.foot), decimalPlaces),
        toCableLength: (decimalPlaces?: number) => round(convertTo(value, NAUTICAL_RATIOS.cableLength), decimalPlaces),
        toFathom: (decimalPlaces?: number) => round(convertTo(value, NAUTICAL_RATIOS.fathom), decimalPlaces),
        toLeague: (decimalPlaces?: number) => round(convertTo(value, NAUTICAL_RATIOS.league), decimalPlaces),
        toNauticalMile: (decimalPlaces?: number) => round(convertTo(value, NAUTICAL_RATIOS.nauticalMile), decimalPlaces),

        ft: function(decimalPlaces?: number) { return this.toFoot(decimalPlaces); },
        cb: function(decimalPlaces?: number) { return this.toCableLength(decimalPlaces); },
        ftm: function(decimalPlaces?: number) { return this.toFathom(decimalPlaces); },
        lg: function(decimalPlaces?: number) { return this.toLeague(decimalPlaces); },
        nmi: function(decimalPlaces?: number) { return this.toNauticalMile(decimalPlaces); },

        toMetric: () => toMetric(nauticalMileToMetric(value)),
        toUK: () => toUK(nauticalMileToFoot(value)),
        toUS: () => toUS(nauticalMileToFoot(value)),
        toAstronomical: () => toAstronomical(nauticalMileToAstronomical(value)),
        toSpecial: () => toSpecial(value),
    };
};

const nauticalMileToMetric = (mile: number | Big) => { return convertFrom(mile, 1852); };
const nauticalMileToFoot = (mile: number | Big) => { return convertFrom(mile, 6076.12); };
const nauticalMileToAstronomical = (mile: number | Big) => { return convertFrom(mile, 1.5077945e-13); };

export default {
    foot: (value: number | Big) => toNautical(convertFrom(value, NAUTICAL_RATIOS.foot)),
    cableLength: (value: number | Big) => toNautical(convertFrom(value, NAUTICAL_RATIOS.cableLength)),
    fathom: (value: number | Big) => toNautical(convertFrom(value, NAUTICAL_RATIOS.fathom)),
    league: (value: number | Big) => toNautical(convertFrom(value, NAUTICAL_RATIOS.league)),
    nauticalMile: (value: number | Big) => toNautical(convertFrom(value, NAUTICAL_RATIOS.nauticalMile)),

    ft: function(value: number | Big) { return this.foot(value); },
    cb: function(value: number | Big) { return this.cableLength(value); },
    ftm: function(value: number | Big) { return this.fathom(value); },
    lg: function(value: number | Big) { return this.league(value); },
    nmi: function(value: number | Big) { return this.nauticalMile(value); },
};