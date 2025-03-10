import Big from 'big.js';
import { toMetric } from './mass.metric';
import { toUK } from './mass.UK';
import { convertFrom, convertTo, round } from '../common';

const US_RATIOS: { [key: string]: number } = { //to the grain
    pound: 7000,
    ounce: 437.5,
    stone: 98000,
    grain: 1,
    hundredweight: 700000,
    dram: 27.34375,
    quarter: 175000,
};

export const toUS = (value: number | Big) => {
    return {
        toPound: (decimalPlaces?: number): number | Big => round(convertTo(value, US_RATIOS.pound), decimalPlaces),
        toOunce: (decimalPlaces?: number): number | Big => round(convertTo(value, US_RATIOS.ounce), decimalPlaces),
        toStone: (decimalPlaces?: number): number | Big => round(convertTo(value, US_RATIOS.stone), decimalPlaces),
        toGrain: (decimalPlaces?: number): number | Big => round(convertTo(value, US_RATIOS.grain), decimalPlaces),
        toHundredweight: (decimalPlaces?: number): number | Big => round(convertTo(value, US_RATIOS.hundredweight), decimalPlaces),
        toDram: (decimalPlaces?: number): number | Big => round(convertTo(value, US_RATIOS.dram), decimalPlaces),
        toQuarter: (decimalPlaces?: number): number | Big => round(convertTo(value, US_RATIOS.quarter), decimalPlaces),

        lb: function(decimalPlaces?: number) { return this.toPound(decimalPlaces); },
        oz: function(decimalPlaces?: number) { return this.toOunce(decimalPlaces); },
        st: function(decimalPlaces?: number) { return this.toStone(decimalPlaces); },
        gr: function(decimalPlaces?: number) { return this.toGrain(decimalPlaces); },
        cwt: function(decimalPlaces?: number) { return this.toHundredweight(decimalPlaces); },
        dr: function(decimalPlaces?: number) { return this.toDram(decimalPlaces); },
        qtr: function(decimalPlaces?: number) { return this.toQuarter(decimalPlaces); },

        toMetric: () => toMetric(grainToGram(value)),
        toUK: () => toUK(value), //grain is equal
    };
};

const grainToGram = (grain: number | Big) => {
    return convertFrom(grain, 0.06479891);
};

export default {
    pound: (value: number | Big) => toUS(convertFrom(value, US_RATIOS.pound)),
    ounce: (value: number | Big) => toUS(convertFrom(value, US_RATIOS.ounce)),
    stone: (value: number | Big) => toUS(convertFrom(value, US_RATIOS.stone)),
    grain: (value: number | Big) => toUS(convertFrom(value, US_RATIOS.grain)),
    hundredweight: (value: number | Big) => toUS(convertFrom(value, US_RATIOS.hundredweight)),
    dram: (value: number | Big) => toUS(convertFrom(value, US_RATIOS.dram)),
    quarter: (value: number | Big) => toUS(convertFrom(value, US_RATIOS.quarter)),

    lb: function(value: number) { return this.pound(value); },
    oz: function(value: number) { return this.ounce(value); },
    st: function(value: number) { return this.stone(value); },
    gr: function(value: number) { return this.grain(value); },
    cwt: function(value: number) { return this.hundredweight(value); },
    dr: function(value: number) { return this.dram(value); },
    qtr: function(value: number) { return this.quarter(value); },
};
