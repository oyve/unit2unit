import Big from 'big.js';

import Metric, { toMetric } from './length.metric';
import { toUK } from './length.UK';
import { toUS } from './length.US';
import { toNautical } from './length.nautical';
import { toSpecial } from './length.special';
import { toAstronomical } from './length.astronomical';

const tos = (value: Big) => {
    return {
        am: function(decimalPlaces?: number) { return toMetric(value).toAttometer(decimalPlaces); },
        fm: function(decimalPlaces?: number) { return toMetric(value).toFemtometer(decimalPlaces); },
        pm: function(decimalPlaces?: number) { return toMetric(value).toPicometer(decimalPlaces); },
        nm: function(decimalPlaces?: number) { return toMetric(value).toNanometer(decimalPlaces); },
        um: function(decimalPlaces?: number) { return toMetric(value).toMicrometer(decimalPlaces); },
        mm: function(decimalPlaces?: number) { return toMetric(value).toMillimeter(decimalPlaces); },
        cm: function(decimalPlaces?: number) { return toMetric(value).toCentimeter(decimalPlaces); },
        dm: function(decimalPlaces?: number) { return toMetric(value).toDecimeter(decimalPlaces); },
        dam: function(decimalPlaces?: number) { return toMetric(value).toDecameter(decimalPlaces); },
        m: function(decimalPlaces?: number) { return toMetric(value).toMeter(decimalPlaces); },
        hm: function(decimalPlaces?: number) { return toMetric(value).toHectometer(decimalPlaces); },
        km: function(decimalPlaces?: number) { return toMetric(value).toKilometer(decimalPlaces); },
        Mm: function(decimalPlaces?: number) { return toMetric(value).toMegameter(decimalPlaces); },
        Gm: function(decimalPlaces?: number) { return toMetric(value).toGigameter(decimalPlaces); },
        Tm: function(decimalPlaces?: number) { return toMetric(value).toTerameter(decimalPlaces); },
        Pm: function(decimalPlaces?: number) { return toMetric(value).toPetameter(decimalPlaces); },
        Em: function(decimalPlaces?: number) { return toMetric(value).toExameter(decimalPlaces); },

        toUK: () => toUK(meterToFoot(value)),
        toUS: () => toUS(meterToFoot(value)),
        toNautical: () => toNautical(meterToNauticalMile(value)),
        toSpecial: () => toSpecial(value),
        toAstronomical: () => toAstronomical(meterToAstronomicalUnit(value)),
    };
};

const meterToNauticalMile = (meter: Big) => { return meter.times(1 / 1852); };
const meterToFoot = (meter: Big) => { return meter.times(3.28084); };
const meterToAstronomicalUnit = (meter: Big) => { return meter.times(6.68459e-12); };

export default {
    am: function(value: number) { return Metric.attometer(value); },
    fm: function(value: number) { return Metric.femtometer(value); },
    pm: function(value: number) { return Metric.picometer(value); },
    nm: function(value: number) { return Metric.nanometer(value); },
    um: function(value: number) { return Metric.micrometer(value); },
    mm: function(value: number) { return Metric.millimeter(value); },
    cm: function(value: number) { return Metric.centimeter(value); },
    dm: function(value: number) { return Metric.decimeter(value); },
    dam: function(value: number) { return Metric.decameter(value); },
    m: function(value: number) { return Metric.meter(value); },
    hm: function(value: number) { return Metric.hectometer(value); },
    km: function(value: number) { return Metric.kilometer(value); },
    Mm: function(value: number) { return Metric.megameter(value); },
    Gm: function(value: number) { return Metric.gigameter(value); },
    Tm: function(value: number) { return Metric.terameter(value); },
    Pm: function(value: number) { return Metric.petameter(value); },
    Em: function(value: number) { return Metric.exameter(value); },
};