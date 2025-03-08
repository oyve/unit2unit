import Metric from '../../src/volume/volume.metric';

describe('Metric Volume Conversions', () => {
    test('Cubic meter to all', () => {
        const value = Metric.cubicMeter(10);
        expect(value.toCubicDecimeter()).toBe(10000);
        expect(value.toCubicCentimeter()).toBe(10000000);
        expect(value.toCubicMillimeter()).toBe(10000000000);
        expect(value.toCubicKilometer()).toBe(1e-8);
        expect(value.toCubicHectometer()).toBe(0.00001);
        expect(value.toCubicDecameter()).toBe(0.01);
        expect(value.toLitre()).toBe(10000);
        expect(value.toDecilitre()).toBe(100000);
        expect(value.toCentilitre()).toBe(1000000);
        expect(value.toMillilitre()).toBe(10000000);
        expect(value.toHectolitre()).toBe(100);
        expect(value.toKilolitre()).toBe(10);
    });

    test('Cubic Decimeter to Cubic meter', () => {
        const value = Metric.cubicDecimeter(1e3);
        expect(value.toCubicMeter()).toBe(1);
    });

    test('Cubic Centimeter to Cubic meter', () => {
        const value = Metric.cubicCentimeter(1e6);
        expect(value.toCubicMeter()).toBe(1);
    });

    test('Cubic Millimeter to Cubic meter', () => {
        const value = Metric.cubicMillimeter(1e9);
        expect(value.toCubicMeter()).toBe(1);
    });

    test('Cubic Kilometer to Cubic meter', () => {
        const value = Metric.cubicKilometer(1e-9);
        expect(value.toCubicMeter()).toBe(1);
    });

    test('Cubic Hectometer to Cubic meter', () => {
        const value = Metric.cubicHectometer(1e-5);
        expect(value.toCubicMeter()).toBe(10);
    });

    test('Cubic Decameter to Cubic meter', () => {
        const value = Metric.cubicDecameter(0.001);
        expect(value.toCubicMeter()).toBe(1);
    });

    test('Litre to Cubic meter', () => {
        const value = Metric.litre(1e3);
        expect(value.toCubicMeter()).toBe(1);
    });

    test('Decilitre to Cubic meter', () => {
        const value = Metric.decilitre(1e4);
        expect(value.toCubicMeter()).toBe(1);
    });

    test('Centilitre to Cubic meter', () => {
        const value = Metric.centilitre(1e5);
        expect(value.toCubicMeter()).toBe(1);
    });

    test('Millilitre to Cubic meter', () => {
        const value = Metric.millilitre(1e6);
        expect(value.toCubicMeter()).toBe(1);
    });

    test('Hectolitre to Cubic meter', () => {
        const value = Metric.hectolitre(10);
        expect(value.toCubicMeter()).toBe(1);
    });

    test('Kilolitre to Cubic meter', () => {
        const value = Metric.kilolitre(1);
        expect(value.toCubicMeter()).toBe(1);
    });
});