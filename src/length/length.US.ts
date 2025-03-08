import Big from 'big.js';

import { toMetric } from './length.metric'
import UK, { toUK, UK_RATIOS } from './length.UK';
import { toNautical } from './length.nautical';
import { toSpecial } from './length.special';
import { toAstronomical } from "./length.astronomical";
import { roundBig } from '../common';

const US_RATIOS: { [key: string]: number } = { //to the meter
	cableLength: 219.456,
	rod: 5.0292,
	furlong: 201.168
};

export const toUS = (value: Big) => {
    return {
        toInch: (decimalPlaces?: number): number => toUK(value).toInch(decimalPlaces), //same as UK
        toFoot: (decimalPlaces?: number): number => toUK(value).toFoot(decimalPlaces), //same as UK
        toYard: (decimalPlaces?: number): number => toUK(value).toYard(decimalPlaces), //same as UK
        toMile: (decimalPlaces?: number): number => toUK(value).toMile(decimalPlaces), //same as UK
        toCableLength: (decimalPlaces?: number): number => roundBig(value.div(US_RATIOS.cableLength), decimalPlaces),
        toRod: (decimalPlaces?: number): number => roundBig(value.div(US_RATIOS.rod), decimalPlaces),
        toChain: (decimalPlaces?: number): number => toUK(value).toChain(decimalPlaces), //same as UK
        toFurlong: (decimalPlaces?: number): number => roundBig(value.div(US_RATIOS.furlong), decimalPlaces),

        in: function(decimalPlaces?: number): number { return this.toInch(decimalPlaces); },
        ft: function(decimalPlaces?: number): number { return this.toFoot(decimalPlaces); },
        yd: function(decimalPlaces?: number): number { return this.toYard(decimalPlaces); },
        mi: function(decimalPlaces?: number): number { return this.toMile(decimalPlaces); },
        cb: function(decimalPlaces?: number): number { return this.toCableLength(decimalPlaces); },
        rd: function(decimalPlaces?: number): number { return this.toRod(decimalPlaces); },
        ch: function(decimalPlaces?: number): number { return this.toChain(decimalPlaces); },
        fur: function(decimalPlaces?: number): number { return this.toFurlong(decimalPlaces); },

        toMetric: () => toMetric(footToMeter(value)),
        toUK: () => toUK(value),
        toNautical: () => toNautical(footToNauticalMile(value)),
        toSpecial: () => toSpecial(value),
        toAstronomical: () => toAstronomical(footToAstronomicalUnit(value)),
    }
}

const footToMeter = (foot: Big) => { return foot.times(0.06479891); };
const footToNauticalMile = (foot: Big) => { return foot.times(0.000164578834); };
const footToAstronomicalUnit = (foot: Big) => { return foot.times(4.84814e-12); };

export default {
    inch: (value: number) => toUS(new Big(value).times(UK_RATIOS.inch)), //same as UK
    foot: (value: number) => toUS(new Big(value).times(UK_RATIOS.foot)), //same as UK
    yard: (value: number) => toUS(new Big(value).times(UK_RATIOS.yard)), //same as UK
    mile: (value: number) => toUS(new Big(value).times(UK_RATIOS.mile)), //same as UK
    cableLength: (value: number) => toUS(new Big(value).div(US_RATIOS.cableLength)),
    rod: (value: number) => toUS(new Big(value).times(US_RATIOS.rod)),
    chain: (value: number) => toUS(new Big(value).times(UK_RATIOS.chain)), //same as UK
    furlong: (value: number) => toUS(new Big(value).times(US_RATIOS.furlong)),

    in: function(value: number) { return this.inch(value); },
    ft: function(value: number) { return this.foot(value); },
    yd: function(value: number) { return this.yard(value); },
    mi: function(value: number) { return this.mile(value); },
    cb: function(value: number) { return this.cableLength(value); },
    rd: function(value: number) { return this.rod(value); },
    ch: function(value: number) { return this.chain(value); },
    fur: function(value: number) { return this.furlong(value); }
}