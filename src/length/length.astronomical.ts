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
        toAstronomicUnit: (): number => round(value.div(ASTRONOMICAL_RATIOS.astronomicUnit)),
        toLightYear: (): number => round(value.div(ASTRONOMICAL_RATIOS.lightyear)),
        toMegaparsec: (): number => round(value.div(ASTRONOMICAL_RATIOS.megaparsec)),
        toParsec: (): number => round(value.div(ASTRONOMICAL_RATIOS.parsec)),
        toLightSecond: (): number => round(value.div(ASTRONOMICAL_RATIOS.lightsecond)),
        toLightMinute: (): number => round(value.div(ASTRONOMICAL_RATIOS.lightminute)),
        toLightHour: (): number => round(value.div(ASTRONOMICAL_RATIOS.lighthour)),
        toLightDay: (): number => round(value.div(ASTRONOMICAL_RATIOS.lightday)),
        toLightWeek: (): number => round(value.div(ASTRONOMICAL_RATIOS.lightweek)),

        au: function(): number { return this.toAstronomicUnit(); },
        ly: function(): number { return this.toLightYear(); },
        mpc: function(): number { return this.toMegaparsec(); },
        pc: function(): number { return this.toParsec(); },
        ls: function(): number { return this.toLightSecond(); },
        lm: function(): number { return this.toLightMinute(); },
        lh: function(): number { return this.toLightHour(); },
        ld: function(): number { return this.toLightDay(); },
        lw: function(): number { return this.toLightWeek(); },

        toMetric: () => toMetric(new Big(value)),
        toUK: () => toUK(value.toNumber()),
        toUS: () => toUS(value.toNumber()),
        toNautical: () => toNautical(value.toNumber()),
        toSpecial: () => toSpecial(value.toNumber()),
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