import Big from 'big.js';
import { toUK } from './mass.UK';
import { toUS } from './mass.US';
import { roundBig } from '../common';

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
    megagram: 1000000
};

export const toMetric = (value: Big) => {
    return {
        toGram: (decimalPlaces?: number): number => roundBig(value, decimalPlaces),
        toKilogram: (decimalPlaces?: number): number => roundBig(value.div(METRIC_RATIOS.kilogram), decimalPlaces),
        toHektogram: (decimalPlaces?: number): number => roundBig(value.div(METRIC_RATIOS.hektogram), decimalPlaces),
        toMilligram: (decimalPlaces?: number): number => roundBig(value.div(METRIC_RATIOS.milligram), decimalPlaces),
        toCarat: (decimalPlaces?: number): number => roundBig(value.div(METRIC_RATIOS.carat), decimalPlaces),
        toMicrogram: (decimalPlaces?: number): number => roundBig(value.div(METRIC_RATIOS.microgram), decimalPlaces),
        toNanogram: (decimalPlaces?: number): number => roundBig(value.div(METRIC_RATIOS.nanogram), decimalPlaces),
        toPicogram: (decimalPlaces?: number): number => roundBig(value.div(METRIC_RATIOS.picogram), decimalPlaces),
        toDecagram: (decimalPlaces?: number): number => roundBig(value.div(METRIC_RATIOS.decagram), decimalPlaces),
        toCentigram: (decimalPlaces?: number): number => roundBig(value.div(METRIC_RATIOS.centigram), decimalPlaces),
        toMegagram: (decimalPlaces?: number): number => roundBig(value.div(METRIC_RATIOS.megagram), decimalPlaces),

        toUK: () => toUK(value),
        toUS: () => toUS(value),
    };
};

export default {
    milligram: (value: number) => toMetric(new Big(value).times(METRIC_RATIOS.milligram)),
    gram: (value: number) => toMetric(new Big(value)),
    kilogram: (value: number) => toMetric(new Big(value).times(METRIC_RATIOS.kilogram)),
    hektogram: (value: number) => toMetric(new Big(value).times(METRIC_RATIOS.hektogram)),
    carat: (value: number) => toMetric(new Big(value).times(METRIC_RATIOS.carat)),
    microgram: (value: number) => toMetric(new Big(value).times(METRIC_RATIOS.microgram)),
    nanogram: (value: number) => toMetric(new Big(value).times(METRIC_RATIOS.nanogram)),
    picogram: (value: number) => toMetric(new Big(value).times(METRIC_RATIOS.picogram)),
    decagram: (value: number) => toMetric(new Big(value).times(METRIC_RATIOS.decagram)),
    centigram: (value: number) => toMetric(new Big(value).times(METRIC_RATIOS.centigram)),
    megagram: (value: number) => toMetric(new Big(value).times(METRIC_RATIOS.megagram)),

    mg: function(value: number) { return this.milligram(value); },
    g: function(value: number) { return this.gram(value); },
    kg: function(value: number) { return this.kilogram(value); },
    hg: function(value: number) { return this.hektogram(value); },
    ct: function(value: number) { return this.carat(value); },
    µg: function(value: number) { return this.microgram(value); },
    ng: function(value: number) { return this.nanogram(value); },
    pg: function(value: number) { return this.picogram(value); },
    dag: function(value: number) { return this.decagram(value); },
    cg: function(value: number) { return this.centigram(value); },
    Mg: function(value: number) { return this.megagram(value); }
};
