import metric from '../../src/speed/speed.metric';

describe('Speed Conversion', () => {
    test('Meters per second to all', () => {
        const value = metric.meter(10).perHour();
        expect(value.toCentimeter().perHour()).toBe(1000);
    });

    test('Centimeters per hour to kilometer per hour', () => {
        const value = metric.centimeter(100).perHour();
        expect(value.toKilometer().perHour()).toBe(0.001);
    });
});