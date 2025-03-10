'use strict'

import Big from "big.js";
import { convertFrom, convertTo, round } from "../common";

export const METRIC_RATIOS = { //to the cubic meter
    cubicMeter: 1,
    cubicDecimeter: 0.001,
    cubicCentimeter: 0.000001,
    cubicMillimeter: 0.000000001,
    cubicKilometer: 1e9,
    cubicHectometer: 1e6,
    cubicDecameter: 1e3,
    litre: 0.001,
    decilitre: 0.0001,
    centilitre: 0.00001,
    millilitre: 0.000001,
    hectolitre: 0.1,
    kilolitre: 1,
};

export const toMetric = (value: number | Big) => {
    return {
        toCubicMeter: (decimalPlaces?: number) => round(value, decimalPlaces),
        toCubicDecimeter: (decimalPlaces?: number) => round(convertTo(value, METRIC_RATIOS.cubicDecimeter), decimalPlaces),
        toCubicCentimeter: (decimalPlaces?: number) => round(convertTo(value, METRIC_RATIOS.cubicCentimeter), decimalPlaces),
        toCubicMillimeter: (decimalPlaces?: number) => round(convertTo(value, METRIC_RATIOS.cubicMillimeter), decimalPlaces),
        toCubicKilometer: (decimalPlaces?: number) => round(convertTo(value, METRIC_RATIOS.cubicKilometer), decimalPlaces),
        toCubicHectometer: (decimalPlaces?: number) => round(convertTo(value, METRIC_RATIOS.cubicHectometer), decimalPlaces),
        toCubicDecameter: (decimalPlaces?: number) => round(convertTo(value, METRIC_RATIOS.cubicDecameter), decimalPlaces),
        toLitre: (decimalPlaces?: number) => round(convertTo(value, METRIC_RATIOS.litre), decimalPlaces),
        toDecilitre: (decimalPlaces?: number) => round(convertTo(value, METRIC_RATIOS.decilitre), decimalPlaces),
        toCentilitre: (decimalPlaces?: number) => round(convertTo(value, METRIC_RATIOS.centilitre), decimalPlaces),
        toMillilitre: (decimalPlaces?: number) => round(convertTo(value, METRIC_RATIOS.millilitre), decimalPlaces),
        toHectolitre: (decimalPlaces?: number) => round(convertTo(value, METRIC_RATIOS.hectolitre), decimalPlaces),
        toKilolitre: (decimalPlaces?: number) => round(convertTo(value, METRIC_RATIOS.kilolitre), decimalPlaces),

        cm3: function(decimalPlaces?: number) { return this.toCubicCentimeter(decimalPlaces); },
        m3: function(decimalPlaces?: number) { return this.toCubicMeter(decimalPlaces); },
        dm3: function(decimalPlaces?: number) { return this.toCubicDecimeter(decimalPlaces); },
        mm3: function(decimalPlaces?: number) { return this.toCubicMillimeter(decimalPlaces); },
        km3: function(decimalPlaces?: number) { return this.toCubicKilometer(decimalPlaces); },
        hm3: function(decimalPlaces?: number) { return this.toCubicHectometer(decimalPlaces); },
        dam3: function(decimalPlaces?: number) { return this.toCubicDecameter(decimalPlaces); },
        l: function(decimalPlaces?: number) { return this.toLitre(decimalPlaces); },
        dl: function(decimalPlaces?: number) { return this.toDecilitre(decimalPlaces); },
        cl: function(decimalPlaces?: number) { return this.toCentilitre(decimalPlaces); },
        ml: function(decimalPlaces?: number) { return this.toMillilitre(decimalPlaces); },
        hl: function(decimalPlaces?: number) { return this.toHectolitre(decimalPlaces); },
        kl: function(decimalPlaces?: number) { return this.toKilolitre(decimalPlaces); }
    };
};

export default {
    cubicMeter: (value: number | Big) => toMetric(value),
    cubicDecimeter: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.cubicDecimeter)),
    cubicCentimeter: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.cubicCentimeter)),
    cubicMillimeter: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.cubicMillimeter)),
    cubicKilometer: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.cubicKilometer)),
    cubicHectometer: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.cubicHectometer)),
    cubicDecameter: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.cubicDecameter)),
    litre: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.litre)),
    decilitre: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.decilitre)),
    centilitre: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.centilitre)),
    millilitre: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.millilitre)),
    hectolitre: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.hectolitre)),
    kilolitre: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.kilolitre)),

    cm3: function(value: number | Big) { return this.cubicCentimeter(value); },
    m3: function(value: number | Big) { return this.cubicMeter(value); },
    dm3: function(value: number | Big) { return this.cubicDecimeter(value); },
    mm3: function(value: number | Big) { return this.cubicMillimeter(value); },
    km3: function(value: number | Big) { return this.cubicKilometer(value); },
    hm3: function(value: number | Big) { return this.cubicHectometer(value); },
    dam3: function(value: number | Big) { return this.cubicDecameter(value); },
    l: function(value: number | Big) { return this.litre(value); },
    dl: function(value: number | Big) { return this.decilitre(value); },
    cl: function(value: number | Big) { return this.centilitre(value); },
    ml: function(value: number | Big) { return this.millilitre(value); },
    hl: function(value: number | Big) { return this.hectolitre(value); },
    kl: function(value: number | Big) { return this.kilolitre(value); }
}
