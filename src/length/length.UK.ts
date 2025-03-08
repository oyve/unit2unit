import Big from 'big.js';

import { toMetric } from './length.metric';
import { toUS } from './length.US';
import { toNautical } from './length.nautical';
import { toSpecial } from './length.special';
import { toAstronomical } from './length.astronomical';
import { roundBig } from '../common';

export const UK_RATIOS = { //to the meter
	foot: 0.3048,
	mile: 1609.344,
	fathom: 1.8,
	inch: 0.0254,
	yard: 0.9144,
	chain: 20.1168
}

export const toUK = (value: Big) => {
	return {
		toInch: (decimalPlaces?: number): number => roundBig(value.div(UK_RATIOS.inch), decimalPlaces),
		toFoot: (decimalPlaces?: number): number => roundBig(value.div(UK_RATIOS.foot), decimalPlaces),
		toMile: (decimalPlaces?: number): number => roundBig(value.div(UK_RATIOS.mile), decimalPlaces),
		toFathom: (decimalPlaces?: number): number => roundBig(value.div(UK_RATIOS.fathom), decimalPlaces),
		toYard: (decimalPlaces?: number): number => roundBig(value.div(UK_RATIOS.yard), decimalPlaces),
		toChain: (decimalPlaces?: number): number => roundBig(value.div(UK_RATIOS.chain), decimalPlaces),

		ft: function(decimalPlaces?: number): number { return this.toFoot(decimalPlaces); },
		ftm: function(decimalPlaces?: number): number { return this.toFathom(decimalPlaces); },
		mi: function(decimalPlaces?: number): number { return this.toMile(decimalPlaces); },
		in: function(decimalPlaces?: number): number { return this.toInch(decimalPlaces); },
		yd: function(decimalPlaces?: number): number { return this.toYard(decimalPlaces); },
		ch: function(decimalPlaces?: number): number { return this.toChain(decimalPlaces); },

		toMetric: () => toMetric(value),
		toUS: () => toUS(value),
		toNautical: () => toNautical(value),
		toSpecial: () => toSpecial(value),
		toAstronomical: () => toAstronomical(value),
	};
};

export default {
	feet: (value: number) => toUK(new Big(value).times(UK_RATIOS.foot)),
	mile: (value: number) => toUK(new Big(value).times(UK_RATIOS.mile)),
	fathom: (value: number) => toUK(new Big(value).times(UK_RATIOS.fathom)),
	inch: (value: number) => toUK(new Big(value).times(UK_RATIOS.inch)),
	yard: (value: number) => toUK(new Big(value).times(UK_RATIOS.yard)),
	chain: (value: number) => toUK(new Big(value).times(UK_RATIOS.chain)),

	ft: function(value: number) { return this.feet(value); },
	mi: function(value: number) { return this.mile(value); },
	ftm: function(value: number) { return this.fathom(value); },
	in: function(value: number) { return this.inch(value); },
	yd: function(value: number) { return this.yard(value); },
	ch: function(value: number) { return this.chain(value); }
}