'use strict';
import Big from 'big.js';

// Set the decimal places to a higher value
Big.DP = 40;

const BIT_TO_NIBBLE = 4; // 4 bits in a nibble
const BIT_TO_BYTE = 8; // 8 bits in a byte
const BIT_TO_KILOBYTE = 8000; // 8 * 1000 bits in a kilobyte
const BIT_TO_KIBIBYTE = 8192; // 8 * 1024 bits in a kibibyte
const BIT_TO_MEGABYTE = 8000000; // 8 * 1000 * 1000 bits in a megabyte
const BIT_TO_MEBIBYTE = 8388608; // 8 * 1024 * 1024 bits in a mebibyte
const BIT_TO_GIGABYTE = 8000000000; // 8 * 1000 * 1000 * 1000 bits in a gigabyte
const BIT_TO_GIBIBYTE = 8589934592; // 8 * 1024 * 1024 * 1024 bits in a gibibyte
const BIT_TO_TERABYTE = 8000000000000; // 8 * 1000 * 1000 * 1000 * 1000 bits in a terabyte
const BIT_TO_TEBIBYTE = 8796093022208; // 8 * 1024 * 1024 * 1024 * 1024 bits in a tebibyte
const BIT_TO_PETABYTE = 8000000000000000; // 8 * 1000 * 1000 * 1000 * 1000 * 1000 bits in a petabyte
const BIT_TO_PEBIBYTE = 9007199254740992; // 8 * 1024 * 1024 * 1024 * 1024 * 1024 bits in a pebibyte
const BIT_TO_EXABYTE = 8000000000000000000; // 8 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 bits in an exabyte
const BIT_TO_EXBIBYTE = 9223372036854775808; // 8 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 bits in an exbibyte

const round = (value: Big, decimalPlaces: number = 10) => {
    return parseFloat(value.toFixed(decimalPlaces));
}

const to = (value: Big, decimalPlaces: number = 40) => {
    return {
        toBit: (): number => round(value, decimalPlaces),
        toNibble: (): number => round(value.div(BIT_TO_NIBBLE), decimalPlaces), // 4
        toByte: (): number => round(value.div(BIT_TO_BYTE),  decimalPlaces), // 8
        toKilobyte: (): number => round(value.div(BIT_TO_KILOBYTE), decimalPlaces), // 8 * 1000
        toKibibyte: () => round(value.div(BIT_TO_KIBIBYTE), decimalPlaces), // 8 * 1024
        toMegabyte: () => round(value.div(BIT_TO_MEGABYTE), decimalPlaces), // 8 * 1000 * 1000
        toMebibyte: () => round(value.div(BIT_TO_MEBIBYTE), decimalPlaces), // 8 * 1024 * 1024
        toGigabyte: () => round(value.div(BIT_TO_GIGABYTE), decimalPlaces), // 8 * 1000 * 1000 * 1000
        toGibibyte: () => round(value.div(BIT_TO_GIBIBYTE), decimalPlaces), // 8 * 1024 * 1024 * 1024
        toTerabyte: () => round(value.div(BIT_TO_TERABYTE), decimalPlaces), // 8 * 1000 * 1000 * 1000 * 1000
        toTebibyte: () => round(value.div(BIT_TO_TEBIBYTE), decimalPlaces), // 8 * 1024 * 1024 * 1024 * 1024
        toPetabyte: () => round(value.div(BIT_TO_PETABYTE), decimalPlaces), // 8 * 1000 * 1000 * 1000 * 1000 * 1000
        toPebibyte: () => round(value.div(BIT_TO_PEBIBYTE), decimalPlaces), // 8 * 1024 * 1024 * 1024 * 1024 * 1024
        toExabyte: () => round(value.div(BIT_TO_EXABYTE), decimalPlaces), // 8 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000
        toExbibyte: () => round(value.div(BIT_TO_EXBIBYTE), decimalPlaces) // 8 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024
    };
};

export default {
    bit: (value: number) => to(new Big(value)),
    nibble: (value: number) => to(new Big(value * BIT_TO_NIBBLE)), // 4
    byte: (value: number) => to(new Big(value * BIT_TO_BYTE)), // 8
    kilobyte: (value: number) => to(new Big(value * BIT_TO_KILOBYTE)), // 8 * 1000
    kibibyte: (value: number) => to(new Big(value * BIT_TO_KIBIBYTE)), // 8 * 1024
    megabyte: (value: number) => to(new Big(value * BIT_TO_MEGABYTE)), // 8 * 1000 * 1000
    mebibyte: (value: number) => to(new Big(value * BIT_TO_MEBIBYTE)), // 8 * 1024 * 1024
    gigabyte: (value: number) => to(new Big(value * BIT_TO_GIGABYTE)), // 8 * 1000 * 1000 * 1000
    gibibyte: (value: number) => to(new Big(value * BIT_TO_GIBIBYTE)), // 8 * 1024 * 1024 * 1024
    terabyte: (value: number) => to(new Big(value * BIT_TO_TERABYTE)), // 8 * 1000 * 1000 * 1000 * 1000
    tebibyte: (value: number) => to(new Big(value * BIT_TO_TEBIBYTE)), // 8 * 1024 * 1024 * 1024 * 1024
    petabyte: (value: number) => to(new Big(value * BIT_TO_PETABYTE)), // 8 * 1000 * 1000 * 1000 * 1000 * 1000
    pebibyte: (value: number) => to(new Big(value * BIT_TO_PEBIBYTE)), // 8 * 1024 * 1024 * 1024 * 1024 * 1024
    exabyte: (value: number) => to(new Big(value * BIT_TO_EXABYTE)), // 8 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000
    exbibyte: (value: number) => to(new Big(value * BIT_TO_EXBIBYTE)) // 8 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024
};
