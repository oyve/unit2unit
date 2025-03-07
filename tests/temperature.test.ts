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

    test('Celcius to all', () => {
        const celcius = temperature.celsius(50);
        expect(celcius.toKelvin()).toBe(323.15);
        expect(celcius.toFahrenheit()).toBe(122);
        expect(celcius.toDelisle()).toBe(75);
        expect(celcius.toNewton()).toBe(16.5);
        expect(celcius.toRankine()).toBe(581.67);
        expect(celcius.toRéaumur()).toBe(40);
        expect(celcius.toRømer()).toBe(33.75);
    });

    test('Fahrenheit to all', () => {
        const fahrenheit = temperature.fahrenheit(212);
        expect(fahrenheit.toKelvin()).toBe(373.15);
        expect(fahrenheit.toCelsius()).toBe(100);
        expect(fahrenheit.toDelisle()).toBe(0);
        expect(fahrenheit.toNewton()).toBe(33);
        expect(fahrenheit.toRankine()).toBe(671.67);
        expect(fahrenheit.toRéaumur()).toBe(80);
        expect(fahrenheit.toRømer()).toBe(60);
    });

    test('Delisle to all', () => {
        const delisle = temperature.delisle(150);
        expect(delisle.toKelvin()).toBe(273.15);
        expect(delisle.toCelsius()).toBe(0);
        expect(delisle.toFahrenheit()).toBe(32);
        expect(delisle.toNewton()).toBe(0);
        expect(delisle.toRankine()).toBe(491.67);
        expect(delisle.toRéaumur()).toBe(0);
        expect(delisle.toRømer()).toBe(7.5);
    });

    test('Newton to all', () => {
        const newton = temperature.newton(20);
        expect(newton.toKelvin()).toBe(333.7560606061);
        expect(newton.toCelsius()).toBe(60.6060606061);
        expect(newton.toFahrenheit()).toBe(141.0909090909);
        expect(newton.toDelisle()).toBe(59.0909090909);
        expect(newton.toRankine()).toBe(600.7609090909);
        expect(newton.toRéaumur()).toBe(48.4848484848);
        expect(newton.toRømer()).toBe(39.3181818182);
    });

    test('Rankine to all', () => {
        const rankine = temperature.rankine(500);
        expect(rankine.toKelvin()).toBe(277.7777777778);
        expect(rankine.toCelsius()).toBe(4.6277777778);
        expect(rankine.toFahrenheit()).toBe(40.33);
        expect(rankine.toDelisle()).toBe(143.0583333333);
        expect(rankine.toNewton()).toBe(1.5271666667);
        expect(rankine.toRéaumur()).toBe(3.7022222222);
        expect(rankine.toRømer()).toBe(9.9295833333);
    });

    test('Réaumur to all', () => {
        const réaumur = temperature.réaumur(30);
        expect(réaumur.toKelvin()).toBe(310.65);
        expect(réaumur.toCelsius()).toBe(37.5);
        expect(réaumur.toFahrenheit()).toBe(99.5);
        expect(réaumur.toDelisle()).toBe(93.75);
        expect(réaumur.toNewton()).toBe(12.375);
        expect(réaumur.toRankine()).toBe(559.17);
        expect(réaumur.toRømer()).toBe(27.1875);
    });

    test('Rømer to all', () => {
        const rømer = temperature.rømer(25);
        expect(rømer.toKelvin()).toBe(306.4833333333);
        expect(rømer.toCelsius()).toBe(33.3333333333);
        expect(rømer.toFahrenheit()).toBe(92);
        expect(rømer.toDelisle()).toBe(100);
        expect(rømer.toNewton()).toBe(11);
        expect(rømer.toRankine()).toBe(551.67);
        expect(rømer.toRéaumur()).toBe(26.6666666667);
    });
});
