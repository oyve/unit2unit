import Big from 'big.js';

import { toMetric } from './length.metric'
import { toUK } from './length.UK';
import { toNautical } from './length.nautical';
import { toSpecial } from './length.special';
import { toAstronomical } from "./length.astronomical";

const US_RATIOS: { [key: string]: number } = { //to the meter
	inch: 0.00254,
	foot: 0.3048,
	yard: 0.9144,
	mile: 1609.344,
	cableLength: 219.456,
	rod: 5.0292,
	chain: 20.1168,
	furlong: 201.168
};

export const toUS = (value: number) => {
    return {
        toInch: (): number => (value / US_RATIOS.inch),
        toFoot: (): number => (value / US_RATIOS.foot),
        toYard: (): number => (value / US_RATIOS.yard),
        toMile: (): number => (value / US_RATIOS.mile),
        toCableLength: (): number => (value / US_RATIOS.cableLength),
        toRod: (): number => (value / US_RATIOS.rod),
        toChain: (): number => (value / US_RATIOS.chain),
        toFurlong: (): number => (value / US_RATIOS.furlong),

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
        toAstronomical: () => toAstronomical(new Big(value)),
    }
}

export default {
    inch: (value: number) => toUS(value * US_RATIOS.inch),
    foot: (value: number) => toUS(value * US_RATIOS.foot),
    yard: (value: number) => toUS(value * US_RATIOS.yard),
    mile: (value: number) => toUS(value * US_RATIOS.mile),
    cableLength: (value: number) => toUS(value / US_RATIOS.cableLength),
    rod: (value: number) => toUS(value * US_RATIOS.rod),
    chain: (value: number) => toUS(value * US_RATIOS.chain),
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