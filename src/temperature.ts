'use strict'

const round = (value: number, decimalPlaces: number = 10) => {
    return Math.round(value * (10 ** decimalPlaces)) / (10 ** decimalPlaces);
}

const to = (kelvin: number) => { //kelvin
    
    let tos = {
        toKelvin: (decimalPlaces?: number): number => round(kelvin, decimalPlaces) || 0,
        toCelsius: (decimalPlaces?: number): number => round(kelvin - 273.15, decimalPlaces) || 0,
        toFahrenheit: (decimalPlaces?: number): number => round((kelvin * 9/5) - 459.67, decimalPlaces) || 0,
        toDelisle: (decimalPlaces?: number): number => round((373.15 - kelvin) * 3/2, decimalPlaces) || 0,
        toNewton: (decimalPlaces?: number): number => round((kelvin - 273.15) * 33/100, decimalPlaces) || 0,
        toRankine: (decimalPlaces?: number): number => round(kelvin * 9/5, decimalPlaces) || 0,
        toRéaumur: (decimalPlaces?: number): number => round((kelvin - 273.15) * 4/5, decimalPlaces) || 0,
        toRømer: (decimalPlaces?: number): number => round((kelvin - 273.15) * 21/40 + 7.5, decimalPlaces) || 0,

        toK: (decimalPlaces?: number): number => tos.toKelvin(decimalPlaces),
        toC: (decimalPlaces?: number): number => tos.toCelsius(decimalPlaces),
        toF: (decimalPlaces?: number): number => tos.toFahrenheit(decimalPlaces),
        toDe: (decimalPlaces?: number): number => tos.toDelisle(decimalPlaces),
        toN: (decimalPlaces?: number): number => tos.toNewton(decimalPlaces),
        toR: (decimalPlaces?: number): number => tos.toRankine(decimalPlaces),
        toRé: (decimalPlaces?: number): number => tos.toRéaumur(decimalPlaces),
        toRø: (decimalPlaces?: number): number => tos.toRømer(decimalPlaces)
    }
    return tos;
}

export default {
    kelvin: (value: number) => to(value),
    celsius: (value: number) => to(value + 273.15),
    fahrenheit: (value: number) => to((value + 459.67) * 5/9),
    delisle: (value: number) => to(373.15 - (value * 2/3)),
    newton: (value: number) => to(value * 100/33 + 273.15),
    rankine: (value: number) => to(value * 5/9),
    réaumur: (value: number) => to(value * 5/4 + 273.15),
    rømer: (value: number) => to((value - 7.5) * 40/21 + 273.15),

    K: function(value: number) { return this.kelvin(value); },
    C: function(value: number) { return this.celsius(value); },
    F: function(value: number) { return this.fahrenheit(value); },
    De: function(value: number) { return this.delisle(value); },
    N: function(value: number) { return this.newton(value); },
    R: function(value: number) { return this.rankine(value); },
    Ré: function(value: number) { return this.réaumur(value); },
    Rø: function(value: number) { return this.rømer(value); },
}
