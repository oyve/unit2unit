import speed from '../src/speed';

describe('Speed Conversion', () => {
    test('Meters per second to all', () => {
        const mps = speed.meterPerSecond(10);
        expect(mps.toMeterPerMinute()).toBe(600);
        expect(mps.toMeterPerHour()).toBe(36000);
        expect(mps.toCentimeterPerSecond()).toBe(1000);
        expect(mps.toCentimeterPerMinute()).toBe(60000);
        expect(mps.toCentimeterPerHour()).toBe(3600000);
        expect(mps.toMillimeterPerSecond()).toBe(10000);
        expect(mps.toMillimeterPerMinute()).toBe(600000);
        expect(mps.toMillimeterPerHour()).toBe(36000000);
        expect(mps.toFootPerHour()).toBe(118109.77122137316);
        expect(mps.toFootPerMinute()).toBe(1968.503937007874);
        expect(mps.toFootPerSecond()).toBe(32.808398950131235);
        expect(mps.toInchPerHour()).toBe(1417233.560090703);
        expect(mps.toInchPerMinute()).toBe(23622.06584414633);
        expect(mps.toInchPerSecond()).toBe(393.7007874015748);
        expect(mps.toFurlongPerFortnight()).toBe(60128.85613870525);
        expect(mps.toKilometerPerHour()).toBe(35.99997120002304);
        expect(mps.toMilePerHour()).toBe(22.369362920544024);
        expect(mps.toMilePerMinute()).toBe(0.3728227153424004);
        expect(mps.toMilePerSecond()).toBe(0.006213727366498068);
        expect(mps.toKnot()).toBe(19.438461717893492);
        expect(mps.toKnotAdmiralty()).toBe(19.426038273180605);
        expect(mps.toSpeedOfLightVacuum()).toBe(3.3356409519815204e-8);
    });

    test('Kilometers per hour to all', () => {
        const kph = speed.kilometerPerHour(90);
        expect(kph.toMeterPerSecond()).toBe(25.000020000000003);
    });

    test('Miles per hour to all', () => {
        const mph = speed.milePerHour(100);
        expect(mph.toMeterPerSecond()).toBe(44.704);
    });

    test('Feet per second to all', () => {
        const fps = speed.footPerSecond(50);
        expect(fps.toMeterPerSecond()).toBe(15.24);
    });

    test('Knots to all', () => {
        const knots = speed.knot(20);
        expect(knots.toMeterPerSecond()).toBe(10.28888);
    });
});
