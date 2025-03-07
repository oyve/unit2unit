'use strict'

import lengthSI from './length/length.SI';

const FOOT_PER_HOUR = 11811.0236;
const FOOT_PER_MINUTE = 196.850394;
const FOOT_PER_SECOND = 3.28084;
const FURLONG_PER_FORTNIGHT = 6012.8848;
const INCH_PER_HOUR = 141732.283;
const INCH_PER_MINUTE = 2362.20472;
const INCH_PER_SECOND = 39.3701;
const KILOMETRE_PER_HOUR = 3.6;
const KNOT = 1.94384;
const MILE_PER_HOUR = 2.23694;
const MILE_PER_MINUTE = 0.0372823;
const MILE_PER_SECOND = 0.000621371;
const SPEED_OF_LIGHT_VACUUM = 299792458;

const to = (value: number) => {
    let tos = {
        toMeterPerSecond: () => value,
        toFootPerHour: () => value * FOOT_PER_HOUR,
        toFootPerMinute: () => value * FOOT_PER_MINUTE,
        toFootPerSecond: () => value * FOOT_PER_SECOND,
        toFurlongPerFortnight: () => value * FURLONG_PER_FORTNIGHT,
        toInchPerHour: () => value * INCH_PER_HOUR,
        toInchPerMinute: () => value * INCH_PER_MINUTE,
        toInchPerSecond: () => value * INCH_PER_SECOND,
        toKilometrePerHour: () => value * KILOMETRE_PER_HOUR,
        toKnot: () => value * KNOT,
        toKnotAdmiralty: () => value * KNOT,
        toMilePerHour: () => value * MILE_PER_HOUR,
        toMilePerMinute: () => value * MILE_PER_MINUTE,
        toMilePerSecond: () => value * MILE_PER_SECOND,
        toSpeedOfLightVacuum: () => value / SPEED_OF_LIGHT_VACUUM,
    }
    return tos;
}

module.exports = {
    metrePerSecond: (value: number) => to(value),
    footPerHour: (value: number) => to(value / FOOT_PER_HOUR),
    footPerMinute: (value: number) => to(value / FOOT_PER_MINUTE),
    footPerSecond: (value: number) => to(value / FOOT_PER_SECOND),
    furlongPerFortnight: (value: number) => to(value / FURLONG_PER_FORTNIGHT),
    inchPerHour: (value: number) => to(value / INCH_PER_HOUR),
    inchPerMinute: (value: number) => to(value / INCH_PER_MINUTE),
    inchPerSecond: (value: number) => to(value / INCH_PER_SECOND),
    kilometrePerHour: (value: number) => to(lengthSI.kilometer(value).toMeter() / 3600),
    knot: (value: number) => to(value / KNOT),
    knotAdmiralty: (value: number) => to(value / KNOT),
    milePerHour: (value: number) => to(value / MILE_PER_HOUR),
    milePerMinute: (value: number) => to(value / MILE_PER_MINUTE),
    milePerSecond: (value: number) => to(value / MILE_PER_SECOND),
    speedOfLightVacuum: (value: number) => to(value * SPEED_OF_LIGHT_VACUUM),
}