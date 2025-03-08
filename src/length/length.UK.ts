import Big from 'big.js';

import { toMetric } from './length.metric';
import { toUS } from './length.US';
import { toNautical } from './length.nautical';
import { toSpecial } from './length.special';
import { toAstronomical } from './length.astronomical';

export const UK_RATIOS = { //to the meter
	foot: 0.3048,
	mile: 1609.344,
	fathom: 1.8,
	inch: 0.0254,
	yard: 0.9144,
	chain: 20.1168
}

export const toUK = (value: number) => {
	return {
		toInch: (): number => (value / UK_RATIOS.inch),
		toFoot: (): number => (value / UK_RATIOS.foot),
		toMile: (): number => (value / UK_RATIOS.mile),
		toFathom: (): number => (value / UK_RATIOS.fathom),
		toYard: (): number => (value / UK_RATIOS.yard),
		toChain: (): number => (value / UK_RATIOS.chain),

		ft: function(): number { return this.toFoot(); },
		ftm: function(): number { return this.toFathom(); },
		mi: function(): number { return this.toMile(); },
		in: function(): number { return this.toInch(); },
		yd: function(): number { return this.toYard(); },
		ch: function(): number { return this.toChain(); },

		toMetric: () => toMetric(value),
		toUS: () => toUS(value),
		toNautical: () => toNautical(value),
		toSpecial: () => toSpecial(value),
		toAstronomical: () => toAstronomical(new Big(value)),
	};
};

export default {
	feet: (value: number) => to(value * UK_RATIOS.foot),
	mile: (value: number) => to(value * UK_RATIOS.mile),
	fathom: (value: number) => to(value * UK_RATIOS.fathom),
	inch: (value: number) => to(value * UK_RATIOS.inch),
	yard: (value: number) => to(value * UK_RATIOS.yard),
	chain: (value: number) => to(value * UK_RATIOS.chain),

	ft: function(value: number) { return this.feet(value); },
	mi: function(value: number) { return this.mile(value); },
	ftm: function(value: number) { return this.fathom(value); },
	in: function(value: number) { return this.inch(value); },
	yd: function(value: number) { return this.yard(value); },
	ch: function(value: number) { return this.chain(value); }
}