import Big from 'big.js';

import { toUK } from './length.UK';
import { toUS } from './length.US';
import { toNautical } from './length.nautical';
import { toSpecial } from './length.special';
import { toAstronomical } from './length.astronomical';
import UnitConverter from '../unitConverter';

export const METRIC_RATIOS = {
    attometer: 10 ** -18,
    femtometer: 10 ** -15,
    picometer: 10 ** -12,
    nanometer: 10 ** -9,
    micrometer: 10 ** -6,
    millimeter: 10 ** -3,
    centimeter: 10 ** -2,
    decimeter: 10 ** -1,
    decameter: 10 ** 1,
    meter: 1,
    hectometer: 10 ** 2,
    kilometer: 10 ** 3,
    megameter: 10 ** 6,
    gigameter: 10 ** 9,
    terameter: 10 ** 12,
    petameter: 10 ** 15,
    exameter: 10 ** 18
};

const converter = new UnitConverter(METRIC_RATIOS);

export const toMetric = (value: number | Big, ratio?: number) => {
    if(ratio !== undefined && ratio > 0) value = converter.fromRatio(value, ratio);

    return {
        ...converter.generateConversions(value),
        toUK: () => toUK(value, 3.28084),
        toUS: () => toUS(value, 3.28084),
        toSpecial: () => toSpecial(value),
        toNautical: () => toNautical(value, 1 / 1852),
        toAstronomical: () => toAstronomical(value, 6.68459e-12),
    }
};

export default {
    from: (value: number | Big, unit: string) => converter.from(value, unit),

    attometer: (value: number | Big) => toMetric(converter.fromRatio(value, METRIC_RATIOS.attometer)),
    femtometer: (value: number | Big) => toMetric(converter.fromRatio(value, METRIC_RATIOS.femtometer)),
    picometer: (value: number | Big) => toMetric(converter.fromRatio(value, METRIC_RATIOS.picometer)),
    nanometer: (value: number | Big) => toMetric(converter.fromRatio(value, METRIC_RATIOS.nanometer)),
    micrometer: (value: number | Big) => toMetric(converter.fromRatio(value, METRIC_RATIOS.micrometer)),
    millimeter: (value: number | Big) => toMetric(converter.fromRatio(value, METRIC_RATIOS.millimeter)),
    centimeter: (value: number | Big) => toMetric(converter.fromRatio(value, METRIC_RATIOS.centimeter)),
    decimeter: (value: number | Big) => toMetric(converter.fromRatio(value, METRIC_RATIOS.decimeter)),
    decameter: (value: number | Big) => toMetric(converter.fromRatio(value, METRIC_RATIOS.decameter)),
    meter: (value: number | Big) => toMetric(value),
    hectometer: (value: number | Big) => toMetric(converter.fromRatio(value, METRIC_RATIOS.hectometer)),
    kilometer: (value: number | Big) => toMetric(converter.fromRatio(value, METRIC_RATIOS.kilometer)),
    megameter: (value: number | Big) => toMetric(converter.fromRatio(value, METRIC_RATIOS.megameter)),
    gigameter: (value: number | Big) => toMetric(converter.fromRatio(value, METRIC_RATIOS.gigameter)),
    terameter: (value: number | Big) => toMetric(converter.fromRatio(value, METRIC_RATIOS.terameter)),
    petameter: (value: number | Big) => toMetric(converter.fromRatio(value, METRIC_RATIOS.petameter)),
    exameter: (value: number | Big) => toMetric(converter.fromRatio(value, METRIC_RATIOS.exameter)),
};