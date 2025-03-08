import Big from 'big.js';

import { toMetric } from './length.metric';
import { toUK } from './length.UK';
import { toUS } from './length.US';
import { toNautical } from './length.nautical';
import { toAstronomical } from "./length.astronomical";
import { roundBig } from '../common';

const SPECIAL_RATIOS: { [key: string]: number } = { //to the meter
    scandinavianMile: 10 ** 4,
    barleycorn: 0.00847,
    cubit: 0.4572,
};

export const toSpecial = (value: Big) => {
    return {
        toScandinavianMile: (decimalPlaces?: number) => roundBig(value.div(SPECIAL_RATIOS.scandinavianMile), decimalPlaces),
        toBarleycorn: (decimalPlaces?: number) => roundBig(value.div(SPECIAL_RATIOS.barleycorn), decimalPlaces),
        toCubit: (decimalPlaces?: number) => roundBig(value.div(SPECIAL_RATIOS.cubit), decimalPlaces),

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
    scandinavianMile: (value: number) => toSpecial(new Big(value).times(SPECIAL_RATIOS.scandinavianMile)),
    barleycorn: (value: number) => toSpecial(new Big(value).times(SPECIAL_RATIOS.barleycorn)),
    cubit: (value: number) => toSpecial(new Big(value).times(SPECIAL_RATIOS.cubit)),

    mil: function(value: number) { return this.scandinavianMile(value); },
    bc: function(value: number) { return this.barleycorn(value); },
    c: function(value: number) { return this.cubit(value); },
};