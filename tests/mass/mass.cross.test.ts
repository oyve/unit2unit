import Metric from '../../src/mass/mass.metric';
import UK from '../../src/mass/mass.UK';
import US from '../../src/mass/mass.US';

describe('Metric to US', () => {
    test('Gram to UK and US grain', () => {
        const gram = Metric.gram(1000);
        expect(gram.toUK().toGrain()).toBe(15432.35835294143); // corrected value
        expect(gram.toUS().toGrain()).toBe(15432.35835294143); // corrected value
    });
});

describe('UK to Metric and US', () => {
    test('Grain to UK grain and Metric gram', () => {
        const grain = UK.grain(1000);
        expect(grain.toMetric().toGram()).toBe(64.79891); // corrected value
        expect(grain.toUS().toGrain()).toBe(1000); // corrected value
    });
});

describe('US to Metric and UK', () => {
    test('Grain to Metric gram and US grain', () => {
        const grain = US.grain(1000);
        expect(grain.toMetric().toGram()).toBe(64.79891); // corrected value
        expect(grain.toUK().toGrain()).toBe(1000); // corrected value
    });
});