import Big from 'big.js';

import { toUK } from './length.UK';
import { toUS } from './length.US';
import { toNautical } from './length.nautical';
import { toSpecial } from './length.special';
import { toMetric } from './length.metric';
import { toAstronomical } from './length.astronomical';
import { convertFrom } from '../common';
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
    ...converter.generateConversions(value),
    toUK: () => toUK(value, 3.28084),
    toUS: () => toUS(value, 3.28084),
    toSpecial: () => toSpecial(value),
    toNautical: () => toNautical(value, 1 / 1852),
    toMetric: () => toMetric(value, 6.68459e-12),
});

export default {
    from: (value: number | Big, unit: string) => converter.from(value, unit),
      
    planckLength: (value: number) => toAtomic(new Big(value * ATOMIC_RATIOS.planckLength)),
    fermi: (value: number) => toAtomic(new Big(value * ATOMIC_RATIOS.fermi)),
    bohrRadius: (value: number) => toAtomic(new Big(value * ATOMIC_RATIOS.bohrRadius)),
    angstrom: (value: number) => toAtomic(new Big(value * ATOMIC_RATIOS.angstrom)), // Added angstrom
    electronRadius: (value: number) => toAtomic(new Big(value * ATOMIC_RATIOS.electronRadius)), // Added classical electron radius
    comptonWavelength: (value: number) => toAtomic(new Big(value * ATOMIC_RATIOS.comptonWavelength)), // Added Compton wavelength
};