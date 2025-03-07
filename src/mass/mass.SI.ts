import UK, { toUK } from './mass.UK';
import US, { toUS } from './mass.US';

const SI_RATIOS: { [key: string]: number } = { // to the gram
    gram: 1,
    hektogram: 100,
    milligram: 0.001,
    kilogram: 1000,
    carat: 0.2,
    microgram: 0.000001,
    nanogram: 0.000000001,
    picogram: 0.000000000001,
    decagram: 10,
    centigram: 0.01,
    megagram: 1000000
};

export const toSI = (value: number) => {
    return {
        toGram: (): number => value,
        toKilogram: (): number => value / SI_RATIOS.kilogram,
        toHektogram: (): number => value / SI_RATIOS.hektogram,
        toMilligram: (): number => value / SI_RATIOS.milligram,
        toCarat: (): number => value / SI_RATIOS.carat,
        toMicrogram: (): number => value / SI_RATIOS.microgram,
        toNanogram: (): number => value / SI_RATIOS.nanogram,
        toPicogram: (): number => value / SI_RATIOS.picogram,
        toDecagram: (): number => value / SI_RATIOS.decagram,
        toCentigram: (): number => value / SI_RATIOS.centigram,
        toMegagram: (): number => value / SI_RATIOS.megagram,

        toUK: () => toUK(value),
        toUS: () => toUS(value),
    };
};

export default {
    milligram: (value: number) => to(value * SI_RATIOS.milligram),
    gram: (value: number) => to(value),
    kilogram: (value: number) => to(value * SI_RATIOS.kilogram),
    hektogram: (value: number) => to(value * SI_RATIOS.hektogram),
    carat: (value: number) => to(value * SI_RATIOS.carat),
    microgram: (value: number) => to(value * SI_RATIOS.microgram),
    nanogram: (value: number) => to(value * SI_RATIOS.nanogram),
    picogram: (value: number) => to(value * SI_RATIOS.picogram),
    decagram: (value: number) => to(value * SI_RATIOS.decagram),
    centigram: (value: number) => to(value * SI_RATIOS.centigram),
    megagram: (value: number) => to(value * SI_RATIOS.megagram),

    mg: function(value: number) { return this.milligram(value); },
    g: function(value: number) { return this.gram(value); },
    kg: function(value: number) { return this.kilogram(value); },
    hg: function(value: number) { return this.hektogram(value); },
    ct: function(value: number) { return this.carat(value); },
    µg: function(value: number) { return this.microgram(value); },
    ng: function(value: number) { return this.nanogram(value); },
    pg: function(value: number) { return this.picogram(value); },
    dag: function(value: number) { return this.decagram(value); },
    cg: function(value: number) { return this.centigram(value); },
    Mg: function(value: number) { return this.megagram(value); }
};
