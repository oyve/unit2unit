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

        in: function(): number { return this.toInch(); },
        ft: function(): number { return this.toFoot(); },
        yd: function(): number { return this.toYard(); },
        mi: function(): number { return this.toMile(); },
        cb: function(): number { return this.toCableLength(); },
        rd: function(): number { return this.toRod(); },
        ch: function(): number { return this.toChain(); },
        fur: function(): number { return this.toFurlong(); },

        toMetric: () => toMetric(value),
        toUK: () => toUK(value),
        toNautical: () => toNautical(value),
        toSpecial: () => toSpecial(value),
        toAstronomical: () => toAstronomical(value),
    }
}

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