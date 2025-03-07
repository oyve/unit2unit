import Big from 'big.js';

import UK, { toUK } from './length.UK';
import US, { toUS } from './length.US';
import Nautical, { toNautical } from './length.nautical';
import Special, { toSpecial } from './length.special';
import Astronomical, { toAstronomical } from './length.astronomical';

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
        toFemtometer: () => value / SI_RATIOS.femtometer,
        toPicometer: () => value / SI_RATIOS.picometer,
        toNanometer: () => value / SI_RATIOS.nanometer,
        toMicrometer: () => value / SI_RATIOS.micrometer,
        toMillimeter: () => value / SI_RATIOS.millimeter,
        toCentimeter: () => value / SI_RATIOS.centimeter,
        toDecimeter: () => value / SI_RATIOS.decimeter,
        toMeter: () => value,
        toHectometer: () => value / SI_RATIOS.hectometer,
        toKilometer: () => value / SI_RATIOS.kilometer,
        toMegameter: () => value / SI_RATIOS.megameter,
        toGigameter: () => value / SI_RATIOS.gigameter,
        toTerameter: () => value / SI_RATIOS.terameter,
        toPetameter: () => value / SI_RATIOS.petameter,
        toExameter: () => value / SI_RATIOS.exameter,

        fm: function() { return this.toFemtometer(); },
        pm: function() { return this.toPicometer(); },
        nm: function() { return this.toNanometer(); },
        um: function() { return this.toMicrometer(); },
        mm: function() { return this.toMillimeter(); },
        cm: function() { return this.toCentimeter(); },
        dm: function() { return this.toDecimeter(); },
        m: function() { return this.toMeter(); },
        hm: function() { return this.toHectometer(); },
        km: function() { return this.toKilometer(); },
        Mm: function() { return this.toMegameter(); },
        Gm: function() { return this.toGigameter(); },
        Tm: function() { return this.toTerameter(); },
        Pm: function() { return this.toPetameter(); },
        Em: function() { return this.toExameter(); },

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

    fm: function(value: number) { return this.femtometer(value); },
    pm: function(value: number) { return this.picometer(value); },
    nm: function(value: number) { return this.nanometer(value); },
    um: function(value: number) { return this.micrometer(value); },
    mm: function(value: number) { return this.millimeter(value); },
    cm: function(value: number) { return this.centimeter(value); },
    dm: function(value: number) { return this.decimeter(value); },
    m: function(value: number) { return this.meter(value); },
    hm: function(value: number) { return this.hectometer(value); },
    km: function(value: number) { return this.kilometer(value); },
    Mm: function(value: number) { return this.megameter(value); },
    Gm: function(value: number) { return this.gigameter(value); },
    Tm: function(value: number) { return this.terameter(value); },
    Pm: function(value: number) { return this.petameter(value); },
    Em: function(value: number) { return this.exameter(value); },
}