import Big from 'big.js';
import { toMetric } from './mass.metric';
import { toUK } from './mass.UK';
import { roundBig } from '../common';

const US_RATIOS: { [key: string]: number } = {
    pound: 453.592,
    ounce: 28.3495,
    stone: 6350.29,
    grain: 0.0647989,
    hundredweight: 45359.2,
    dram: 1.77185,
    quarter: 11339.8,
};

export const toUS = (value: Big) => {
    return {
        toPound: (decimalPlaces?: number): number => roundBig(value.div(US_RATIOS.pound), decimalPlaces),
        toOunce: (decimalPlaces?: number): number => roundBig(value.div(US_RATIOS.ounce), decimalPlaces),
        toStone: (decimalPlaces?: number): number => roundBig(value.div(US_RATIOS.stone), decimalPlaces),
        toGrain: (decimalPlaces?: number): number => roundBig(value.div(US_RATIOS.grain), decimalPlaces),
        toHundredweight: (decimalPlaces?: number): number => roundBig(value.div(US_RATIOS.hundredweight), decimalPlaces),
        toDram: (decimalPlaces?: number): number => roundBig(value.div(US_RATIOS.dram), decimalPlaces),
        toQuarter: (decimalPlaces?: number): number => roundBig(value.div(US_RATIOS.quarter), decimalPlaces),

        lb: function(decimalPlaces?: number) { return this.toPound(decimalPlaces); },
        oz: function(decimalPlaces?: number) { return this.toOunce(decimalPlaces); },
        st: function(decimalPlaces?: number) { return this.toStone(decimalPlaces); },
        gr: function(decimalPlaces?: number) { return this.toGrain(decimalPlaces); },
        cwt: function(decimalPlaces?: number) { return this.toHundredweight(decimalPlaces); },
        dr: function(decimalPlaces?: number) { return this.toDram(decimalPlaces); },
        qtr: function(decimalPlaces?: number) { return this.toQuarter(decimalPlaces); },

        toMetric: () => toMetric(value),
        toUK: () => toUK(value),
    };
};

export default {
    pound: (value: number) => toUS(new Big(value).times(US_RATIOS.pound)),
    ounce: (value: number) => toUS(new Big(value).times(US_RATIOS.ounce)),
    stone: (value: number) => toUS(new Big(value).times(US_RATIOS.stone)),
    grain: (value: number) => toUS(new Big(value).times(US_RATIOS.grain)),
    hundredweight: (value: number) => toUS(new Big(value).times(US_RATIOS.hundredweight)),
    dram: (value: number) => toUS(new Big(value).times(US_RATIOS.dram)),
    quarter: (value: number) => toUS(new Big(value).times(US_RATIOS.quarter)),

    lb: function(value: number) { return this.pound(value); },
    oz: function(value: number) { return this.ounce(value); },
    st: function(value: number) { return this.stone(value); },
    gr: function(value: number) { return this.grain(value); },
    cwt: function(value: number) { return this.hundredweight(value); },
    dr: function(value: number) { return this.dram(value); },
    qtr: function(value: number) { return this.quarter(value); },
};
