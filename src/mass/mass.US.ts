import SI, { toSI } from './mass.SI';
import UK, { toUK } from './mass.UK';

const SI_RATIOS: { [key: string]: number } = { //to the gram
    pound: 453.592,
    ounce: 28.3495,
    stone: 6350.29,
    grain: 0.0647989,
    hundredweight: 45359.2,
};

export const toUS = (value: number) => {
    return {
        toPound: (): number => value / SI_RATIOS.pound,
        toOunce: (): number => value / SI_RATIOS.ounce,
        toStone: (): number => value / SI_RATIOS.stone,
        toGrain: (): number => value / SI_RATIOS.grain,
        toHundredweight: (): number => value / SI_RATIOS.hundredweight,

        toSI: () => toSI(value),
        toUK: () => toUK(value),
    };
};

export default {
    pound: (value: number) => to(value * SI_RATIOS.pound),
    ounce: (value: number) => to(value / SI_RATIOS.ounce),
    stone: (value: number) => to(value / SI_RATIOS.stone),
    grain: (value: number) => to(value / SI_RATIOS.grain),
    hundredweight: (value: number) => to(value / SI_RATIOS.hundredweight),

    lb: function(value: number) { return this.pound(value); },
    oz: function(value: number) { return this.ounce(value); },
    st: function(value: number) { return this.stone(value); },
    gr: function(value: number) { return this.grain(value); },
    cwt: function(value: number) { return this.hundredweight(value); },
};
