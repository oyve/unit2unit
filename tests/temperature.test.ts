import temperature from '../src/temperature';

describe('Temperature Conversion', () => {
    test('Kelvin to all', () => {
        const kelvin = temperature.kelvin(350);
        expect(kelvin.toCelsius()).toBe(76.85000000000002);
        expect(kelvin.toFahrenheit()).toBe(170.32999999999998);
        expect(kelvin.toDelisle()).toBe(34.724999999999966);
        expect(kelvin.toNewton()).toBe(25.360500000000005);
        expect(kelvin.toRankine()).toBe(630);
        expect(kelvin.toRéaumur()).toBe(61.48000000000002);
        expect(kelvin.toRømer()).toBe(47.84625000000001);
    });

    test('Celcius to all', () => {
        const celcius = temperature.celsius(50);
        expect(celcius.toKelvin()).toBe(323.15);
        expect(celcius.toFahrenheit()).toBe(121.99999999999994);
        expect(celcius.toDelisle()).toBe(75);
        expect(celcius.toNewton()).toBe(16.5);
        expect(celcius.toRankine()).toBe(581.67);
        expect(celcius.toRéaumur()).toBe(40);
        expect(celcius.toRømer()).toBe(33.75);
    });

    test('Fahrenheit to all', () => {
        const fahrenheit = temperature.fahrenheit(212);
        expect(fahrenheit.toKelvin()).toBe(373.15000000000003);
        expect(fahrenheit.toCelsius()).toBe(100.00000000000006);
        expect(fahrenheit.toDelisle()).toBe(-8.526512829121202e-14);
        expect(fahrenheit.toNewton()).toBe(33.00000000000002);
        expect(fahrenheit.toRankine()).toBe(671.6700000000001);
        expect(fahrenheit.toRéaumur()).toBe(80.00000000000004);
        expect(fahrenheit.toRømer()).toBe(60.000000000000036);
    });

    test('Delisle to all', () => {
        const delisle = temperature.delisle(150);
        expect(delisle.toKelvin()).toBe(273.15);
        expect(delisle.toCelsius()).toBe(0);
        expect(delisle.toFahrenheit()).toBe(31.999999999999943);
        expect(delisle.toNewton()).toBe(0);
        expect(delisle.toRankine()).toBe(491.66999999999996);
        expect(delisle.toRéaumur()).toBe(0);
        expect(delisle.toRømer()).toBe(7.5);
    });

    test('Newton to all', () => {
        const newton = temperature.newton(20);
        expect(newton.toKelvin()).toBe(333.7560606060606);
        expect(newton.toCelsius()).toBe(60.60606060606062);
        expect(newton.toFahrenheit()).toBe(141.09090909090907);
        expect(newton.toDelisle()).toBe(59.090909090909065);
        expect(newton.toRankine()).toBe(600.7609090909091);
        expect(newton.toRéaumur()).toBe(48.4848484848485);
        expect(newton.toRømer()).toBe(39.31818181818183);
    });

    test('Rankine to all', () => {
        const rankine = temperature.rankine(500);
        expect(rankine.toKelvin()).toBe(277.77777777777777);
        expect(rankine.toCelsius()).toBe(4.627777777777794);
        expect(rankine.toFahrenheit()).toBe(40.329999999999984);
        expect(rankine.toDelisle()).toBe(143.0583333333333);
        expect(rankine.toNewton()).toBe(1.5271666666666721);
        expect(rankine.toRéaumur()).toBe(3.702222222222235);
        expect(rankine.toRømer()).toBe(9.929583333333342);
    });

    test('Réaumur to all', () => {
        const réaumur = temperature.réaumur(30);
        expect(réaumur.toKelvin()).toBe(310.65);
        expect(réaumur.toCelsius()).toBe(37.5);
        expect(réaumur.toFahrenheit()).toBe(99.49999999999994);
        expect(réaumur.toDelisle()).toBe(93.75);
        expect(réaumur.toNewton()).toBe(12.375);
        expect(réaumur.toRankine()).toBe(559.17);
        expect(réaumur.toRømer()).toBe(27.1875);
    });

    test('Rømer to all', () => {
        const rømer = temperature.rømer(25);
        expect(rømer.toKelvin()).toBe(306.4833333333333);
        expect(rømer.toCelsius()).toBe(33.333333333333314);
        expect(rømer.toFahrenheit()).toBe(91.99999999999983);
        expect(rømer.toDelisle()).toBe(100.00000000000003);
        expect(rømer.toNewton()).toBe(10.999999999999993);
        expect(rømer.toRankine()).toBe(551.6699999999998);
        expect(rømer.toRéaumur()).toBe(26.66666666666665);
    });
});
