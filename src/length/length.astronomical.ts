import Big from 'big.js';

import { toUK } from './length.UK';
import { toUS } from './length.US';
import { toNautical } from './length.nautical';
import { toSpecial } from './length.special';
import { toMetric } from './length.metric';
import { convertFrom, convertTo, round } from '../common';
import UnitConverter from '../unitConverter';


const ASTRONOMICAL_RATIOS = { // to the au
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

const converter = new UnitConverter(ASTRONOMICAL_RATIOS);

export const toAstronomical = (value: number | Big, ratio?: number) => {
    if(ratio !== undefined && ratio > 0) value = converter.fromRatio(value, ratio);

    return {
        ...converter.generateConversions(value),
        toUK: () => toUK(value, 3.28084),
        toUS: () => toUS(value, 3.28084),
        toSpecial: () => toSpecial(value),
        toNautical: () => toNautical(value, 1 / 1852),
        toMetric: () => toMetric(value, 6.68459e-12)
    }
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
    bohr: (value: number | Big) => toAstronomical(convertFrom(value, ASTRONOMICAL_RATIOS.bohr)),
};