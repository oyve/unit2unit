'use strict'

import Big from "big.js";
import { roundBig } from "../common";

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

export const toMetric = (value: Big) => {
    return {
        toCubicMeter: (decimalPlaces?: number) => roundBig(value, decimalPlaces),
        toCubicDecimeter: (decimalPlaces?: number) => roundBig(value.div(METRIC_RATIOS.cubicDecimeter), decimalPlaces),
        toCubicCentimeter: (decimalPlaces?: number) => roundBig(value.div(METRIC_RATIOS.cubicCentimeter), decimalPlaces),
        toCubicMillimeter: (decimalPlaces?: number) => roundBig(value.div(METRIC_RATIOS.cubicMillimeter), decimalPlaces),
        toCubicKilometer: (decimalPlaces?: number) => roundBig(value.div(METRIC_RATIOS.cubicKilometer), decimalPlaces),
        toCubicHectometer: (decimalPlaces?: number) => roundBig(value.div(METRIC_RATIOS.cubicHectometer), decimalPlaces),
        toCubicDecameter: (decimalPlaces?: number) => roundBig(value.div(METRIC_RATIOS.cubicDecameter), decimalPlaces),
        toLitre: (decimalPlaces?: number) => roundBig(value.div(METRIC_RATIOS.litre), decimalPlaces),
        toDecilitre: (decimalPlaces?: number) => roundBig(value.div(METRIC_RATIOS.decilitre), decimalPlaces),
        toCentilitre: (decimalPlaces?: number) => roundBig(value.div(METRIC_RATIOS.centilitre), decimalPlaces),
        toMillilitre: (decimalPlaces?: number) => roundBig(value.div(METRIC_RATIOS.millilitre), decimalPlaces),
        toHectolitre: (decimalPlaces?: number) => roundBig(value.div(METRIC_RATIOS.hectolitre), decimalPlaces),
        toKilolitre: (decimalPlaces?: number) => roundBig(value.div(METRIC_RATIOS.kilolitre), decimalPlaces),

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
    cubicMeter: (value: number) => toMetric(new Big(value)),
    cubicDecimeter: (value: number) => toMetric(new Big(value).times(METRIC_RATIOS.cubicDecimeter)),
    cubicCentimeter: (value: number) => toMetric(new Big(value).times(METRIC_RATIOS.cubicCentimeter)),
    cubicMillimeter: (value: number) => toMetric(new Big(value).times(METRIC_RATIOS.cubicMillimeter)),
    cubicKilometer: (value: number) => toMetric(new Big(value).times(METRIC_RATIOS.cubicKilometer)),
    cubicHectometer: (value: number) => toMetric(new Big(value).times(METRIC_RATIOS.cubicHectometer)),
    cubicDecameter: (value: number) => toMetric(new Big(value).times(METRIC_RATIOS.cubicDecameter)),
    litre: (value: number) => toMetric(new Big(value).times(METRIC_RATIOS.litre)),
    decilitre: (value: number) => toMetric(new Big(value).times(METRIC_RATIOS.decilitre)),
    centilitre: (value: number) => toMetric(new Big(value).times(METRIC_RATIOS.centilitre)),
    millilitre: (value: number) => toMetric(new Big(value).times(METRIC_RATIOS.millilitre)),
    hectolitre: (value: number) => toMetric(new Big(value).times(METRIC_RATIOS.hectolitre)),
    kilolitre: (value: number) => toMetric(new Big(value).times(METRIC_RATIOS.kilolitre)),

    cm3: function(value: number) { return this.cubicCentimeter(value); },
    m3: function(value: number) { return this.cubicMeter(value); },
    dm3: function(value: number) { return this.cubicDecimeter(value); },
    mm3: function(value: number) { return this.cubicMillimeter(value); },
    km3: function(value: number) { return this.cubicKilometer(value); },
    hm3: function(value: number) { return this.cubicHectometer(value); },
    dam3: function(value: number) { return this.cubicDecameter(value); },
    l: function(value: number) { return this.litre(value); },
    dl: function(value: number) { return this.decilitre(value); },
    cl: function(value: number) { return this.centilitre(value); },
    ml: function(value: number) { return this.millilitre(value); },
    hl: function(value: number) { return this.hectolitre(value); },
    kl: function(value: number) { return this.kilolitre(value); }
}
