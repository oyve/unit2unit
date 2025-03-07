import length from '../../src/length';

describe('SI Length Conversions', () => {
    test('SI meter to US cablelength', () => {
        const meter = length.SI.meter(1000);
        expect(meter.toUS().toCableLength()).toBe(4.556722076407116);
    });
});