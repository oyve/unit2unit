import Big from "big.js";

export const round = (value: number, decimalPlaces?: number): number => {
    if (decimalPlaces === undefined) {
        return value;
    }
    return parseFloat(new Big(value).toFixed(decimalPlaces));
}

export const roundBig = (value: Big): number => {
    return parseFloat(value.toFixed(Big.DP));
}