import Big from 'big.js';

import { toMetric } from './length.metric'
import UK, { toUK, UK_RATIOS } from './length.UK';
import { toNautical } from './length.nautical';
import { toSpecial } from './length.special';
import { toAstronomical } from "./length.astronomical";
import { convertFrom, convertTo, round } from '../common';

const US_RATIOS: { [key: string]: number } = { //to the meter
	cableLength: 219.456,
	rod: 5.0292,
	furlong: 201.168
};

export const toUS = (value: number | Big) => {
    return {
        toInch: (decimalPlaces?: number): number | Big => toUK(value).toInch(decimalPlaces), //same as UK
        toFoot: (decimalPlaces?: number): number | Big => toUK(value).toFoot(decimalPlaces), //same as UK
        toYard: (decimalPlaces?: number): number | Big => toUK(value).toYard(decimalPlaces), //same as UK
        toMile: (decimalPlaces?: number): number | Big => toUK(value).toMile(decimalPlaces), //same as UK
        toCableLength: (decimalPlaces?: number): number | Big => round(convertTo(value, US_RATIOS.cableLength), decimalPlaces),
        toRod: (decimalPlaces?: number): number | Big => round(convertTo(value, US_RATIOS.rod), decimalPlaces),
        toChain: (decimalPlaces?: number): number | Big => toUK(value).toChain(decimalPlaces), //same as UK
        toFurlong: (decimalPlaces?: number): number | Big => round(convertTo(value, US_RATIOS.furlong), decimalPlaces),

        in: function(decimalPlaces?: number): number | Big { return this.toInch(decimalPlaces); },
        ft: function(decimalPlaces?: number): number | Big { return this.toFoot(decimalPlaces); },
        yd: function(decimalPlaces?: number): number | Big { return this.toYard(decimalPlaces); },
        mi: function(decimalPlaces?: number): number | Big { return this.toMile(decimalPlaces); },
        cb: function(decimalPlaces?: number): number | Big { return this.toCableLength(decimalPlaces); },
        rd: function(decimalPlaces?: number): number | Big { return this.toRod(decimalPlaces); },
        ch: function(decimalPlaces?: number): number | Big { return this.toChain(decimalPlaces); },
        fur: function(decimalPlaces?: number): number | Big { return this.toFurlong(decimalPlaces); },

        toMetric: () => toMetric(footToMeter(value)),
        toUK: () => toUK(value),
        toNautical: () => toNautical(footToNauticalMile(value)),
        toSpecial: () => toSpecial(value),
        toAstronomical: () => toAstronomical(footToAstronomicalUnit(value)),
    }
}

const footToMeter = (foot: number | Big) => { return convertFrom(foot, 0.06479891); };
const footToNauticalMile = (foot: number | Big) => { return convertFrom(foot, 0.000164578834); };
const footToAstronomicalUnit = (foot: number | Big) => { return convertFrom(foot, 4.84814e-12); };

export default {
    inch: (value: number | Big) => toUS(convertFrom(value, UK_RATIOS.inch)), //same as UK
    foot: (value: number | Big) => toUS(convertFrom(value, UK_RATIOS.foot)), //same as UK
    yard: (value: number | Big) => toUS(convertFrom(value, UK_RATIOS.yard)), //same as UK
    mile: (value: number | Big) => toUS(convertFrom(value, UK_RATIOS.mile)), //same as UK
    cableLength: (value: number | Big) => toUS(convertFrom(value, US_RATIOS.cableLength)),
    rod: (value: number | Big) => toUS(convertFrom(value, US_RATIOS.rod)),
    chain: (value: number | Big) => toUS(convertFrom(value, UK_RATIOS.chain)), //same as UK
    furlong: (value: number | Big) => toUS(convertFrom(value, US_RATIOS.furlong)),

    in: function(value: number | Big) { return this.inch(value); },
    ft: function(value: number | Big) { return this.foot(value); },
    yd: function(value: number | Big) { return this.yard(value); },
    mi: function(value: number | Big) { return this.mile(value); },
    cb: function(value: number | Big) { return this.cableLength(value); },
    rd: function(value: number | Big) { return this.rod(value); },
    ch: function(value: number | Big) { return this.chain(value); },
    fur: function(value: number | Big) { return this.furlong(value); }
}