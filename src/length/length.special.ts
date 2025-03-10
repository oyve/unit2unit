import Big from 'big.js';

import { toMetric } from './length.metric';
import { toUK } from './length.UK';
import { toUS } from './length.US';
import { toNautical } from './length.nautical';
import { toAstronomical } from "./length.astronomical";
import { round, convertTo, convertFrom } from '../common';

const SPECIAL_RATIOS: { [key: string]: number } = { //to the meter
    scandinavianMile: 10 ** 4,
    barleycorn: 0.00847,
    cubit: 0.4572,
};

export const toSpecial = (value: number | Big) => {
    return {
        toScandinavianMile: (decimalPlaces?: number) => round(convertTo(value, SPECIAL_RATIOS.scandinavianMile), decimalPlaces),
        toBarleycorn: (decimalPlaces?: number) => round(convertTo(value, SPECIAL_RATIOS.barleycorn), decimalPlaces),
        toCubit: (decimalPlaces?: number) => round(convertTo(value, SPECIAL_RATIOS.cubit), decimalPlaces),

        mil: function(decimalPlaces?: number) { return this.toScandinavianMile(decimalPlaces); },
        bc: function(decimalPlaces?: number) { return this.toBarleycorn(decimalPlaces); },
        c: function(decimalPlaces?: number) { return this.toCubit(decimalPlaces); },

        toMetric: () => toMetric(value),
        toUK: () => toUK(value),
        toUS: () => toUS(value),
        toNautical: () => toNautical(value),
        toAstronomical: () => toAstronomical(value),
    };
};

export default {
    scandinavianMile: (value: number | Big) => toSpecial(convertFrom(value, SPECIAL_RATIOS.scandinavianMile)),
    barleycorn: (value: number | Big) => toSpecial(convertFrom(value, SPECIAL_RATIOS.barleycorn)),
    cubit: (value: number | Big) => toSpecial(convertFrom(value, SPECIAL_RATIOS.cubit)),

    mil: function(value: number | Big) { return this.scandinavianMile(value); },
    bc: function(value: number | Big) { return this.barleycorn(value); },
    c: function(value: number | Big) { return this.cubit(value); },
};