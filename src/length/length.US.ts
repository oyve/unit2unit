import Big from 'big.js';
import { toMetric } from './length.metric'
import { toUK } from './length.UK';
import { toNautical } from './length.nautical';
import { toSpecial } from './length.special';
import { toAstronomical } from "./length.astronomical";
import UnitConverter from '../unitConverter';

const US_RATIOS = { //to the foot = 1
    foot: 1,
    mile: 5280,
    fathom: 6,
    inch: 1 / 12,
    yard: 3,
    chain: 66,
	rod: 16.5, //5.0292,
	furlong: 660 //201.168
};

const converter = new UnitConverter(US_RATIOS);

export const toUS = (value: number | Big, ratio?: number) => {
    if(ratio !== undefined && ratio > 0) value = converter.fromRatio(value, ratio);

    return {
        ...converter.createToMethods(value),
        toMetric: () => toMetric(value, 0.06479891),
        toUK: () => toUK(value),
        toNautical: () => toNautical(value, 0.000164578834),
        toSpecial: () => toSpecial(value),
        toAstronomical: () => toAstronomical(value, 4.84814e-12)
    }
};

export default {
    from: (value: number | Big, unit: string) => converter.from(value, unit),
    ...converter.createFromMethods(toUS)
}