import Big from 'big.js';

import { toMetric } from './length.metric';
import { toUK } from './length.UK';
import { toUS } from './length.US';
import { toNautical } from './length.nautical';
import { toAstronomical } from "./length.astronomical";

const SPECIAL_RATIOS: { [key: string]: number } = { //to the meter
    hectometer: 10 ** 2,
    scandinavianMile: 10 ** 4,
    attometre: 10 ** -18,
    ångström: 10 ** -10,
    barleycorn: 0.00847,
    bohr: 5.29177 * 10 ** -11,
    cubit: 0.4572,
};

export const toSpecial = (value: number) => {
    return {
        toHectometer: () => value / SPECIAL_RATIOS.hectometer,
        toScandinavianMile: () => value / SPECIAL_RATIOS.scandinavianMile,
        toAttometre: () => value / SPECIAL_RATIOS.attometre,
        toÅngström: () => value / SPECIAL_RATIOS.ångström,
        toBarleycorn: () => value / SPECIAL_RATIOS.barleycorn,
        toBohr: () => value / SPECIAL_RATIOS.bohr,
        toCubit: () => value / SPECIAL_RATIOS.cubit,

        hm: function() { return this.toHectometer(); },
        mil: function() { return this.toScandinavianMile(); },
        am: function() { return this.toAttometre(); },
        Å: function() { return this.toÅngström(); },
        bc: function() { return this.toBarleycorn(); },
        b: function() { return this.toBohr(); },
        c: function() { return this.toCubit(); },

        toMetric: () => toMetric(value),
        toUK: () => toUK(value),
        toUS: () => toUS(value),
        toNautical: () => toNautical(value),
        toAstronomical: () => toAstronomical(new Big(value)),
    };
};

export default {
    hectometer: (value: number) => toSpecial(value * SPECIAL_RATIOS.hectometer),
    scandinavianMile: (value: number) => toSpecial(value * SPECIAL_RATIOS.scandinavianMile),
    attometre: (value: number) => toSpecial(value * SPECIAL_RATIOS.attometre),
    ångström: (value: number) => toSpecial(value * SPECIAL_RATIOS.ångström),
    barleycorn: (value: number) => toSpecial(value * SPECIAL_RATIOS.barleycorn),
    bohr: (value: number) => toSpecial(value * SPECIAL_RATIOS.bohr),
    cubit: (value: number) => toSpecial(value * SPECIAL_RATIOS.cubit),

    hm: function(value: number) { return this.hectometer(value); },
    mil: function(value: number) { return this.scandinavianMile(value); },
    am: function(value: number) { return this.attometre(value); },
    Å: function(value: number) { return this.ångström(value); },
    bc: function(value: number) { return this.barleycorn(value); },
    b: function(value: number) { return this.bohr(value); },
    c: function(value: number) { return this.cubit(value); },
};