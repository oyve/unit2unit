import Big from 'big.js';
import { toMetric } from './length.metric';
import { toUK } from './length.UK';
import { toUS } from './length.US';
import { toNautical } from './length.nautical';
import { toAstronomical } from "./length.astronomical";
import UnitConverter from '../unitConverter';

const SPECIAL_RATIOS = { //to the meter
    scandinavianMile: 10 ** 4,
    barleycorn: 0.00847,
    cubit: 0.4572,
};

const converter = new UnitConverter(SPECIAL_RATIOS);

export const toSpecial = (value: number | Big, ratio?: number) => {
    if(ratio !== undefined && ratio > 0) value = converter.fromRatio(value, ratio);

    return {
        ...converter.createToMethods(value),
        toMetric: () => toMetric(value),
        toUK: () => toUK(value),
        toUS: () => toUS(value),
        toNautical: () => toNautical(value),
        toAstronomical: () => toAstronomical(value),
    }
};

export default {
    from: (value: number | Big, unit: string) => converter.from(value, unit),
    ...converter.createFromMethods(toSpecial)
};