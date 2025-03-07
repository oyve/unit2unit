import Big from 'big.js';

import UK, { toUK } from './length.UK';
import US, { toUS } from './length.US';
import Nautical, { toNautical } from './length.nautical';
import Special, { toSpecial } from './length.special';
import Astronomical, { toAstronomical } from './length.astronomical';
import { round } from '../common';

const SI_RATIOS: { [key: string]: number } = {
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

export const toSI = (value: number) => {
    return {
        toFemtometer: (decimalPlaces?: number): number => round(value / SI_RATIOS.femtometer, decimalPlaces),
        toPicometer: (decimalPlaces?: number): number => round(value / SI_RATIOS.picometer, decimalPlaces),
        toNanometer: (decimalPlaces?: number): number => round(value / SI_RATIOS.nanometer, decimalPlaces),
        toMicrometer: (decimalPlaces?: number): number => round(value / SI_RATIOS.micrometer, decimalPlaces),
        toMillimeter: (decimalPlaces?: number): number => round(value / SI_RATIOS.millimeter, decimalPlaces),
        toCentimeter: (decimalPlaces?: number): number => round(value / SI_RATIOS.centimeter, decimalPlaces),
        toDecimeter: (decimalPlaces?: number): number => round(value / SI_RATIOS.decimeter, decimalPlaces),
        toMeter: (decimalPlaces?: number): number => round(value, decimalPlaces),
        toHectometer: (decimalPlaces?: number): number => round(value / SI_RATIOS.hectometer, decimalPlaces),
        toKilometer: (decimalPlaces?: number): number => round(value / SI_RATIOS.kilometer, decimalPlaces),
        toMegameter: (decimalPlaces?: number): number => round(value / SI_RATIOS.megameter, decimalPlaces),
        toGigameter: (decimalPlaces?: number): number => round(value / SI_RATIOS.gigameter, decimalPlaces),
        toTerameter: (decimalPlaces?: number): number => round(value / SI_RATIOS.terameter, decimalPlaces),
        toPetameter: (decimalPlaces?: number): number => round(value / SI_RATIOS.petameter, decimalPlaces),
        toExameter: (decimalPlaces?: number): number => round(value / SI_RATIOS.exameter, decimalPlaces),

        fm: function(decimalPlaces?: number) { return this.toFemtometer(decimalPlaces); },
        pm: function(decimalPlaces?: number) { return this.toPicometer(decimalPlaces); },
        nm: function(decimalPlaces?: number) { return this.toNanometer(decimalPlaces); },
        um: function(decimalPlaces?: number) { return this.toMicrometer(decimalPlaces); },
        mm: function(decimalPlaces?: number) { return this.toMillimeter(decimalPlaces); },
        cm: function(decimalPlaces?: number) { return this.toCentimeter(decimalPlaces); },
        dm: function(decimalPlaces?: number) { return this.toDecimeter(decimalPlaces); },
        m: function(decimalPlaces?: number) { return this.toMeter(decimalPlaces); },
        hm: function(decimalPlaces?: number) { return this.toHectometer(decimalPlaces); },
        km: function(decimalPlaces?: number) { return this.toKilometer(decimalPlaces); },
        Mm: function(decimalPlaces?: number) { return this.toMegameter(decimalPlaces); },
        Gm: function(decimalPlaces?: number) { return this.toGigameter(decimalPlaces); },
        Tm: function(decimalPlaces?: number) { return this.toTerameter(decimalPlaces); },
        Pm: function(decimalPlaces?: number) { return this.toPetameter(decimalPlaces); },
        Em: function(decimalPlaces?: number) { return this.toExameter(decimalPlaces); },

        toUK: () => toUK(value),
        toUS: () => toUS(value),
        toNautical: () => toNautical(value),
        toSpecial: () => toSpecial(value),
        toAstronomical: () => toAstronomical(new Big(value)),
    };
};

export default {
    femtometer: (value: number) => toSI(value * SI_RATIOS.femtometer),
    picometer: (value: number) => toSI(value * SI_RATIOS.picometer),
    nanometer: (value: number) => toSI(value * SI_RATIOS.nanometer),
    micrometer: (value: number) => toSI(value * SI_RATIOS.micrometer),
    millimeter: (value: number) => toSI(value * SI_RATIOS.millimeter),
    centimeter: (value: number) => toSI(value * SI_RATIOS.centimeter),
    decimeter: (value: number) => toSI(value * SI_RATIOS.decimeter),
    meter: (value: number) => toSI(value),
    hectometer: (value: number) => toSI(value * SI_RATIOS.hectometer),
    kilometer: (value: number) => toSI(value * SI_RATIOS.kilometer),
    megameter: (value: number) => toSI(value * SI_RATIOS.megameter),
    gigameter: (value: number) => toSI(value * SI_RATIOS.gigameter),
    terameter: (value: number) => toSI(value * SI_RATIOS.terameter),
    petameter: (value: number) => toSI(value * SI_RATIOS.petameter),
    exameter: (value: number) => toSI(value * SI_RATIOS.exameter),

    fm: function(value: number) { return this.femtometer(value).toFemtometer(); },
    pm: function(value: number) { return this.picometer(value).toPicometer(); },
    nm: function(value: number) { return this.nanometer(value).toNanometer(); },
    um: function(value: number) { return this.micrometer(value).toMicrometer(); },
    mm: function(value: number) { return this.millimeter(value).toMillimeter(); },
    cm: function(value: number) { return this.centimeter(value).toCentimeter(); },
    dm: function(value: number) { return this.decimeter(value).toDecimeter(); },
    m: function(value: number) { return this.meter(value).toMeter(); },
    hm: function(value: number) { return this.hectometer(value).toHectometer(); },
    km: function(value: number) { return this.kilometer(value).toKilometer(); },
    Mm: function(value: number) { return this.megameter(value).toMegameter(); },
    Gm: function(value: number) { return this.gigameter(value).toGigameter(); },
    Tm: function(value: number) { return this.terameter(value).toTerameter(); },
    Pm: function(value: number) { return this.petameter(value).toPetameter(); },
    Em: function(value: number) { return this.exameter(value).toExameter(); },
}