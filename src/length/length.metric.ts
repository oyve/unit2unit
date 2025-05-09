import Big from 'big.js';

import { toUK } from './length.UK';
import { toUS } from './length.US';
import { toNautical } from './length.nautical';
import { toSpecial } from './length.special';
import { toAstronomical } from './length.astronomical';
import UnitConverter from '../unitConverter';

export const METRIC_RATIOS_FULL = [
    { name: "Attometer", symbol: "am", toBase: 10 ** -18 },
    { name: "Femtometer", symbol: "fm", toBase: 10 ** -15 },
    { name: "Picometer", symbol: "pm", toBase: 10 ** -12 },
    { name: "Nanometer", symbol: "nm", toBase: 10 ** -9 },
    { name: "Micrometer", symbol: "µm", toBase: 10 ** -6 },
    { name: "Millimeter", symbol: "mm", toBase: 10 ** -3 },
    { name: "Centimeter", symbol: "cm", toBase: 10 ** -2 },
    { name: "Decimeter", symbol: "dm", toBase: 10 ** -1 },
    { name: "Meter", symbol: "m", toBase: 1 },
    { name: "Decameter", symbol: "dam", toBase: 10 ** 1 },
    { name: "Hectometer", symbol: "hm", toBase: 10 ** 2 },
    { name: "Kilometer", symbol: "km", toBase: 10 ** 3 },
    { name: "Megameter", symbol: "Mm", toBase: 10 ** 6 },
    { name: "Gigameter", symbol: "Gm", toBase: 10 ** 9 },
    { name: "Terameter", symbol: "Tm", toBase: 10 ** 12 },
    { name: "Petameter", symbol: "Pm", toBase: 10 ** 15 },
    { name: "Exameter", symbol: "Em", toBase: 10 ** 18 },
] as const;

export const METRIC_RATIOS = METRIC_RATIOS_FULL.reduce((acc, unit) => {
    acc[unit.name.toLowerCase() as keyof typeof acc] = unit.toBase;
    return acc;
}, {} as Record<Lowercase<(typeof METRIC_RATIOS_FULL)[number]["name"]>, number>);


// export const METRIC_RATIOS = {
//     attometer: 10 ** -18,
//     femtometer: 10 ** -15,
//     picometer: 10 ** -12,
//     nanometer: 10 ** -9,
//     micrometer: 10 ** -6,
//     millimeter: 10 ** -3,
//     centimeter: 10 ** -2,
//     decimeter: 10 ** -1,
//     decameter: 10 ** 1,
//     meter: 1,
//     hectometer: 10 ** 2,
//     kilometer: 10 ** 3,
//     megameter: 10 ** 6,
//     gigameter: 10 ** 9,
//     terameter: 10 ** 12,
//     petameter: 10 ** 15,
//     exameter: 10 ** 18
// };

const converter = new UnitConverter(METRIC_RATIOS);

export const toMetric = (value: number | Big, ratio?: number) => {
    if(ratio !== undefined && ratio > 0) value = converter.fromRatio(value, ratio);

    const toMethods = converter.createToMethods(value);

    return {
        ...toMethods,
        toUK: () => toUK(value, 3.28084),
        toUS: () => toUS(value, 3.28084),
        toSpecial: () => toSpecial(value),
        toNautical: () => toNautical(value, 1 / 1852),
        toAstronomical: () => toAstronomical(value, 6.68459e-12),
    }
};

///------
// /**
//  * @typedef {Object} MetricConverter
//  * @property {function(number): Object} fromMeter - Convert from meters.
//  * @property {function(number): Object} fromKilometer - Convert from kilometers.
//  * @property {function(number): Object} fromCentimeter - Convert from centimeters.
//  * // Add other methods as needed
//  */

// /** @type {MetricConverter} */
// const metricConverter = {
//     from: (value: number | Big, unit: string) => converter.from(value, unit),
//     ...converter.createFromMethods(toMetric),
// };
//export default metricConverter;
///------
///------
type MetricUnits = Lowercase<(typeof METRIC_RATIOS_FULL)[number]["name"]>;

type FromMethods = {
    [K in MetricUnits as `${Lowercase<K>}`]: (value: number | Big) => ReturnType<typeof toMetric>;
};

const fromMethods = converter.createFromMethods(toMetric) as unknown as FromMethods;

const metricConverter = {
    from: (value: number | Big, unit: string) => converter.from(value, unit),
    ...fromMethods,
};
export default metricConverter;
///------
///------
//const fromMethods = converter.createFromMethods(toMetric)

// export default {
//     from: (value: number | Big, unit: string) => converter.from(value, unit),
//     ...fromMethods
// };