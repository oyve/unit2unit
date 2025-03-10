import Big from 'big.js';

import { toUK } from './length.UK';
import { toUS } from './length.US';
import { toNautical } from './length.nautical';
import { toSpecial } from './length.special';
import { toMetric } from './length.metric';
import { toAstronomical } from './length.astronomical';
import { convertTo, round } from '../common';

// Set the decimal places to a higher value
Big.DP = 40;

const ATOMIC_RATIOS: { [key: string]: number } = { // to the Bohr radius
    planckLength: 1.616255e-35,
    fermi: 1e-15,
    bohrRadius: 1,
    angstrom: 1e-10, // Added angstrom
    electronRadius: 2.81794e-15, // Added classical electron radius
    comptonWavelength: 2.42631e-12 // Added Compton wavelength
};

export const toAtomic = (value: number | Big) => {
    return {
        toPlanckLength: (decimalPlaces?: number): number | Big => round(convertTo(value, ATOMIC_RATIOS.planckLength), decimalPlaces),
        toFermi: (decimalPlaces?: number): number | Big => round(convertTo(value, ATOMIC_RATIOS.fermi), decimalPlaces),
        toBohrRadius: (decimalPlaces?: number): number | Big => round(convertTo(value, ATOMIC_RATIOS.bohrRadius), decimalPlaces),
        toAngstrom: (decimalPlaces?: number): number | Big => round(convertTo(value, ATOMIC_RATIOS.angstrom), decimalPlaces), // Added angstrom conversion
        toElectronRadius: (decimalPlaces?: number): number | Big => round(convertTo(value, ATOMIC_RATIOS.electronRadius), decimalPlaces), // Added classical electron radius conversion
        toComptonWavelength: (decimalPlaces?: number): number | Big => round(convertTo(value, ATOMIC_RATIOS.comptonWavelength), decimalPlaces), // Added Compton wavelength conversion

        pl: function(decimalPlaces?: number): number | Big { return this.toPlanckLength(decimalPlaces); },
        fm: function(decimalPlaces?: number): number | Big { return this.toFermi(decimalPlaces); },
        br: function(decimalPlaces?: number): number | Big { return this.toBohrRadius(decimalPlaces); },
        Å: function(decimalPlaces?: number): number | Big { return this.toAngstrom(decimalPlaces); }, // Added angstrom shorthand
        er: function(decimalPlaces?: number): number | Big { return this.toElectronRadius(decimalPlaces); }, // Added classical electron radius shorthand
        cw: function(decimalPlaces?: number): number | Big { return this.toComptonWavelength(decimalPlaces); }, // Added Compton wavelength shorthand

        toMetric: () => toMetric(value),
        toUK: () => toUK(value),
        toUS: () => toUS(value),
        toNautical: () => toNautical(value),
        toSpecial: () => toSpecial(value),
        toAstronomical: () => toAstronomical(value)
    };
};

export default {
    planckLength: (value: number) => toAtomic(new Big(value * ATOMIC_RATIOS.planckLength)),
    fermi: (value: number) => toAtomic(new Big(value * ATOMIC_RATIOS.fermi)),
    bohrRadius: (value: number) => toAtomic(new Big(value * ATOMIC_RATIOS.bohrRadius)),
    angstrom: (value: number) => toAtomic(new Big(value * ATOMIC_RATIOS.angstrom)), // Added angstrom
    electronRadius: (value: number) => toAtomic(new Big(value * ATOMIC_RATIOS.electronRadius)), // Added classical electron radius
    comptonWavelength: (value: number) => toAtomic(new Big(value * ATOMIC_RATIOS.comptonWavelength)), // Added Compton wavelength

    pl: function(value: number) { return this.planckLength(value); },
    fm: function(value: number) { return this.fermi(value); },
    br: function(value: number) { return this.bohrRadius(value); },
    Å: function(value: number) { return this.angstrom(value); }, // Added angstrom shorthand
    er: function(value: number) { return this.electronRadius(value); }, // Added classical electron radius shorthand
    cw: function(value: number) { return this.comptonWavelength(value); } // Added Compton wavelength shorthand
};