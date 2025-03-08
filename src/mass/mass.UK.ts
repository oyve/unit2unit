import Big from 'big.js';
import { toMetric } from './mass.metric';
import { toUS } from './mass.US';
import { roundBig } from '../common';

const UK_RATIOS: { [key: string]: number } = { //to the grain
    grain: 1,
    scruple: 20,
    dram: 27.34375,
    ounce: 437.5,
    pound: 7000,
    stone: 98000,
    quarter: 196000,
    hundredweight: 784000,
    ton: 15680000,
};

export const toUK = (value: Big) => {
    return {
        toStone: (decimalPlaces?: number): number => roundBig(value.div(UK_RATIOS.stone), decimalPlaces),
        toHundredweight: (decimalPlaces?: number): number => roundBig(value.div(UK_RATIOS.hundredweight), decimalPlaces),
        toQuarter: (decimalPlaces?: number): number => roundBig(value.div(UK_RATIOS.quarter), decimalPlaces),
        toTon: (decimalPlaces?: number): number => roundBig(value.div(UK_RATIOS.ton), decimalPlaces),
        toPound: (decimalPlaces?: number): number => roundBig(value.div(UK_RATIOS.pound), decimalPlaces),
        toOunce: (decimalPlaces?: number): number => roundBig(value.div(UK_RATIOS.ounce), decimalPlaces),
        toGrain: (decimalPlaces?: number): number => roundBig(value.div(UK_RATIOS.grain), decimalPlaces),
        toDram: (decimalPlaces?: number): number => roundBig(value.div(UK_RATIOS.dram), decimalPlaces),
        toScruple: (decimalPlaces?: number): number => roundBig(value.div(UK_RATIOS.scruple), decimalPlaces),

        st: function(decimalPlaces?: number) { return this.toStone(decimalPlaces); },
        cwt: function(decimalPlaces?: number) { return this.toHundredweight(decimalPlaces); },
        qr: function(decimalPlaces?: number) { return this.toQuarter(decimalPlaces); },
        t: function(decimalPlaces?: number) { return this.toTon(decimalPlaces); },
        lb: function(decimalPlaces?: number) { return this.toPound(decimalPlaces); },
        oz: function(decimalPlaces?: number) { return this.toOunce(decimalPlaces); },
        gr: function(decimalPlaces?: number) { return this.toGrain(decimalPlaces); },
        dr: function(decimalPlaces?: number) { return this.toDram(decimalPlaces); },
        sc: function(decimalPlaces?: number) { return this.toScruple(decimalPlaces); },

        toMetric: () => toMetric(grainToGram(value)),
        toUS: () => toUS(value),
    };
};

const grainToGram = (grain: Big) => {
    return grain.times(0.06479891);
};

export default {
    stone: (value: number) => toUK(new Big(value).times(UK_RATIOS.stone)),
    hundredweight: (value: number) => toUK(new Big(value).times(UK_RATIOS.hundredweight)),
    quarter: (value: number) => toUK(new Big(value).times(UK_RATIOS.quarter)),
    ton: (value: number) => toUK(new Big(value).times(UK_RATIOS.ton)),
    pound: (value: number) => toUK(new Big(value).times(UK_RATIOS.pound)),
    ounce: (value: number) => toUK(new Big(value).times(UK_RATIOS.ounce)),
    grain: (value: number) => toUK(new Big(value).times(UK_RATIOS.grain)),
    dram: (value: number) => toUK(new Big(value).times(UK_RATIOS.dram)),
    scruple: (value: number) => toUK(new Big(value).times(UK_RATIOS.scruple)),

    st: function(value: number) { return this.stone(value); },
    cwt: function(value: number) { return this.hundredweight(value); },
    qr: function(value: number) { return this.quarter(value); },
    t: function(value: number) { return this.ton(value); },
    lb: function(value: number) { return this.pound(value); },
    oz: function(value: number) { return this.ounce(value); },
    gr: function(value: number) { return this.grain(value); },
    dr: function(value: number) { return this.dram(value); },
    sc: function(value: number) { return this.scruple(value); },
};
