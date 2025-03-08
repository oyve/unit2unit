import Big from 'big.js';

import { toUK } from './length.UK';
import { toUS } from './length.US';
import { toNautical } from './length.nautical';
import { toSpecial } from './length.special';
import { toAstronomical } from './length.astronomical';
import { roundBig } from '../common';

const METRIC_RATIOS: { [key: string]: number } = {
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

export const toMetric = (value: Big) => {
    return {
        toFemtometer: (decimalPlaces?: number): number => roundBig(value.div(METRIC_RATIOS.femtometer), decimalPlaces),
        toPicometer: (decimalPlaces?: number): number => roundBig(value.div(METRIC_RATIOS.picometer), decimalPlaces),
        toNanometer: (decimalPlaces?: number): number => roundBig(value.div(METRIC_RATIOS.nanometer), decimalPlaces),
        toMicrometer: (decimalPlaces?: number): number => roundBig(value.div(METRIC_RATIOS.micrometer), decimalPlaces),
        toMillimeter: (decimalPlaces?: number): number => roundBig(value.div(METRIC_RATIOS.millimeter), decimalPlaces),
        toCentimeter: (decimalPlaces?: number): number => roundBig(value.div(METRIC_RATIOS.centimeter), decimalPlaces),
        toDecimeter: (decimalPlaces?: number): number => roundBig(value.div(METRIC_RATIOS.decimeter), decimalPlaces),
        toDecameter: (decimalPlaces?: number): number => roundBig(value.div(METRIC_RATIOS.decameter), decimalPlaces),
        toMeter: (decimalPlaces?: number): number => roundBig(value, decimalPlaces),
        toHectometer: (decimalPlaces?: number): number => roundBig(value.div(METRIC_RATIOS.hectometer), decimalPlaces),
        toKilometer: (decimalPlaces?: number): number => roundBig(value.div(METRIC_RATIOS.kilometer), decimalPlaces),
        toMegameter: (decimalPlaces?: number): number => roundBig(value.div(METRIC_RATIOS.megameter), decimalPlaces),
        toGigameter: (decimalPlaces?: number): number => roundBig(value.div(METRIC_RATIOS.gigameter), decimalPlaces),
        toTerameter: (decimalPlaces?: number): number => roundBig(value.div(METRIC_RATIOS.terameter), decimalPlaces),
        toPetameter: (decimalPlaces?: number): number => roundBig(value.div(METRIC_RATIOS.petameter), decimalPlaces),
        toExameter: (decimalPlaces?: number): number => roundBig(value.div(METRIC_RATIOS.exameter), decimalPlaces),

        fm: function(decimalPlaces?: number) { return this.toFemtometer(decimalPlaces); },
        pm: function(decimalPlaces?: number) { return this.toPicometer(decimalPlaces); },
        nm: function(decimalPlaces?: number) { return this.toNanometer(decimalPlaces); },
        um: function(decimalPlaces?: number) { return this.toMicrometer(decimalPlaces); },
        mm: function(decimalPlaces?: number) { return this.toMillimeter(decimalPlaces); },
        cm: function(decimalPlaces?: number) { return this.toCentimeter(decimalPlaces); },
        dm: function(decimalPlaces?: number) { return this.toDecimeter(decimalPlaces); },
        Dm: function(decimalPlaces?: number) { return this.toDecameter(decimalPlaces); },
        m: function(decimalPlaces?: number) { return this.toMeter(decimalPlaces); },
        hm: function(decimalPlaces?: number) { return this.toHectometer(decimalPlaces); },
        km: function(decimalPlaces?: number) { return this.toKilometer(decimalPlaces); },
        Mm: function(decimalPlaces?: number) { return this.toMegameter(decimalPlaces); },
        Gm: function(decimalPlaces?: number) { return this.toGigameter(decimalPlaces); },
        Tm: function(decimalPlaces?: number) { return this.toTerameter(decimalPlaces); },
        Pm: function(decimalPlaces?: number) { return this.toPetameter(decimalPlaces); },
        Em: function(decimalPlaces?: number) { return this.toExameter(decimalPlaces); },

        toUK: () => toUK(value.toNumber()),
        toUS: () => toUS(value.toNumber()),
        toNautical: () => toNautical(value.toNumber()),
        toSpecial: () => toSpecial(value.toNumber()),
        toAstronomical: () => toAstronomical(value),
    };
};

export default {
    femtometer: (value: number) => toMetric(new Big(value * METRIC_RATIOS.femtometer)),
    picometer: (value: number) => toMetric(new Big(value * METRIC_RATIOS.picometer)),
    nanometer: (value: number) => toMetric(new Big(value * METRIC_RATIOS.nanometer)),
    micrometer: (value: number) => toMetric(new Big(value * METRIC_RATIOS.micrometer)),
    millimeter: (value: number) => toMetric(new Big(value * METRIC_RATIOS.millimeter)),
    centimeter: (value: number) => toMetric(new Big(value * METRIC_RATIOS.centimeter)),
    decimeter: (value: number) => toMetric(new Big(value * METRIC_RATIOS.decimeter)),
    decameter: (value: number) => toMetric(new Big(value * METRIC_RATIOS.decameter)),
    meter: (value: number) => toMetric(new Big(value)),
    hectometer: (value: number) => toMetric(new Big(value * METRIC_RATIOS.hectometer)),
    kilometer: (value: number) => toMetric(new Big(value * METRIC_RATIOS.kilometer)),
    megameter: (value: number) => toMetric(new Big(value * METRIC_RATIOS.megameter)),
    gigameter: (value: number) => toMetric(new Big(value * METRIC_RATIOS.gigameter)),
    terameter: (value: number) => toMetric(new Big(value * METRIC_RATIOS.terameter)),
    petameter: (value: number) => toMetric(new Big(value * METRIC_RATIOS.petameter)),
    exameter: (value: number) => toMetric(new Big(value * METRIC_RATIOS.exameter)),

    fm: function(value: number) { return this.femtometer(value).toFemtometer(); },
    pm: function(value: number) { return this.picometer(value).toPicometer(); },
    nm: function(value: number) { return this.nanometer(value).toNanometer(); },
    um: function(value: number) { return this.micrometer(value).toMicrometer(); },
    mm: function(value: number) { return this.millimeter(value).toMillimeter(); },
    cm: function(value: number) { return this.centimeter(value).toCentimeter(); },
    dm: function(value: number) { return this.decimeter(value).toDecimeter(); },
    Dm: function(value: number) { return this.decimeter(value).toDecameter(); },
    m: function(value: number) { return this.meter(value).toMeter(); },
    hm: function(value: number) { return this.hectometer(value).toHectometer(); },
    km: function(value: number) { return this.kilometer(value).toKilometer(); },
    Mm: function(value: number) { return this.megameter(value).toMegameter(); },
    Gm: function(value: number) { return this.gigameter(value).toGigameter(); },
    Tm: function(value: number) { return this.terameter(value).toTerameter(); },
    Pm: function(value: number) { return this.petameter(value).toPetameter(); },
    Em: function(value: number) { return this.exameter(value).toExameter(); },
};