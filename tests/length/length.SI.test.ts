import SI from '../../src/length/length.metric';

describe('SI Length Conversions', () => {
    test('test', () => {
        const meter = SI.meter(1000);
        expect(meter.toKilometer()).toBe(1);
    });

    test('UK', () => {
        const meter = SI.meter(1000);
        expect(meter.toUK().toFeet()).toBe(3280.839895013123);
    });

    test('UK2', () => {
        const km = SI.kilometer(2);
        expect(km.toUK().ft()).toBe(6561.679790026246);
    });
});

// describe('SI Length Conversions', () => {
//     const units = [
//         'femtometer', 'picometer', 'nanometer', 'micrometer', 'millimeter',
//         'centimeter', 'decimeter', 'meter', 'kilometer', 'megameter',
//         'gigameter', 'terameter', 'petameter'
//     ];

//     const values = {
//         femtometer: 1e15,
//         picometer: 1e12,
//         nanometer: 1e9,
//         micrometer: 1e6,
//         millimeter: 1e3,
//         centimeter: 1e2,
//         decimeter: 1e1,
//         meter: 1,
//         kilometer: 1e-3,
//         megameter: 1e-6,
//         gigameter: 1e-9,
//         terameter: 1e-12,
//         petameter: 1e-15
//     };

//     units.forEach(fromUnit => {
//         units.forEach(toUnit => {
//             it(`should convert ${fromUnit} to ${toUnit}`, () => {
//                 const value = 1;
//                 const expected = values[toUnit] / values[fromUnit];
//                 const result = lengthSI[fromUnit](value)[`to${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`]();
//                 expect(result).toBeCloseTo(expected);
//             });
//         });
//     });
// });
