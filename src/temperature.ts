import Big from "big.js";
import { round } from "./common";

const to = (kelvin: number | Big) => { //kelvin
    return {
        toKelvin: (decimalPlaces?: number): number | Big => round(kelvin, decimalPlaces) || 0,
        toCelsius: (decimalPlaces?: number): number | Big => round(new Big(kelvin).minus(273.15), decimalPlaces) || 0,
        toFahrenheit: (decimalPlaces?: number): number | Big => round(new Big(kelvin).times(9/5).minus(459.67), decimalPlaces) || 0,
        toDelisle: (decimalPlaces?: number): number | Big => round(new Big(373.15).minus(kelvin).times(3/2), decimalPlaces) || 0,
        toNewton: (decimalPlaces?: number): number | Big => round(new Big(kelvin).minus(273.15).times(33/100), decimalPlaces) || 0,
        toRankine: (decimalPlaces?: number): number | Big => round(new Big(kelvin).times(9/5), decimalPlaces) || 0,
        toRéaumur: (decimalPlaces?: number): number | Big => round(new Big(kelvin).minus(273.15).times(4/5), decimalPlaces) || 0,
        toRømer: (decimalPlaces?: number): number | Big => round(new Big(kelvin).minus(273.15).times(21/40).plus(7.5), decimalPlaces) || 0,
    }
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
}
