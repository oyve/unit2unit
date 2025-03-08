import Metric from '../../src/length/length.metric';

describe('Metric Length Conversions', () => {
    test('test', () => {
        const meter = Metric.meter(1000);
        expect(meter.toAttometer()).toBe(1e21);
        expect(meter.toFemtometer()).toBe(1e18);
        expect(meter.toPicometer()).toBe(1e15);
        expect(meter.toNanometer()).toBe(1e12);
        expect(meter.toMicrometer()).toBe(1e9);
        expect(meter.toMillimeter()).toBe(1e6);
        expect(meter.toCentimeter()).toBe(1e5);
        expect(meter.toDecimeter()).toBe(1e4);
        expect(meter.toDecameter()).toBe(1e2);
        expect(meter.toHectometer()).toBe(1e1);
        expect(meter.toKilometer()).toBe(1);
        expect(meter.toMegameter()).toBe(0.001);
        expect(meter.toGigameter()).toBe(0.000001);
        expect(meter.toTerameter()).toBe(0.000000001);
        expect(meter.toPetameter()).toBe(0.000000000001);
        expect(meter.toExameter()).toBe(0.000000000000001);
    });
});

describe('Attometer Length Conversions', () => {
    test('test', () => {
        const meter = Metric.attometer(1e21);
        expect(meter.toMeter(0)).toBe(1000);
    });
});

describe('Femtometer Length Conversions', () => {
    test('test', () => {
        const meter = Metric.femtometer(1e18);
        expect(meter.toMeter(0)).toBe(1000);
    });
});

describe('Picometer Length Conversions', () => {
    test('test', () => {
        const meter = Metric.picometer(1e15);
        expect(meter.toMeter(0)).toBe(1000);
    });
});

describe('Nanometer Length Conversions', () => {
    test('test', () => {
        const meter = Metric.nanometer(1e12);
        expect(meter.toMeter(0)).toBe(1000);
    });
});

describe('Micrometer Length Conversions', () => {
    test('test', () => {
        const meter = Metric.micrometer(1e9);
        expect(meter.toMeter(0)).toBe(1000);
    });
});

describe('Millimeter Length Conversions', () => {
    test('test', () => {
        const meter = Metric.millimeter(1e6);
        expect(meter.toMeter(0)).toBe(1000);
    });
});

describe('Centimeter Length Conversions', () => {
    test('test', () => {
        const meter = Metric.centimeter(1e5);
        expect(meter.toMeter(0)).toBe(1000);
    });
});

describe('Decimeter Length Conversions', () => {
    test('test', () => {
        const meter = Metric.decimeter(1e4);
        expect(meter.toMeter(0)).toBe(1000);
    });
});

describe('Decameter Length Conversions', () => {
    test('test', () => {
        const meter = Metric.decameter(1e2);
        expect(meter.toMeter(0)).toBe(1000);
    });
});

describe('Hectometer Length Conversions', () => {
    test('test', () => {
        const meter = Metric.hectometer(1e1);
        expect(meter.toMeter(0)).toBe(1000);
    });
});

describe('Kilometer Length Conversions', () => {
    test('test', () => {
        const meter = Metric.kilometer(1);
        expect(meter.toMeter(0)).toBe(1000);
    });
});

describe('Megameter Length Conversions', () => {
    test('test', () => {
        const meter = Metric.megameter(0.001);
        expect(meter.toMeter(0)).toBe(1000);
    });
});

describe('Gigameter Length Conversions', () => {
    test('test', () => {
        const meter = Metric.gigameter(0.000001);
        expect(meter.toMeter(0)).toBe(1000);
    });
});

describe('Terameter Length Conversions', () => {
    test('test', () => {
        const meter = Metric.terameter(0.000000001);
        expect(meter.toMeter(0)).toBe(1000);
    });
});

describe('Petameter Length Conversions', () => {
    test('test', () => {
        const meter = Metric.petameter(0.000000000001);
        expect(meter.toMeter(0)).toBe(1000);
    });
});

describe('Exameter Length Conversions', () => {
    test('test', () => {
        const meter = Metric.exameter(0.000000000000001);
        expect(meter.toMeter(0)).toBe(1000);
    });
});