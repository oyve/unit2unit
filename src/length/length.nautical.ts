import Big from 'big.js';

import { toUK } from './length.UK';
import { toUS } from './length.US';
import { toAstronomical } from "./length.astronomical";
import { toSpecial } from './length.special';
import { toMetric } from './length.metric';
import { roundBig } from '../common';

const NAUTICAL_RATIOS: { [key: string]: number } = { //to the meter
	foot: 0.3048, //equals UK foot
	mile: 1852,
	cableLength: 185.3184,
	fathom: 1.8, //equals UK fathom
	league: 5556,
	nauticalLeague: 5556,
	nauticalMile: 1852
};

export const toNautical = (value: Big) => {
	return {
		toFoot: (decimalPlaces?: number) => roundBig(value.times(NAUTICAL_RATIOS.foot), decimalPlaces),
		toMile: (decimalPlaces?: number) => roundBig(value.times(NAUTICAL_RATIOS.mile), decimalPlaces),
		toCableLength: (decimalPlaces?: number) => roundBig(value.times(NAUTICAL_RATIOS.cableLength), decimalPlaces),
		toFathom: (decimalPlaces?: number) => roundBig(value.div(NAUTICAL_RATIOS.fathom), decimalPlaces),
		toLeague: (decimalPlaces?: number) => roundBig(value.times(NAUTICAL_RATIOS.league), decimalPlaces),
		toNauticalLeague: (decimalPlaces?: number) => roundBig(value.times(NAUTICAL_RATIOS.nauticalLeague), decimalPlaces),
		toNauticalMile: (decimalPlaces?: number) => roundBig(value.times(NAUTICAL_RATIOS.nauticalMile), decimalPlaces),

		ft: function(decimalPlaces?: number) { return this.toFoot(decimalPlaces); },
		mi: function(decimalPlaces?: number) { return this.toMile(decimalPlaces); },
		cb: function(decimalPlaces?: number) { return this.toCableLength(decimalPlaces); },
		ftm: function(decimalPlaces?: number) { return this.toFathom(decimalPlaces); },
		lg: function(decimalPlaces?: number) { return this.toLeague(decimalPlaces); },
		nlg: function(decimalPlaces?: number) { return this.toNauticalLeague(decimalPlaces); },
		nmi: function(decimalPlaces?: number) { return this.toNauticalMile(decimalPlaces); },

		toMetric: () => toMetric(value),
		toUK: () => toUK(value),
		toUS: () => toUS(value),
		toAstronomical: () => toAstronomical(value),
		toSpecial: () => toSpecial(value),
	};
};


export default {
	foot: (value: number) => toNautical(new Big(value).times(NAUTICAL_RATIOS.foot)),
	mile: (value: number) => toNautical(new Big(value).times(NAUTICAL_RATIOS.mile)),
	cableLength: (value: number) => toNautical(new Big(value).div(NAUTICAL_RATIOS.cableLength)),
	fathom: (value: number) => toNautical(new Big(value).times(NAUTICAL_RATIOS.fathom)),
	league: (value: number) => toNautical(new Big(value).times(NAUTICAL_RATIOS.league)),
	nauticalLeague: (value: number) => toNautical(new Big(value).times(NAUTICAL_RATIOS.nauticalLeague)),
	nauticalMile: (value: number) => toNautical(new Big(value).times(NAUTICAL_RATIOS.nauticalMile)),

    ft: function(value: number) { return this.foot(value); },
	mi: function(value: number) { return this.mile(value); },
	cb: function(value: number) { return this.cableLength(value); },
	ftm: function(value: number) { return this.fathom(value); },
	lg: function(value: number) { return this.league(value); },
	nlg: function(value: number) { return this.nauticalLeague(value); },
	nmi: function(value: number) { return this.nauticalMile(value); },
};