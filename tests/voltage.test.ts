import voltage from '../src/voltage';

describe('Voltage Conversion', () => {
    test('From volt to all', () => {
        const from = voltage.volt(1000);

        expect(from.toKiloVolt()).toBe(1);
        expect(from.toMilliVolt()).toBe(1000000);
        expect(from.toMicroVolt()).toBe(1000000000);
        expect(from.toKiloVolt()).toBe(1);
        expect(from.toMegaVolt()).toBe(0.001);
    });

    test('From kilovolt to volt', () => {
        const from = voltage.kiloVolt(1);

        expect(from.toVolt()).toBe(1000);
    });
});
