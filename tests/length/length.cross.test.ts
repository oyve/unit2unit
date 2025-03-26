import length from '../../src/length';

describe('Metric to other', () => {
    test('Metric', () => {
        const value = length.Metric.meter(1852);

        //expect(length.Metric.from(1, 'kilometer').to('meter')).toBe(1000);
        expect(value.toUK().toMile()).toBe(1.150779484848485);
        expect(value.toUS().toMile()).toBe(1.150779484848485);
        expect(value.toNautical().toNauticalMile()).toBe(1);
        //expect(meter.toSpecial().to()).toBe(1);
        expect(value.toAstronomical().toAstronomicUnit()).toBe(1.237986068e-8);
    });
});