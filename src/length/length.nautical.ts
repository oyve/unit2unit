import Big from 'big.js';

import UK, { toUK } from './length.UK';
import US, { toUS } from './length.US';
import Astronomical, { toAstronomical } from "./length.astronomical";
import Special, { toSpecial } from './length.special';
import SI, { toSI } from './length.SI';

const NAUTICAL_RATIOS: { [key: string]: number } = { //to the meter
	foot: 0.3048, //equals UK foot
	mile: 1852,
	cableLength: 185.3184,
	fathom: 1.8, //equals UK fathom
	league: 5556,
	nauticalLeague: 5556,
	nauticalMile: 1852
};

export const toNautical = (value: number) => {
	return {
		toFoot: () => (value * NAUTICAL_RATIOS.foot),
		toMile: () => (value * NAUTICAL_RATIOS.mile),
		toCableLength: () => (value * NAUTICAL_RATIOS.cableLength),
		toFathom: () => (value / NAUTICAL_RATIOS.fathom),
		toLeague: () => (value * NAUTICAL_RATIOS.league),
		toNauticalLeague: () => (value * NAUTICAL_RATIOS.nauticalLeague),
		toNauticalMile: () => (value * NAUTICAL_RATIOS.nauticalMile),

		ft: function() { return this.toFoot(); },
		mi: function() { return this.toMile(); },
		cb: function() { return this.toCableLength(); },
		ftm: function() { return this.toFathom(); },
		lg: function() { return this.toLeague(); },
		nlg: function() { return this.toNauticalLeague(); },
		nmi: function() { return this.toNauticalMile(); },

		toSI: () => toSI(value),
		toUK: () => toUK(value),
		toUS: () => toUS(value),
		toAstronomical: () => toAstronomical(new Big(value)),
		toSpecial: () => toSpecial(value),
	};
};


export default {
	foot: (value: number) => toNautical(value * NAUTICAL_RATIOS.foot),
	mile: (value: number) => toNautical(value * NAUTICAL_RATIOS.mile),
	cableLength: (value: number) => toNautical(value / NAUTICAL_RATIOS.cableLength),
	fathom: (value: number) => toNautical(value * NAUTICAL_RATIOS.fathom),
	league: (value: number) => toNautical(value * NAUTICAL_RATIOS.league),
	nauticalLeague: (value: number) => toNautical(value * NAUTICAL_RATIOS.nauticalLeague),
	nauticalMile: (value: number) => toNautical(value * NAUTICAL_RATIOS.nauticalMile),

    ft: function(value: number) { return this.foot(value); },
	mi: function(value: number) { return this.mile(value); },
	cb: function(value: number) { return this.cableLength(value); },
	ftm: function(value: number) { return this.fathom(value); },
	lg: function(value: number) { return this.league(value); },
	nlg: function(value: number) { return this.nauticalLeague(value); },
	nmi: function(value: number) { return this.nauticalMile(value); },
};