import Big from 'big.js';
import { toUK } from './length.UK';
import { toUS } from './length.US';
import { toNautical } from './length.nautical';
import { toSpecial } from './length.special';
import { toMetric } from './length.metric';
import { toAstronomical } from './length.astronomical';
import UnitConverter from '../unitConverter';

const ATOMIC_RATIOS = { // to the Bohr radius
    planckLength: 1.616255e-35,
    fermi: 1e-15,
    bohrRadius: 1,
    angstrom: 1e-10, // Added angstrom
    electronRadius: 2.81794e-15, // Added classical electron radius
    comptonWavelength: 2.42631e-12 // Added Compton wavelength
};

const converter = new UnitConverter(ATOMIC_RATIOS);

export const toAtomic = (value: number | Big) => ({
    ...converter.createToMethods(value),
    toUK: () => toUK(value, 3.28084),
    toUS: () => toUS(value, 3.28084),
    toSpecial: () => toSpecial(value),
    toNautical: () => toNautical(value, 1 / 1852),
    toMetric: () => toMetric(value, 6.68459e-12),
    //toAstronomical: () => toAstronomical(value, 6.68459e-12) // Removed toAstronomical
});

export default {
    from: (value: number | Big, unit: string) => converter.from(value, unit),
    ...converter.createFromMethods(toAtomic)
};