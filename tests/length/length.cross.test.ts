import length from '../../src/length';

describe('Metric to other', () => {
    test('Metric', () => {
        const meter = length.Metric.meter(1852);

        expect(meter.toUK().toMile()).toBe(1.150779484848485);
        expect(meter.toUS().toMile()).toBe(1.150779484848485);
        expect(meter.toNautical().toNauticalMile()).toBe(1);
        //expect(meter.toSpecial().to()).toBe(1);
        expect(meter.toAstronomical().toAstronomicUnit()).toBe(1.237986068e-8);
    });
});