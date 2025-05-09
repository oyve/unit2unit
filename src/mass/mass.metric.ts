import Big from 'big.js';
import { toUK } from './mass.UK';
import { toUS } from './mass.US';
import { round, convertFrom, convertTo } from '../common';
import UnitConverter from '../unitConverter';

const METRIC_RATIOS: { [key: string]: number } = { //to the gram
    gram: 1,
    hektogram: 100,
    milligram: 0.001,
    kilogram: 1000,
    carat: 0.2,
    microgram: 0.000001,
    nanogram: 0.000000001,
    picogram: 0.000000000001,
    decagram: 10,
    centigram: 0.01,
    megagram: 1000000,
    decigram: 0.1
};

const converter = new UnitConverter(METRIC_RATIOS);

export const toMetric = (value: number | Big) => {
    return {
        toGram: (decimalPlaces?: number): number | Big => value,
        toKilogram: (decimalPlaces?: number): number | Big => round(convertTo(value, METRIC_RATIOS.kilogram), decimalPlaces),
        toHektogram: (decimalPlaces?: number): number | Big => round(convertTo(value, METRIC_RATIOS.hektogram), decimalPlaces),
        toMilligram: (decimalPlaces?: number): number | Big => round(convertTo(value, METRIC_RATIOS.milligram), decimalPlaces),
        toCarat: (decimalPlaces?: number): number | Big => round(convertTo(value, METRIC_RATIOS.carat), decimalPlaces),
        toMicrogram: (decimalPlaces?: number): number | Big => round(convertTo(value, METRIC_RATIOS.microgram), decimalPlaces),
        toNanogram: (decimalPlaces?: number): number | Big => round(convertTo(value, METRIC_RATIOS.nanogram), decimalPlaces),
        toPicogram: (decimalPlaces?: number): number | Big => round(convertTo(value, METRIC_RATIOS.picogram), decimalPlaces),
        toDecagram: (decimalPlaces?: number): number | Big => round(convertTo(value, METRIC_RATIOS.decagram), decimalPlaces),
        toCentigram: (decimalPlaces?: number): number | Big => round(convertTo(value, METRIC_RATIOS.centigram), decimalPlaces),
        toMegagram: (decimalPlaces?: number): number | Big => round(convertTo(value, METRIC_RATIOS.megagram), decimalPlaces),
        toDecigram: (decimalPlaces?: number): number | Big => round(convertTo(value, METRIC_RATIOS.decigram), decimalPlaces),

        toUK: () => toUK(gramToGrain(value)),
        toUS: () => toUS(gramToGrain(value)),
    };
};

const gramToGrain = (gram: number | Big) => {
    return convertFrom(gram, 15.43235835294143);
};

export default {
    ...converter.createFromMethods(toMetric)
};
