import metric from '../../src/speed/speed.metric';

describe('Speed Conversion', () => {
    test('Meters per second to all', () => {
        const mps = metric.meterPerSecond(10);
        expect(mps.toMeterPerMinute()).toBe(600);
        expect(mps.toMeterPerHour()).toBe(36000);
        expect(mps.toCentimeterPerSecond()).toBe(1000);
        expect(mps.toCentimeterPerMinute()).toBe(60000);
        expect(mps.toCentimeterPerHour()).toBe(3600000);
        expect(mps.toMillimeterPerSecond()).toBe(10000);
        expect(mps.toMillimeterPerMinute()).toBe(600000);
        expect(mps.toMillimeterPerHour()).toBe(36000000);
        expect(mps.toKilometerPerHour()).toBe(35.99997120002304);
        expect(mps.toSpeedOfLightVacuum()).toBe(3.3356409519815204e-8);
    });

    test('Kilometers per hour to all', () => {
        const kph = metric.kilometerPerHour(90);
        expect(kph.toMeterPerSecond()).toBe(25.000020000000003);
    });

    test('Meters per minute to meters per second', () => {
        const mpm = metric.meterPerMinute(600);
        expect(mpm.toMeterPerSecond()).toBe(10);
    });

    test('Meters per hour to meters per second', () => {
        const mph = metric.meterPerHour(36000);
        expect(mph.toMeterPerSecond()).toBe(10);
    });

    test('Centimeters per second to meters per second', () => {
        const cmps = metric.centimeterPerSecond(1000);
        expect(cmps.toMeterPerSecond()).toBe(10);
    });

    test('Centimeters per minute to meters per second', () => {
        const cmpm = metric.centimeterPerMinute(60000);
        expect(cmpm.toMeterPerSecond()).toBe(10);
    });

    test('Centimeters per hour to meters per second', () => {
        const cmph = metric.centimeterPerHour(3600000);
        expect(cmph.toMeterPerSecond()).toBe(10);
    });

    test('Millimeters per second to meters per second', () => {
        const mmps = metric.millimeterPerSecond(10000);
        expect(mmps.toMeterPerSecond()).toBe(10);
    });

    test('Millimeters per minute to meters per second', () => {
        const mmpm = metric.millimeterPerMinute(600000);
        expect(mmpm.toMeterPerSecond()).toBe(10);
    });

    test('Millimeters per hour to meters per second', () => {
        const mmph = metric.millimeterPerHour(36000000);
        expect(mmph.toMeterPerSecond()).toBe(10);
    });

    test('Speed of light in vacuum to meters per second', () => {
        const c = metric.speedOfLightVacuum(3.3356409519815204e-8);
        expect(c.toMeterPerSecond()).toBe(10);
    });
});
