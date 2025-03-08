import Big from 'big.js';

import { toMetric } from './length.metric'
import UK, { toUK, UK_RATIOS } from './length.UK';
import { toNautical } from './length.nautical';
import { toSpecial } from './length.special';
import { toAstronomical } from "./length.astronomical";

const US_RATIOS: { [key: string]: number } = { //to the meter
	cableLength: 219.456,
	rod: 5.0292,
	furlong: 201.168
};

export const toUS = (value: number) => {
    return {
        toInch: (): number => toUK(value).toInch(), //same as UK
        toFoot: (): number => toUK(value).toFoot(), //same as UK
        toYard: (): number => toUK(value).toYard(), //same as UK
        toMile: (): number => toUK(value).toMile(), //same as UK
        toCableLength: (): number => (value / US_RATIOS.cableLength),
        toRod: (): number => (value / US_RATIOS.rod),
        toChain: (): number => toUK(value).toChain(), //same as UK
        toFurlong: (): number => (value / US_RATIOS.furlong),

        in: function(): number { return this.toInch(); },
        ft: function(): number { return this.toFoot(); },
        yd: function(): number { return this.toYard(); },
        mi: function(): number { return this.toMile(); },
        cb: function(): number { return this.toCableLength(); },
        rd: function(): number { return this.toRod(); },
        ch: function(): number { return this.toChain(); },
        fur: function(): number { return this.toFurlong(); },

        toMetric: () => toMetric(new Big(value)),
        toUK: () => toUK(value),
        toNautical: () => toNautical(value),
        toSpecial: () => toSpecial(value),
        toAstronomical: () => toAstronomical(new Big(value)),
    }
}

export default {
    inch: (value: number) => toUS(value * UK_RATIOS.inch), //same as UK
    foot: (value: number) => toUS(value * UK_RATIOS.foot), //same as UK
    yard: (value: number) => toUS(value * UK_RATIOS.yard), //same as UK
    mile: (value: number) => toUS(value * UK_RATIOS.mile), //same as UK
    cableLength: (value: number) => toUS(value / US_RATIOS.cableLength),
    rod: (value: number) => toUS(value * US_RATIOS.rod),
    chain: (value: number) => toUS(value * UK_RATIOS.chain), //same as UK
    furlong: (value: number) => toUS(value * US_RATIOS.furlong),

    in: function(value: number) { return this.inch(value); },
    ft: function(value: number) { return this.foot(value); },
    yd: function(value: number) { return this.yard(value); },
    mi: function(value: number) { return this.mile(value); },
    cb: function(value: number) { return this.cableLength(value); },
    rd: function(value: number) { return this.rod(value); },
    ch: function(value: number) { return this.chain(value); },
    fur: function(value: number) { return this.furlong(value); }
}