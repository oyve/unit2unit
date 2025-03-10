import Big from 'big.js';

import { toUK } from './length.UK';
import { toUS } from './length.US';
import { toNautical } from './length.nautical';
import { toSpecial } from './length.special';
import { toMetric } from './length.metric';
import { convertFrom, convertTo, round } from '../common';

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

export const toAstronomical = (value: number | Big) => {
    return {
        toAstronomicUnit: (decimalPlaces?: number): number | Big => round(convertTo(value, ASTRONOMICAL_RATIOS.astronomicUnit), decimalPlaces),
        toLightYear: (decimalPlaces?: number): number | Big => round(convertTo(value, ASTRONOMICAL_RATIOS.lightyear), decimalPlaces),
        toMegaparsec: (decimalPlaces?: number): number | Big => round(convertTo(value, ASTRONOMICAL_RATIOS.megaparsec), decimalPlaces),
        toParsec: (decimalPlaces?: number): number | Big => round(convertTo(value, ASTRONOMICAL_RATIOS.parsec), decimalPlaces),
        toLightSecond: (decimalPlaces?: number): number | Big => round(convertTo(value, ASTRONOMICAL_RATIOS.lightsecond), decimalPlaces),
        toLightMinute: (decimalPlaces?: number): number | Big => round(convertTo(value, ASTRONOMICAL_RATIOS.lightminute), decimalPlaces),
        toLightHour: (decimalPlaces?: number): number | Big => round(convertTo(value, ASTRONOMICAL_RATIOS.lighthour), decimalPlaces),
        toLightDay: (decimalPlaces?: number): number | Big => round(convertTo(value, ASTRONOMICAL_RATIOS.lightday), decimalPlaces),
        toLightWeek: (decimalPlaces?: number): number | Big => round(convertTo(value, ASTRONOMICAL_RATIOS.lightweek), decimalPlaces),
        toBohr: (decimalPlaces?: number): number | Big => round(convertTo(value, ASTRONOMICAL_RATIOS.bohr), decimalPlaces), // Added Bohr conversion

        au: function(decimalPlaces?: number): number | Big { return this.toAstronomicUnit(decimalPlaces); },
        ly: function(decimalPlaces?: number): number | Big { return this.toLightYear(decimalPlaces); },
        mpc: function(decimalPlaces?: number): number | Big { return this.toMegaparsec(decimalPlaces); },
        pc: function(decimalPlaces?: number): number | Big { return this.toParsec(decimalPlaces); },
        ls: function(decimalPlaces?: number): number | Big { return this.toLightSecond(decimalPlaces); },
        lm: function(decimalPlaces?: number): number | Big { return this.toLightMinute(decimalPlaces); },
        lh: function(decimalPlaces?: number): number | Big { return this.toLightHour(decimalPlaces); },
        ld: function(decimalPlaces?: number): number | Big { return this.toLightDay(decimalPlaces); },
        lw: function(decimalPlaces?: number): number | Big { return this.toLightWeek(decimalPlaces); },
        b: function(decimalPlaces?: number): number | Big { return this.toBohr(decimalPlaces); },

        toMetric: () => toMetric(value),
        toUK: () => toUK(value),
        toUS: () => toUS(value),
        toNautical: () => toNautical(value),
        toSpecial: () => toSpecial(value)
    };
};

export default {
    astronomicUnit: (value: number | Big) => toAstronomical(convertFrom(value, ASTRONOMICAL_RATIOS.astronomicUnit)),
    lightyear: (value: number | Big) => toAstronomical(convertFrom(value, ASTRONOMICAL_RATIOS.lightyear)),
    megaparsec: (value: number | Big) => toAstronomical(convertFrom(value, ASTRONOMICAL_RATIOS.megaparsec)),
    parsec: (value: number | Big) => toAstronomical(convertFrom(value, ASTRONOMICAL_RATIOS.parsec)),
    lightsecond: (value: number | Big) => toAstronomical(convertFrom(value, ASTRONOMICAL_RATIOS.lightsecond)),
    lightminute: (value: number | Big) => toAstronomical(convertFrom(value, ASTRONOMICAL_RATIOS.lightminute)),
    lighthour: (value: number | Big) => toAstronomical(convertFrom(value, ASTRONOMICAL_RATIOS.lighthour)),
    lightday: (value: number | Big) => toAstronomical(convertFrom(value, ASTRONOMICAL_RATIOS.lightday)),
    lightweek: (value: number | Big) => toAstronomical(convertFrom(value, ASTRONOMICAL_RATIOS.lightweek)),
    bohr: (value: number | Big) => toAstronomical(convertFrom(value, ASTRONOMICAL_RATIOS.bohr)), // Added Bohr

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