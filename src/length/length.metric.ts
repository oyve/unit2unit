import Big from 'big.js';

import { toUK } from './length.UK';
import { toUS } from './length.US';
import { toNautical } from './length.nautical';
import { toSpecial } from './length.special';
import { toAstronomical } from './length.astronomical';
import { convertFrom, convertTo, round } from '../common';

export const METRIC_RATIOS: Record<string, number> = {
    attometer: 10 ** -18,
    femtometer: 10 ** -15,
    picometer: 10 ** -12,
    nanometer: 10 ** -9,
    micrometer: 10 ** -6,
    millimeter: 10 ** -3,
    centimeter: 10 ** -2,
    decimeter: 10 ** -1,
    decameter: 10 ** 1,
    hectometer: 10 ** 2,
    kilometer: 10 ** 3,
    megameter: 10 ** 6,
    gigameter: 10 ** 9,
    terameter: 10 ** 12,
    petameter: 10 ** 15,
    exameter: 10 ** 18,
};

export const toMetric = (value: number | Big) => {
    return {
        toAttometer: (decimalPlaces?: number): number | Big => round(convertTo(value, METRIC_RATIOS.attometer), decimalPlaces),
        toFemtometer: (decimalPlaces?: number): number | Big => round(convertTo(value, METRIC_RATIOS.femtometer), decimalPlaces),
        toPicometer: (decimalPlaces?: number): number | Big => round(convertTo(value, METRIC_RATIOS.picometer), decimalPlaces),
        toNanometer: (decimalPlaces?: number): number | Big => round(convertTo(value, METRIC_RATIOS.nanometer), decimalPlaces),
        toMicrometer: (decimalPlaces?: number): number | Big => round(convertTo(value, METRIC_RATIOS.micrometer), decimalPlaces),
        toMillimeter: (decimalPlaces?: number): number | Big => round(convertTo(value, METRIC_RATIOS.millimeter), decimalPlaces),
        toCentimeter: (decimalPlaces?: number): number | Big => round(convertTo(value, METRIC_RATIOS.centimeter), decimalPlaces),
        toDecimeter: (decimalPlaces?: number): number | Big => round(convertTo(value, METRIC_RATIOS.decimeter), decimalPlaces),
        toDecameter: (decimalPlaces?: number): number | Big => round(convertTo(value, METRIC_RATIOS.decameter), decimalPlaces),
        toMeter: (decimalPlaces?: number): number | Big => round(value, decimalPlaces),
        toHectometer: (decimalPlaces?: number): number |Big => round(convertTo(value, METRIC_RATIOS.hectometer), decimalPlaces),
        toKilometer: (decimalPlaces?: number): number | Big => round(convertTo(value, METRIC_RATIOS.kilometer), decimalPlaces),
        toMegameter: (decimalPlaces?: number): number | Big => round(convertTo(value, METRIC_RATIOS.megameter), decimalPlaces),
        toGigameter: (decimalPlaces?: number): number | Big => round(convertTo(value, METRIC_RATIOS.gigameter), decimalPlaces),
        toTerameter: (decimalPlaces?: number): number | Big => round(convertTo(value, METRIC_RATIOS.terameter), decimalPlaces),
        toPetameter: (decimalPlaces?: number): number | Big => round(convertTo(value, METRIC_RATIOS.petameter), decimalPlaces),
        toExameter: (decimalPlaces?: number): number | Big => round(convertTo(value, METRIC_RATIOS.exameter), decimalPlaces),

        am: function(decimalPlaces?: number) { return this.toAttometer(decimalPlaces); }, // Added attometer shorthand
        fm: function(decimalPlaces?: number) { return this.toFemtometer(decimalPlaces); },
        pm: function(decimalPlaces?: number) { return this.toPicometer(decimalPlaces); },
        nm: function(decimalPlaces?: number) { return this.toNanometer(decimalPlaces); },
        um: function(decimalPlaces?: number) { return this.toMicrometer(decimalPlaces); },
        mm: function(decimalPlaces?: number) { return this.toMillimeter(decimalPlaces); },
        cm: function(decimalPlaces?: number) { return this.toCentimeter(decimalPlaces); },
        dm: function(decimalPlaces?: number) { return this.toDecimeter(decimalPlaces); },
        dam: function(decimalPlaces?: number) { return this.toDecameter(decimalPlaces); },
        m: function(decimalPlaces?: number) { return this.toMeter(decimalPlaces); },
        hm: function(decimalPlaces?: number) { return this.toHectometer(decimalPlaces); },
        km: function(decimalPlaces?: number) { return this.toKilometer(decimalPlaces); },
        Mm: function(decimalPlaces?: number) { return this.toMegameter(decimalPlaces); },
        Gm: function(decimalPlaces?: number) { return this.toGigameter(decimalPlaces); },
        Tm: function(decimalPlaces?: number) { return this.toTerameter(decimalPlaces); },
        Pm: function(decimalPlaces?: number) { return this.toPetameter(decimalPlaces); },
        Em: function(decimalPlaces?: number) { return this.toExameter(decimalPlaces); },
        
        toUK: () => toUK(meterToFoot(value)),
        toUS: () => toUS(meterToFoot(value)),
        toNautical: () => toNautical(meterToNauticalMile(value)),
        toSpecial: () => toSpecial(value),
        toAstronomical: () => toAstronomical(meterToAstronomicalUnit(value)),
    };
};

const meterToNauticalMile = (meter: number | Big) => { return convertFrom(meter, 1 / 1852); };
const meterToFoot = (meter: number | Big) => { return convertFrom(meter, 3.28084); };
const meterToAstronomicalUnit = (meter: number | Big) => { return convertFrom(meter, 6.68459e-12); };

export default {
    attometer: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.attometer)), // Added attometer
    femtometer: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.femtometer)),
    picometer: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.picometer)),
    nanometer: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.nanometer)),
    micrometer: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.micrometer)),
    millimeter: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.millimeter)),
    centimeter: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.centimeter)),
    decimeter: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.decimeter)),
    decameter: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.decameter)),
    meter: (value: number | Big) => toMetric(value),
    hectometer: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.hectometer)),
    kilometer: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.kilometer)),
    megameter: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.megameter)),
    gigameter: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.gigameter)),
    terameter: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.terameter)),
    petameter: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.petameter)),
    exameter: (value: number | Big) => toMetric(convertFrom(value, METRIC_RATIOS.exameter)),

    am: function(value: number | Big) { return this.attometer(value); },
    fm: function(value: number | Big) { return this.femtometer(value); },
    pm: function(value: number | Big) { return this.picometer(value); },
    nm: function(value: number | Big) { return this.nanometer(value); },
    um: function(value: number | Big) { return this.micrometer(value); },
    mm: function(value: number | Big) { return this.millimeter(value); },
    cm: function(value: number | Big) { return this.centimeter(value); },
    dm: function(value: number | Big) { return this.decimeter(value); },
    dam: function(value: number | Big) { return this.decameter(value); },
    m: function(value: number | Big) { return this.meter(value); },
    hm: function(value: number | Big) { return this.hectometer(value); },
    km: function(value: number | Big) { return this.kilometer(value); },
    Mm: function(value: number | Big) { return this.megameter(value); },
    Gm: function(value: number | Big) { return this.gigameter(value); },
    Tm: function(value: number | Big) { return this.terameter(value); },
    Pm: function(value: number | Big) { return this.petameter(value); },
    Em: function(value: number | Big) { return this.exameter(value); },
};