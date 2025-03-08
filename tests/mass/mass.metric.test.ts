import Metric from '../../src/mass/mass.metric';

describe('Metric Mass Conversions', () => {
    test('test', () => {
        const gram = Metric.gram(1000);
        expect(gram.toMilligram()).toBe(1e6);
        expect(gram.toCentigram()).toBe(1e5);
        expect(gram.toDecigram()).toBe(1e4);
        expect(gram.toDecagram()).toBe(1e2);
        expect(gram.toHektogram()).toBe(1e1);
        expect(gram.toKilogram()).toBe(1);
        expect(gram.toMegagram()).toBe(0.001);
    });
});

describe('Milligram Mass Conversions', () => {
    test('test', () => {
        const gram = Metric.milligram(1e6);
        expect(gram.toGram(0)).toBe(1000);
    });
});

describe('Centigram Mass Conversions', () => {
    test('test', () => {
        const gram = Metric.centigram(1e5);
        expect(gram.toGram(0)).toBe(1000);
    });
});

describe('Decigram Mass Conversions', () => {
    test('test', () => {
        const gram = Metric.decigram(1e4);
        expect(gram.toGram(0)).toBe(1000);
    });
});

describe('Decagram Mass Conversions', () => {
    test('test', () => {
        const gram = Metric.decagram(1e2);
        expect(gram.toGram(0)).toBe(1000);
    });
});

describe('Hektogram Mass Conversions', () => {
    test('test', () => {
        const gram = Metric.hektogram(1e1);
        expect(gram.toGram(0)).toBe(1000);
    });
});

describe('Kilogram Mass Conversions', () => {
    test('test', () => {
        const gram = Metric.kilogram(1);
        expect(gram.toGram(0)).toBe(1000);
    });
});

describe('Megagram Mass Conversions', () => {
    test('test', () => {
        const gram = Metric.megagram(0.001);
        expect(gram.toGram(0)).toBe(1000);
    });
});
