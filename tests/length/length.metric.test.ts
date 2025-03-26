import Big from 'big.js';
 import Metric from '../../src/length/length.metric';

describe('Metric Length Conversions', () => {
    test('test', () => {
        const meter = Metric.meter(new Big(1000));
        
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

describe('To the meter', () => {
    test('Attometer', () => {
        const meter = Metric.attometer(1e21);
        expect(meter.toMeter(0)).toBe(1000);
    });
    test('Femtometer', () => {
        const meter = Metric.femtometer(1e18);
        expect(meter.toMeter(0)).toBe(1000);
    });
    test('Picometer', () => {
        const meter = Metric.picometer(1e15);
        expect(meter.toMeter(0)).toBe(1000);
    });
    test('Nanometer', () => {
        const meter = Metric.nanometer(1e12);
        expect(meter.toMeter(0)).toBe(1000);
    });
    test('Micrometer', () => {
        const meter = Metric.micrometer(1e9);
        expect(meter.toMeter(0)).toBe(1000);
    });
    test('Millimeter', () => {
        const meter = Metric.millimeter(1e6);
        expect(meter.toMeter(0)).toBe(1000);
    });
    test('Centimeter', () => {
        const meter = Metric.centimeter(1e5);
        expect(meter.toMeter(0)).toBe(1000);
    });
    test('Decimeter', () => {
        const meter = Metric.decimeter(1e4);
        expect(meter.toMeter(0)).toBe(1000);
    });
    test('Decameter', () => {
        const meter = Metric.decameter(1e2);
        expect(meter.toMeter(0)).toBe(1000);
    });
    test('Hectometer', () => {
        const meter = Metric.hectometer(1e1);
        expect(meter.toMeter(0)).toBe(1000);
    });
    test('Kilometer', () => {
        const meter = Metric.kilometer(1);
        expect(meter.toMeter(0)).toBe(1000);
    });
    test('Megameter', () => {
        const meter = Metric.megameter(0.001);
        expect(meter.toMeter(0)).toBe(1000);
    });
    test('Gigameter', () => {
        const meter = Metric.gigameter(0.000001);
        expect(meter.toMeter(0)).toBe(1000);
    });
    test('Terameter', () => {
        const meter = Metric.terameter(0.000000001);
        expect(meter.toMeter(0)).toBe(1000);
    });
    test('Petameter', () => {
        const meter = Metric.petameter(0.000000000001);
        expect(meter.toMeter(0)).toBe(1000);
    });
    test('Exameter', () => {
        const meter = Metric.exameter(0.000000000000001);
        expect(meter.toMeter(0)).toBe(1000);
    });
});