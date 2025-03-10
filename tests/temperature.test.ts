import temperature from '../src/temperature';

describe('Temperature Conversion', () => {
    test('Kelvin to all', () => {
        const kelvin = temperature.kelvin(350);
        expect(kelvin.toCelsius()).toBe(76.85);
        expect(kelvin.toFahrenheit()).toBe(170.33);
        expect(kelvin.toDelisle()).toBe(34.725);
        expect(kelvin.toNewton()).toBe(25.3605);
        expect(kelvin.toRankine()).toBe(630);
        expect(kelvin.toRéaumur()).toBe(61.48);
        expect(kelvin.toRømer()).toBe(47.84625);
    });

    test('Celcius to Kelvin', () => {
        const celcius = temperature.celsius(50);
        expect(celcius.toKelvin()).toBe(323.15);
    });

    test('Fahrenheit to Kelvin', () => {
        const fahrenheit = temperature.fahrenheit(212);
        expect(fahrenheit.toKelvin()).toBe(373.15000000000003);
    });

    test('Delisle to Kelvin', () => {
        const delisle = temperature.delisle(150);
        expect(delisle.toKelvin()).toBe(273.15);
    });

    test('Newton to Kelvin', () => {
        const newton = temperature.newton(20);
        expect(newton.toKelvin()).toBe(333.7560606060606);
    });

    test('Rankine to Kelvin', () => {
        const rankine = temperature.rankine(500);
        expect(rankine.toKelvin()).toBe(277.77777777777777);
    });

    test('Réaumur to Kelvin', () => {
        const réaumur = temperature.réaumur(30);
        expect(réaumur.toKelvin()).toBe(310.65);
    });

    test('Rømer to Kelvin', () => {
        const rømer = temperature.rømer(25);
        expect(rømer.toKelvin()).toBe(306.4833333333333);
    });
});
