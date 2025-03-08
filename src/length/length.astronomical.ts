import Big from 'big.js';

import { toUK } from './length.UK';
import { toUS } from './length.US';
import { toNautical } from './length.nautical';
import { toSpecial } from './length.special';
import { toMetric } from './length.metric';
import { roundBig } from '../common';

// Set the decimal places to a higher value
Big.DP = 40;

const ASTRONOMICAL_RATIOS: { [key: string]: number } = { // to the au
    astronomicUnit: 1,
    lightyear: 63241.077,
    megaparsec: 206264806.247,
    parsec: 206264.806,
    lightsecond: 4.84814e-6,
    lightminute: 2.90888e-4,
    lighthour: 0.0174533,
    lightday: 0.418879,
    lightweek: 2.93224,
    bohr: 5.29177e-11
};

export const toAstronomical = (value: Big) => {
    return {
        toAstronomicUnit: (decimalPlaces?: number): number => roundBig(value.div(ASTRONOMICAL_RATIOS.astronomicUnit), decimalPlaces),
        toLightYear: (decimalPlaces?: number): number => roundBig(value.div(ASTRONOMICAL_RATIOS.lightyear), decimalPlaces),
        toMegaparsec: (decimalPlaces?: number): number => roundBig(value.div(ASTRONOMICAL_RATIOS.megaparsec), decimalPlaces),
        toParsec: (decimalPlaces?: number): number => roundBig(value.div(ASTRONOMICAL_RATIOS.parsec), decimalPlaces),
        toLightSecond: (decimalPlaces?: number): number => roundBig(value.div(ASTRONOMICAL_RATIOS.lightsecond), decimalPlaces),
        toLightMinute: (decimalPlaces?: number): number => roundBig(value.div(ASTRONOMICAL_RATIOS.lightminute), decimalPlaces),
        toLightHour: (decimalPlaces?: number): number => roundBig(value.div(ASTRONOMICAL_RATIOS.lighthour), decimalPlaces),
        toLightDay: (decimalPlaces?: number): number => roundBig(value.div(ASTRONOMICAL_RATIOS.lightday), decimalPlaces),
        toLightWeek: (decimalPlaces?: number): number => roundBig(value.div(ASTRONOMICAL_RATIOS.lightweek), decimalPlaces),
        toBohr: (decimalPlaces?: number): number => roundBig(value.div(ASTRONOMICAL_RATIOS.bohr), decimalPlaces), // Added Bohr conversion

        au: function(decimalPlaces?: number): number { return this.toAstronomicUnit(decimalPlaces); },
        ly: function(decimalPlaces?: number): number { return this.toLightYear(decimalPlaces); },
        mpc: function(decimalPlaces?: number): number { return this.toMegaparsec(decimalPlaces); },
        pc: function(decimalPlaces?: number): number { return this.toParsec(decimalPlaces); },
        ls: function(decimalPlaces?: number): number { return this.toLightSecond(decimalPlaces); },
        lm: function(decimalPlaces?: number): number { return this.toLightMinute(decimalPlaces); },
        lh: function(decimalPlaces?: number): number { return this.toLightHour(decimalPlaces); },
        ld: function(decimalPlaces?: number): number { return this.toLightDay(decimalPlaces); },
        lw: function(decimalPlaces?: number): number { return this.toLightWeek(decimalPlaces); },
        b: function(decimalPlaces?: number): number { return this.toBohr(decimalPlaces); }, // Added Bohr shorthand

        toMetric: () => toMetric(value),
        toUK: () => toUK(value),
        toUS: () => toUS(value),
        toNautical: () => toNautical(value),
        toSpecial: () => toSpecial(value)
    };
};

export default {
    astronomicUnit: (value: number) => toAstronomical(new Big(value * ASTRONOMICAL_RATIOS.astronomicUnit)),
    lightyear: (value: number) => toAstronomical(new Big(value * ASTRONOMICAL_RATIOS.lightyear)),
    megaparsec: (value: number) => toAstronomical(new Big(value * ASTRONOMICAL_RATIOS.megaparsec)),
    parsec: (value: number) => toAstronomical(new Big(value * ASTRONOMICAL_RATIOS.parsec)),
    lightsecond: (value: number) => toAstronomical(new Big(value * ASTRONOMICAL_RATIOS.lightsecond)),
    lightminute: (value: number) => toAstronomical(new Big(value * ASTRONOMICAL_RATIOS.lightminute)),
    lighthour: (value: number) => toAstronomical(new Big(value * ASTRONOMICAL_RATIOS.lighthour)),
    lightday: (value: number) => toAstronomical(new Big(value * ASTRONOMICAL_RATIOS.lightday)),
    lightweek: (value: number) => toAstronomical(new Big(value * ASTRONOMICAL_RATIOS.lightweek)),
    bohr: (value: number) => toAstronomical(new Big(value * ASTRONOMICAL_RATIOS.bohr)), // Added Bohr

    au: function(value: number) { return this.astronomicUnit(value); },
    ly: function(value: number) { return this.lightyear(value); },
    mpc: function(value: number) { return this.megaparsec(value); },
    pc: function(value: number) { return this.parsec(value); },
    ls: function(value: number) { return this.lightsecond(value); },
    lm: function(value: number) { return this.lightminute(value); },
    lh: function(value: number) { return this.lighthour(value); },
    ld: function(value: number) { return this.lightday(value); },
    lw: function(value: number) { return this.lightweek(value); },
    b: function(value: number) { return this.bohr(value); } // Added Bohr shorthand
};