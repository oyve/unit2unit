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

    test('Meters per minute to meters per second', () => {
        const mpm = speed.meterPerMinute(600);
        expect(mpm.toMeterPerSecond()).toBe(10);
    });

    test('Meters per hour to meters per second', () => {
        const mph = speed.meterPerHour(36000);
        expect(mph.toMeterPerSecond()).toBe(10);
    });

    test('Centimeters per second to meters per second', () => {
        const cmps = speed.centimeterPerSecond(1000);
        expect(cmps.toMeterPerSecond()).toBe(10);
    });

    test('Centimeters per minute to meters per second', () => {
        const cmpm = speed.centimeterPerMinute(60000);
        expect(cmpm.toMeterPerSecond()).toBe(10);
    });

    test('Centimeters per hour to meters per second', () => {
        const cmph = speed.centimeterPerHour(3600000);
        expect(cmph.toMeterPerSecond()).toBe(10);
    });

    test('Millimeters per second to meters per second', () => {
        const mmps = speed.millimeterPerSecond(10000);
        expect(mmps.toMeterPerSecond()).toBe(10);
    });

    test('Millimeters per minute to meters per second', () => {
        const mmpm = speed.millimeterPerMinute(600000);
        expect(mmpm.toMeterPerSecond()).toBe(10);
    });

    test('Millimeters per hour to meters per second', () => {
        const mmph = speed.millimeterPerHour(36000000);
        expect(mmph.toMeterPerSecond()).toBe(10);
    });

    test('Feet per hour to meters per second', () => {
        const fph = speed.footPerHour(118109.77122137316);
        expect(fph.toMeterPerSecond()).toBe(10);
    });

    test('Feet per minute to meters per second', () => {
        const fpm = speed.footPerMinute(1968.503937007874);
        expect(fpm.toMeterPerSecond()).toBe(10);
    });

    test('Inches per hour to meters per second', () => {
        const iph = speed.inchPerHour(1417233.560090703);
        expect(iph.toMeterPerSecond()).toBe(10);
    });

    test('Inches per minute to meters per second', () => {
        const ipm = speed.inchPerMinute(23622.06584414633);
        expect(ipm.toMeterPerSecond()).toBe(10);
    });

    test('Inches per second to meters per second', () => {
        const ips = speed.inchPerSecond(393.7007874015748);
        expect(ips.toMeterPerSecond()).toBe(10);
    });

    test('Furlongs per fortnight to meters per second', () => {
        const fpf = speed.furlongPerFortnight(60128.85613870525);
        expect(fpf.toMeterPerSecond()).toBe(10);
    });

    test('Admiralty knots to meters per second', () => {
        const kn_adm = speed.knotAdmiralty(19.426038273180605);
        expect(kn_adm.toMeterPerSecond()).toBe(10);
    });

    test('Speed of light in vacuum to meters per second', () => {
        const c = speed.speedOfLightVacuum(3.3356409519815204e-8);
        expect(c.toMeterPerSecond()).toBe(10);
    });
});
