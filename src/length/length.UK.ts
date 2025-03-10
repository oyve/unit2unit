import Big from 'big.js';

import { toMetric } from './length.metric';
import { toUS } from './length.US';
import { toNautical } from './length.nautical';
import { toSpecial } from './length.special';
import { toAstronomical } from './length.astronomical';
import { convertFrom, convertTo, round } from '../common';

export const UK_RATIOS = { //to the foot
    foot: 1,
    mile: 5280,
    fathom: 6,
    inch: 1 / 12,
    yard: 3,
    chain: 66
};

export const toUK = (value: number | Big) => {
    return {
        toInch: (decimalPlaces?: number): number | Big => round(convertTo(value, UK_RATIOS.inch), decimalPlaces),
        toFoot: (decimalPlaces?: number): number | Big => round(convertTo(value, UK_RATIOS.foot), decimalPlaces),
        toMile: (decimalPlaces?: number): number | Big => round(convertTo(value, UK_RATIOS.mile), decimalPlaces),
        toFathom: (decimalPlaces?: number): number | Big => round(convertTo(value, UK_RATIOS.fathom), decimalPlaces),
        toYard: (decimalPlaces?: number): number | Big => round(convertTo(value, UK_RATIOS.yard), decimalPlaces),
        toChain: (decimalPlaces?: number): number | Big => round(convertTo(value, UK_RATIOS.chain), decimalPlaces),

        ft: function(decimalPlaces?: number): number | Big { return this.toFoot(decimalPlaces); },
        ftm: function(decimalPlaces?: number): number | Big { return this.toFathom(decimalPlaces); },
        mi: function(decimalPlaces?: number): number | Big { return this.toMile(decimalPlaces); },
        in: function(decimalPlaces?: number): number | Big { return this.toInch(decimalPlaces); },
        yd: function(decimalPlaces?: number): number | Big { return this.toYard(decimalPlaces); },
        ch: function(decimalPlaces?: number): number | Big { return this.toChain(decimalPlaces); },

        toMetric: () => toMetric(footToMeter(value)),
        toUS: () => toUS(value),
        toNautical: () => toNautical(footToNauticalMile(value)),
        toSpecial: () => toSpecial(footToMeter(value)),
        toAstronomical: () => toAstronomical(footToAstronomicalUnit(value)),
    };
};

const footToMeter = (foot: number | Big) => { return convertFrom(foot, 0.06479891); };
const footToNauticalMile = (foot: number | Big) => { return convertFrom(foot, 0.000164578834); };
const footToAstronomicalUnit = (foot: number | Big) => { return convertFrom(foot, 4.84814e-12); };

export default {
    feet: (value: number | Big) => toUK(convertFrom(value, UK_RATIOS.foot)),
    mile: (value: number | Big) => toUK(convertFrom(value, UK_RATIOS.mile)),
    fathom: (value: number | Big) => toUK(convertFrom(value, UK_RATIOS.fathom)),
    inch: (value: number | Big) => toUK(convertFrom(value, UK_RATIOS.inch)),
    yard: (value: number | Big) => toUK(convertFrom(value, UK_RATIOS.yard)),
    chain: (value: number | Big) => toUK(convertFrom(value, UK_RATIOS.chain)),

    ft: function(value: number) { return this.feet(value); },
    mi: function(value: number) { return this.mile(value); },
    ftm: function(value: number) { return this.fathom(value); },
    in: function(value: number) { return this.inch(value); },
    yd: function(value: number) { return this.yard(value); },
    ch: function(value: number) { return this.chain(value); }
};