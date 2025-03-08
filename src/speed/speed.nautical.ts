'use strict'

import { round } from '../common';

const SPEED_RATIOS: { [key: string]: number } = { // to the knot
    knot: 1,
    knotAdmiralty: 1.00064,
};

const to = (value: number) => {
    let tos = {
        toKnot: (decimalPlaces?: number) => round(value / SPEED_RATIOS.knot, decimalPlaces),
        toKnotAdmiralty: (decimalPlaces?: number) => round(value / SPEED_RATIOS.knotAdmiralty, decimalPlaces),

        kn: function (decimalPlaces?: number) { return this.toKnot(decimalPlaces); },
        kn_adm: function (decimalPlaces?: number) { return this.toKnotAdmiralty(decimalPlaces); },
    }
    return tos;
}

export default {
    knot: (value: number) => to(value * SPEED_RATIOS.knot),
    knotAdmiralty: (value: number) => to(value * SPEED_RATIOS.knotAdmiralty),

    kn: function (value: number) { return this.knot(value); },
    kn_adm: function (value: number) { return this.knotAdmiralty(value); },
}
