import SI, { toSI } from './mass.SI';
import US, { toUS } from './mass.US';

const SI_RATIOS: { [key: string]: number } = { //to the gram
    stone: 6350.29,
    hundredweight: 50802.34544, // UK hundredweight
    quarter: 12700.58636, // UK quarter
    ton: 1016046.9088, // UK ton
    pound: 453.592,
    ounce: 28.3495,
    grain: 0.0647989,
};

export const toUK = (value: number) => {
    return {
        toStone: (): number => value / SI_RATIOS.stone,
        toHundredweight: (): number => value / SI_RATIOS.hundredweight,
        toQuarter: (): number => value / SI_RATIOS.quarter,
        toTon: (): number => value / SI_RATIOS.ton,
        toPound: (): number => value / SI_RATIOS.pound,
        toOunce: (): number => value / SI_RATIOS.ounce,
        toGrain: (): number => value / SI_RATIOS.grain,

        toSI: () => toSI(value),
        toUS: () => toUS(value),
    };
};

export default {
    stone: (value: number) => to(value * SI_RATIOS.stone),
    hundredweight: (value: number) => to(value / SI_RATIOS.hundredweight),
    quarter: (value: number) => to(value / SI_RATIOS.quarter),
    ton: (value: number) => to(value / SI_RATIOS.ton),
    pound: (value: number) => to(value * SI_RATIOS.pound),
    ounce: (value: number) => to(value / SI_RATIOS.ounce),
    grain: (value: number) => to(value / SI_RATIOS.grain),

    st: function(value: number) { return this.stone(value); },
    cwt: function(value: number) { return this.hundredweight(value); },
    qr: function(value: number) { return this.quarter(value); },
    t: function(value: number) { return this.ton(value); },
    lb: function(value: number) { return this.pound(value); },
    oz: function(value: number) { return this.ounce(value); },
    gr: function(value: number) { return this.grain(value); },
};
