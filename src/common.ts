import Big from "big.js";

export const round = (value: number | Big, decimalPlaces?: number): number | Big => {
    if(decimalPlaces === undefined)
    {
        return (value instanceof Big) ? parseFloat(value.toFixed(Big.DP)) : value; 
    } else {
        return (value instanceof Big) ? parseFloat(value.toFixed(decimalPlaces)) : parseFloat(value.toFixed(decimalPlaces));
    };
};

export const SPEED_RATIOS: { [key: string]: number } = { // to the meter per second
    perMillisecond: 1 / 1000,
    perSecond: 1,
    perMinute: 60,
    perHour: 3600,
};

// const from = (value: number | Big, ratio: number): number | Big => (value instanceof Big) ? value.times(ratio) : value * ratio;;
// const to = (value: number | Big, ratio: number): number | Big => (value instanceof Big) ? value.div(ratio) : value * ratio;;

export const convertFrom = (value: number | Big, ratio: number): number | Big => {
    return value instanceof Big ? value.times(ratio) : value * ratio;
};

export const convertTo = (value: number | Big, ratio: number): number | Big => {
    return value instanceof Big ? value.div(ratio) : value / ratio;
};

export const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};