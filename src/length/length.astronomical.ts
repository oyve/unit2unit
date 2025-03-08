import Big from 'big.js';

import { toUK } from './length.UK';
import { toUS } from './length.US';
import { toNautical } from './length.nautical';
import { toSpecial } from './length.special';
import { toMetric } from './length.metric';

// Set the decimal places to a higher value
Big.DP = 40;

const ASTRONOMICAL_RATIOS: { [key: string]: number } = { //to the meter
	astronomicUnit: 149597870700,
	lightyear: 9.4607e+15,
	megaparsec: 3.08567758e22,
	parsec: 3.085677581e16,
	lightsecond: 299792458,
	lightminute: 17987547480,
	lighthour: 1079252848800,
	lightday: 2.59020683712e13,
	lightweek: 1.813144785784e14
};

const round = (value: Big, decimalPlaces: number = 40) => {
    return parseFloat(value.toFixed(decimalPlaces));
}

export const toAstronomical = (value: Big) => {
	return {
        toAstronomicUnit: (decimalPlaces?: number): number => round(value.div(ASTRONOMICAL_RATIOS.astronomicUnit), decimalPlaces),
        toLightYear: (decimalPlaces?: number): number => round(value.div(ASTRONOMICAL_RATIOS.lightyear), decimalPlaces),
        toMegaparsec: (decimalPlaces?: number): number => round(value.div(ASTRONOMICAL_RATIOS.megaparsec), decimalPlaces),
        toParsec: (decimalPlaces?: number): number => round(value.div(ASTRONOMICAL_RATIOS.parsec), decimalPlaces),
        toLightSecond: (decimalPlaces?: number): number => round(value.div(ASTRONOMICAL_RATIOS.lightsecond), decimalPlaces),
        toLightMinute: (decimalPlaces?: number): number => round(value.div(ASTRONOMICAL_RATIOS.lightminute), decimalPlaces),
        toLightHour: (decimalPlaces?: number): number => round(value.div(ASTRONOMICAL_RATIOS.lighthour), decimalPlaces),
        toLightDay: (decimalPlaces?: number): number => round(value.div(ASTRONOMICAL_RATIOS.lightday), decimalPlaces),
        toLightWeek: (decimalPlaces?: number): number => round(value.div(ASTRONOMICAL_RATIOS.lightweek), decimalPlaces),

        au: function(decimalPlaces?: number): number { return this.toAstronomicUnit(decimalPlaces); },
        ly: function(decimalPlaces?: number): number { return this.toLightYear(decimalPlaces); },
        mpc: function(decimalPlaces?: number): number { return this.toMegaparsec(decimalPlaces); },
        pc: function(decimalPlaces?: number): number { return this.toParsec(decimalPlaces); },
        ls: function(decimalPlaces?: number): number { return this.toLightSecond(decimalPlaces); },
        lm: function(decimalPlaces?: number): number { return this.toLightMinute(decimalPlaces); },
        lh: function(decimalPlaces?: number): number { return this.toLightHour(decimalPlaces); },
        ld: function(decimalPlaces?: number): number { return this.toLightDay(decimalPlaces); },
        lw: function(decimalPlaces?: number): number { return this.toLightWeek(decimalPlaces); },

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

    au: function(value: number) { return this.astronomicUnit(value); },
    ly: function(value: number) { return this.lightyear(value); },
    mpc: function(value: number) { return this.megaparsec(value); },
    pc: function(value: number) { return this.parsec(value); },
    ls: function(value: number) { return this.lightsecond(value); },
    lm: function(value: number) { return this.lightminute(value); },
    lh: function(value: number) { return this.lighthour(value); },
    ld: function(value: number) { return this.lightday(value); },
    lw: function(value: number) { return this.lightweek(value); }
}