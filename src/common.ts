import Big from "big.js";

// export const round = (value: number, decimalPlaces?: number): number => {
//     if (decimalPlaces === undefined) {
//         return value;
//     }
    
//     return parseFloat(new Big(value).toFixed(decimalPlaces));
// }

// export const roundBig = (value: Big, decimalPlaces?: number): number => {
//     if (decimalPlaces === undefined) {
//         return parseFloat(value.toFixed(Big.DP));
//     }
//     return parseFloat(value.toFixed(decimalPlaces));
// }
// interface ICustomNumber<T> {
//     round(decimalPlaces: number): T;
// }

// export class BigWrapper implements ICustomNumber<Big> {
//     private value: Big;

//     constructor(value: Big) {
//         this.value = value;
//     }

//     round(decimalPlaces: number): Big {
//         return (decimalPlaces === undefined) ? this.value : this.value.round(decimalPlaces)
//     }
// }

// export const asdf = <T extends ICustomNumber<T>>(value: number | T, decimalPlaces?: number): number | T => {
//     if(decimalPlaces === undefined)
//     {
//         return (typeof value === T) ? value : value; 
//     } else {
//         return (value instanceof T) ? value.round(decimalPlaces) : parseFloat(value.toFixed(decimalPlaces));
//     }
// }

export const round = (value: number | Big, decimalPlaces?: number): number | Big => {
    if(decimalPlaces === undefined)
    {
        return (value instanceof Big) ? parseFloat(value.toFixed(Big.DP)) : value; 
    } else {
        return (value instanceof Big) ? parseFloat(value.toFixed(decimalPlaces)) : parseFloat(value.toFixed(decimalPlaces));
    }
}

export const SPEED_RATIOS: { [key: string]: number } = { // to the meter per second
    perMillisecond: 1 / 1000,
    perSecond: 1,
    perMinute: 60,
    perHour: 3600,
};

const from = (value: number | Big, ratio: number): number | Big => (value instanceof Big) ? value.times(ratio) : value * ratio;;
const to = (value: number | Big, ratio: number): number | Big => (value instanceof Big) ? value.div(ratio) : value * ratio;;

// export const convert = (
//     // value: number | Big, 
//     // ratio: number,
//     multiply: (value: number | Big, ratio: number) => number | Big): number | Big => {
//     return multiply(value, ratio);
// };

// convert(from(1, 3));

export const convertFrom = (value: number | Big, ratio: number): number | Big => {
    return value instanceof Big ? value.times(ratio) : value * ratio;
};

export const convertTo = (value: number | Big, ratio: number): number | Big => {
    return value instanceof Big ? value.div(ratio) : value / ratio;
};
