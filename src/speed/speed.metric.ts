'use strict'
import { round, roundBig, SPEED_RATIOS } from '../common';
import { METRIC_RATIOS } from '../length/length.metric';

const fromTime = (value: number) => {
    return {
        perMillisecond: () => to(value / SPEED_RATIOS.perMillisecond),
        perSecond: () => to(value / SPEED_RATIOS.perSecond),
        perMinute: () => to(value / SPEED_RATIOS.perMinute),
        perHour: () => to(value / SPEED_RATIOS.perHour),
    }
};

const toTime = (value: number) => {
    return {
        perMillisecond: (decimalPlaces?: number) => round(value * SPEED_RATIOS.perMillisecond, decimalPlaces),
        perSecond: (decimalPlaces?: number) => round(value * SPEED_RATIOS.perSecond, decimalPlaces),
        perMinute: (decimalPlaces?: number) => round(value * SPEED_RATIOS.perMinute, decimalPlaces),
        perHour: (decimalPlaces?: number) => round(value * SPEED_RATIOS.perHour, decimalPlaces),
    }
};

const to = (value: number) => {
    return {
        toMeter: () => toTime(value / METRIC_RATIOS.meter),
        toCentimeter: () => toTime(value / METRIC_RATIOS.centimeter),
        toMillimeter: () => toTime(value / METRIC_RATIOS.millimeter),
        toKilometer: () => toTime(value / METRIC_RATIOS.kilometer),

        mm: function() { return this.toMillimeter(); },
        cm: function() { return this.toCentimeter(); },
        m: function() { return this.toMeter(); },
        km: function() { return this.toKilometer(); }
    };
};

export default {
    millimeter: (value: number) => fromTime(value * METRIC_RATIOS.millimeter),
    centimeter: (value: number) => fromTime(value * METRIC_RATIOS.centimeter),
    meter: (value: number) => fromTime(value),
    kilometer: (value: number) => fromTime(value * METRIC_RATIOS.kilometer),

    mm: function(value: number) { return this.millimeter(value); },
    cm: function(value: number) { return this.centimeter(value); },
    m: function(value: number) { return this.meter(value); },
    km: function(value: number) { return this.kilometer(value); }
}