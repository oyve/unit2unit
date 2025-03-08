'use strict'

import { round } from '../common';

const SPEED_RATIOS: { [key: string]: number } = { // to the meter per second
    meterPerSecond: 1,
    meterPerMinute: 1 / 60,
    meterPerHour: 1 / 3600,
    centimeterPerSecond: 0.01,
    centimeterPerMinute: 0.01 / 60,
    centimeterPerHour: 0.01 / 3600,
    millimeterPerSecond: 0.001,
    millimeterPerMinute: 0.001 / 60,
    millimeterPerHour: 0.001 / 3600,
    kilometerPerHour: 0.277778,
    speedOfLightVacuum: 299792458,
};

const to = (value: number) => {
    let tos = {
        toMeterPerSecond: (decimalPlaces?: number) => round(value, decimalPlaces),
        toMeterPerMinute: (decimalPlaces?: number) => round(value / SPEED_RATIOS.meterPerMinute, decimalPlaces),
        toMeterPerHour: (decimalPlaces?: number) => round(value / SPEED_RATIOS.meterPerHour, decimalPlaces),
        toCentimeterPerSecond: (decimalPlaces?: number) => round(value / SPEED_RATIOS.centimeterPerSecond, decimalPlaces),
        toCentimeterPerMinute: (decimalPlaces?: number) => round(value / SPEED_RATIOS.centimeterPerMinute, decimalPlaces),
        toCentimeterPerHour: (decimalPlaces?: number) => round(value / SPEED_RATIOS.centimeterPerHour, decimalPlaces),
        toMillimeterPerSecond: (decimalPlaces?: number) => round(value / SPEED_RATIOS.millimeterPerSecond, decimalPlaces),
        toMillimeterPerMinute: (decimalPlaces?: number) => round(value / SPEED_RATIOS.millimeterPerMinute, decimalPlaces),
        toMillimeterPerHour: (decimalPlaces?: number) => round(value / SPEED_RATIOS.millimeterPerHour, decimalPlaces),
        toKilometerPerHour: (decimalPlaces?: number) => round(value / SPEED_RATIOS.kilometerPerHour, decimalPlaces),
        toSpeedOfLightVacuum: (decimalPlaces?: number) => round(value / SPEED_RATIOS.speedOfLightVacuum, decimalPlaces),

        m_s: function (decimalPlaces?: number) { return this.toMeterPerSecond(decimalPlaces); },
        m_min: function (decimalPlaces?: number) { return this.toMeterPerMinute(decimalPlaces); },
        m_hr: function (decimalPlaces?: number) { return this.toMeterPerHour(decimalPlaces); },
        cm_s: function (decimalPlaces?: number) { return this.toCentimeterPerSecond(decimalPlaces); },
        cm_min: function (decimalPlaces?: number) { return this.toCentimeterPerMinute(decimalPlaces); },
        cm_hr: function (decimalPlaces?: number) { return this.toCentimeterPerHour(decimalPlaces); },
        mm_s: function (decimalPlaces?: number) { return this.toMillimeterPerSecond(decimalPlaces); },
        mm_min: function (decimalPlaces?: number) { return this.toMillimeterPerMinute(decimalPlaces); },
        mm_hr: function (decimalPlaces?: number) { return this.toMillimeterPerHour(decimalPlaces); },
        km_hr: function (decimalPlaces?: number) { return this.toKilometerPerHour(decimalPlaces); },
        c: function (decimalPlaces?: number) { return this.toSpeedOfLightVacuum(decimalPlaces); },
    }
    return tos;
}

export default {
    meterPerSecond: (value: number) => to(value),
    meterPerMinute: (value: number) => to(value * SPEED_RATIOS.meterPerMinute),
    meterPerHour: (value: number) => to(value * SPEED_RATIOS.meterPerHour),
    centimeterPerSecond: (value: number) => to(value * SPEED_RATIOS.centimeterPerSecond),
    centimeterPerMinute: (value: number) => to(value * SPEED_RATIOS.centimeterPerMinute),
    centimeterPerHour: (value: number) => to(value * SPEED_RATIOS.centimeterPerHour),
    millimeterPerSecond: (value: number) => to(value * SPEED_RATIOS.millimeterPerSecond),
    millimeterPerMinute: (value: number) => to(value * SPEED_RATIOS.millimeterPerMinute),
    millimeterPerHour: (value: number) => to(value * SPEED_RATIOS.millimeterPerHour),
    kilometerPerHour: (value: number) => to(value * SPEED_RATIOS.kilometerPerHour),
    speedOfLightVacuum: (value: number) => to(value * SPEED_RATIOS.speedOfLightVacuum),

    m_s: function (value: number) { return this.meterPerSecond(value); },
    m_min: function (value: number) { return this.meterPerMinute(value); },
    m_hr: function (value: number) { return this.meterPerHour(value); },
    cm_s: function (value: number) { return this.centimeterPerSecond(value); },
    cm_min: function (value: number) { return this.centimeterPerMinute(value); },
    cm_hr: function (value: number) { return this.centimeterPerHour(value); },
    mm_s: function (value: number) { return this.millimeterPerSecond(value); },
    mm_min: function (value: number) { return this.millimeterPerMinute(value); },
    mm_hr: function (value: number) { return this.millimeterPerHour(value); },
    km_hr: function (value: number) { return this.kilometerPerHour(value); },
    c: function (value: number) { return this.speedOfLightVacuum(value); },
}
