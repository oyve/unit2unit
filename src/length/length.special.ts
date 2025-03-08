import Big from 'big.js';

import { toMetric } from './length.metric';
import { toUK } from './length.UK';
import { toUS } from './length.US';
import { toNautical } from './length.nautical';
import { toAstronomical } from "./length.astronomical";
import { roundBig } from '../common';

const SPECIAL_RATIOS: { [key: string]: number } = { //to the meter
    hectometer: 10 ** 2,
    scandinavianMile: 10 ** 4,
    attometre: 10 ** -18,
    ångström: 10 ** -10,
    barleycorn: 0.00847,
    bohr: 5.29177 * 10 ** -11,
    cubit: 0.4572,
};

export const toSpecial = (value: Big) => {
    return {
        toHectometer: (decimalPlaces?: number) => roundBig(value.div(SPECIAL_RATIOS.hectometer), decimalPlaces),
        toScandinavianMile: (decimalPlaces?: number) => roundBig(value.div(SPECIAL_RATIOS.scandinavianMile), decimalPlaces),
        toAttometre: (decimalPlaces?: number) => roundBig(value.div(SPECIAL_RATIOS.attometre), decimalPlaces),
        toÅngström: (decimalPlaces?: number) => roundBig(value.div(SPECIAL_RATIOS.ångström), decimalPlaces),
        toBarleycorn: (decimalPlaces?: number) => roundBig(value.div(SPECIAL_RATIOS.barleycorn), decimalPlaces),
        toBohr: (decimalPlaces?: number) => roundBig(value.div(SPECIAL_RATIOS.bohr), decimalPlaces),
        toCubit: (decimalPlaces?: number) => roundBig(value.div(SPECIAL_RATIOS.cubit), decimalPlaces),

        hm: function(decimalPlaces?: number) { return this.toHectometer(decimalPlaces); },
        mil: function(decimalPlaces?: number) { return this.toScandinavianMile(decimalPlaces); },
        am: function(decimalPlaces?: number) { return this.toAttometre(decimalPlaces); },
        Å: function(decimalPlaces?: number) { return this.toÅngström(decimalPlaces); },
        bc: function(decimalPlaces?: number) { return this.toBarleycorn(decimalPlaces); },
        b: function(decimalPlaces?: number) { return this.toBohr(decimalPlaces); },
        c: function(decimalPlaces?: number) { return this.toCubit(decimalPlaces); },

        toMetric: () => toMetric(value),
        toUK: () => toUK(value),
        toUS: () => toUS(value),
        toNautical: () => toNautical(value),
        toAstronomical: () => toAstronomical(value),
    };
};

export default {
    hectometer: (value: number) => toSpecial(new Big(value).times(SPECIAL_RATIOS.hectometer)),
    scandinavianMile: (value: number) => toSpecial(new Big(value).times(SPECIAL_RATIOS.scandinavianMile)),
    attometre: (value: number) => toSpecial(new Big(value).times(SPECIAL_RATIOS.attometre)),
    ångström: (value: number) => toSpecial(new Big(value).times(SPECIAL_RATIOS.ångström)),
    barleycorn: (value: number) => toSpecial(new Big(value).times(SPECIAL_RATIOS.barleycorn)),
    bohr: (value: number) => toSpecial(new Big(value).times(SPECIAL_RATIOS.bohr)),
    cubit: (value: number) => toSpecial(new Big(value).times(SPECIAL_RATIOS.cubit)),

    hm: function(value: number) { return this.hectometer(value); },
    mil: function(value: number) { return this.scandinavianMile(value); },
    am: function(value: number) { return this.attometre(value); },
    Å: function(value: number) { return this.ångström(value); },
    bc: function(value: number) { return this.barleycorn(value); },
    b: function(value: number) { return this.bohr(value); },
    c: function(value: number) { return this.cubit(value); },
};