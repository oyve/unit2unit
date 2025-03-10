import Big from 'big.js';
import { toUK } from './mass.UK';
import { toUS } from './mass.US';
import { round, convertFrom, convertTo } from '../common';

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

        mg: function(decimalPlaces?: number) { return this.toMilligram(decimalPlaces); },
        g: function(decimalPlaces?: number) { return this.toGram(decimalPlaces); },
        kg: function(decimalPlaces?: number) { return this.toKilogram(decimalPlaces); },
        hg: function(decimalPlaces?: number) { return this.toHektogram(decimalPlaces); },
        ct: function(decimalPlaces?: number) { return this.toCarat(decimalPlaces); },
        µg: function(decimalPlaces?: number) { return this.toMicrogram(decimalPlaces); },
        ng: function(decimalPlaces?: number) { return this.toNanogram(decimalPlaces); },
        pg: function(decimalPlaces?: number) { return this.toPicogram(decimalPlaces); },
        dag: function(decimalPlaces?: number) { return this.toDecagram(decimalPlaces); },
        cg: function(decimalPlaces?: number) { return this.toCentigram(decimalPlaces); },
        Mg: function(decimalPlaces?: number) { return this.toMegagram(decimalPlaces); },
        dg: function(decimalPlaces?: number) { return this.toDecigram(decimalPlaces); },

        toUK: () => toUK(gramToGrain(value)),
        toUS: () => toUS(gramToGrain(value)),
    };
};

const gramToGrain = (gram: number | Big) => {
    return convertFrom(gram, 15.43235835294143);
};

export default {
    milligram: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.milligram)),
    gram: (value: number | Big) => toMetric(value),    
    kilogram: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.kilogram)),
    hektogram: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.hektogram)),
    carat: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.carat)),
    microgram: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.microgram)),
    nanogram: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.nanogram)),
    picogram: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.picogram)),
    decagram: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.decagram)),
    centigram: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.centigram)),
    megagram: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.megagram)),
    decigram: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.decigram)),

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
    Mg: function(value: number) { return this.megagram(value); },
    dg: function(value: number) { return this.decigram(value); }
};
