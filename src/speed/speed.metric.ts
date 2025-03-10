'use strict'
import { convertFrom, convertTo, round, SPEED_RATIOS } from '../common';
import { METRIC_RATIOS } from '../length/length.metric';

const fromTime = (value: number | Big) => {
    return {
        perMillisecond: () => to(convertTo(value, SPEED_RATIOS.perMillisecond)),
        perSecond: () => to(convertTo(value, SPEED_RATIOS.perSecond)),
        perMinute: () => to(convertTo(value, SPEED_RATIOS.perMinute)),
        perHour: () => to(convertTo(value, SPEED_RATIOS.perHour)),
    }
};

const toTime = (value: number | Big) => {
    return {
        perMillisecond: (decimalPlaces?: number) => round(convertFrom(value, SPEED_RATIOS.perMillisecond), decimalPlaces),
        perSecond: (decimalPlaces?: number) => round(convertFrom(value, SPEED_RATIOS.perSecond), decimalPlaces),
        perMinute: (decimalPlaces?: number) => round(convertFrom(value, SPEED_RATIOS.perMinute), decimalPlaces),
        perHour: (decimalPlaces?: number) => round(convertFrom(value, SPEED_RATIOS.perHour), decimalPlaces),
    }
};

const to = (value: number | Big) => {
    return {
        toMeter: () => toTime(convertTo(value, METRIC_RATIOS.meter)),
        toCentimeter: () => toTime(convertTo(value, METRIC_RATIOS.centimeter)),
        toMillimeter: () => toTime(convertTo(value, METRIC_RATIOS.millimeter)),
        toKilometer: () => toTime(convertTo(value, METRIC_RATIOS.kilometer)),

        mm: function() { return this.toMillimeter(); },
        cm: function() { return this.toCentimeter(); },
        m: function() { return this.toMeter(); },
        km: function() { return this.toKilometer(); }
    };
};

export default {
    millimeter: (value: number | Big) => fromTime(convertFrom(value, METRIC_RATIOS.millimeter)),
    centimeter: (value: number | Big) => fromTime(convertFrom(value, METRIC_RATIOS.centimeter)),
    meter: (value: number | Big) => fromTime(value),
    kilometer: (value: number | Big) => fromTime(convertFrom(value, METRIC_RATIOS.kilometer)),

    mm: function(value: number) { return this.millimeter(value); },
    cm: function(value: number) { return this.centimeter(value); },
    m: function(value: number) { return this.meter(value); },
    km: function(value: number) { return this.kilometer(value); }
}