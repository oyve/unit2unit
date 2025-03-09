'use strict'

import { round } from '../common';

const SPEED_RATIOS: { [key: string]: number } = { // to the foot per second
    footPerHour: 1 / 3600,
    footPerMinute: 1 / 60,
    footPerSecond: 1,
    inchPerHour: 1 / 43200,
    inchPerMinute: 1 / 720,
    inchPerSecond: 1 / 12,
    milePerHour: 1.46667,
    milePerMinute: 88,
    milePerSecond: 5280,
    knot: 1.68781,
};

const to = (value: number) => {
    return {
        toFootPerHour: (decimalPlaces?: number) => round(value / SPEED_RATIOS.footPerHour, decimalPlaces),
        toFootPerMinute: (decimalPlaces?: number) => round(value / SPEED_RATIOS.footPerMinute, decimalPlaces),
        toFootPerSecond: (decimalPlaces?: number) => round(value / SPEED_RATIOS.footPerSecond, decimalPlaces),
        toInchPerHour: (decimalPlaces?: number) => round(value / SPEED_RATIOS.inchPerHour, decimalPlaces),
        toInchPerMinute: (decimalPlaces?: number) => round(value / SPEED_RATIOS.inchPerMinute, decimalPlaces),
        toInchPerSecond: (decimalPlaces?: number) => round(value / SPEED_RATIOS.inchPerSecond, decimalPlaces),
        toMilePerHour: (decimalPlaces?: number) => round(value / SPEED_RATIOS.milePerHour, decimalPlaces),
        toMilePerMinute: (decimalPlaces?: number) => round(value / SPEED_RATIOS.milePerMinute, decimalPlaces),
        toMilePerSecond: (decimalPlaces?: number) => round(value / SPEED_RATIOS.milePerSecond, decimalPlaces),
        toKnot: (decimalPlaces?: number) => round(value / SPEED_RATIOS.knot, decimalPlaces),

        ft_hr: function (decimalPlaces?: number) { return this.toFootPerHour(decimalPlaces); },
        ft_min: function (decimalPlaces?: number) { return this.toFootPerMinute(decimalPlaces); },
        ft_s: function (decimalPlaces?: number) { return this.toFootPerSecond(decimalPlaces); },
        in_hr: function (decimalPlaces?: number) { return this.toInchPerHour(decimalPlaces); },
        in_min: function (decimalPlaces?: number) { return this.toInchPerMinute(decimalPlaces); },
        in_s: function (decimalPlaces?: number) { return this.toInchPerSecond(decimalPlaces); },
        mi_hr: function (decimalPlaces?: number) { return this.toMilePerHour(decimalPlaces); },
        mi_min: function (decimalPlaces?: number) { return this.toMilePerMinute(decimalPlaces); },
        mi_s: function (decimalPlaces?: number) { return this.toMilePerSecond(decimalPlaces); },
        kn: function (decimalPlaces?: number) { return this.toKnot(decimalPlaces); },
    };
};

export default {
    footPerHour: (value: number) => to(value * SPEED_RATIOS.footPerHour),
    footPerMinute: (value: number) => to(value * SPEED_RATIOS.footPerMinute),
    footPerSecond: (value: number) => to(value * SPEED_RATIOS.footPerSecond),
    inchPerHour: (value: number) => to(value * SPEED_RATIOS.inchPerHour),
    inchPerMinute: (value: number) => to(value * SPEED_RATIOS.inchPerMinute),
    inchPerSecond: (value: number) => to(value * SPEED_RATIOS.inchPerSecond),
    milePerHour: (value: number) => to(value * SPEED_RATIOS.milePerHour),
    milePerMinute: (value: number) => to(value * SPEED_RATIOS.milePerMinute),
    milePerSecond: (value: number) => to(value * SPEED_RATIOS.milePerSecond),
    knot: (value: number) => to(value * SPEED_RATIOS.knot),

    ft_hr: function (value: number) { return this.footPerHour(value); },
    ft_min: function (value: number) { return this.footPerMinute(value); },
    ft_s: function (value: number) { return this.footPerSecond(value); },
    in_hr: function (value: number) { return this.inchPerHour(value); },
    in_min: function (value: number) { return this.inchPerMinute(value); },
    in_s: function (value: number) { return this.inchPerSecond(value); },
    mi_hr: function (value: number) { return this.milePerHour(value); },
    mi_min: function (value: number) { return this.milePerMinute(value); },
    mi_s: function (value: number) { return this.milePerSecond(value); },
    kn: function (value: number) { return this.knot(value); },
}
