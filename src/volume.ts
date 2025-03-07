'use strict'

const p10_min6 = 10 ** -6;
const p10_min5 = 10 ** -5;
const p10_min4 = 10 ** -4;
const p10_min3 = 10 ** -3;

const to = (value: number) => { //cubicmetre
    const tos = {
        toCubicMeter: () => value,
        toLitre: () => value / 0.001,
        toDesilitre: () => value / 0.0001,
        toCentilitre: () => value / 0.00001,
        toMillilitre: () => value / 0.000001,

        toCup: () => {
            return {
                Metric: (value: number) => to(value / 284.130625 / p10_min6),
                Canadian: (value: number) => to(value / 227.3045 / p10_min6),
                USCustomary: (value: number) => to(value / 236.5882365 / p10_min6),
                USNutrition: (value: number) => to(value / 2.4 / p10_min4),
            }
        }
    }
    return tos;
}

module.exports = {
    cubicMeter: (value: number) => to(value),
    litre: (value: number) => to(value * 0.001),
    decilitre: (value: number) => to(value * 0.0001),
    centilitre: (value: number) => to(value * 0.00001),
    millilitre: (value: number) => to(value * 0.000001),

    cup: () => {
        return {
            Metric: (value: number) => to(value * 284.130625 * p10_min6),
            Canadian: (value: number) => to(value * 227.3045 * p10_min6),
            USCustomary: (value: number) => to(value * 236.5882365 * p10_min6),
            USNutrition: (value: number) => to(value * 2.4 * p10_min4),
        }
    },
    gallon: (value: number) => {
        return {
            Beer: () => to(value * 4.621152048 * p10_min3),
            Imperial: () => to(value * 4.54609 * p10_min3),
            USDry: () => to(value * 4.40488377086 * p10_min3),
            USFluid: () => to(value * 3.785411784 * p10_min3),
        }
    },
    ounce: (value: number) => {
        return {
            Imperial: () => to(value * 28.4130625 * p10_min6),
            USCustomary: () => to(value * 29.5735295625 * p10_min6),
            USNutrition: () => to(value * 3 * p10_min5),
        }
    },
    pint: (value: number) => {
        return {
            Imperial: () => to(value * 568.26125 * p10_min6),
            USDry: () => to(value * 550.6104713575 * p10_min6),
            USFluid: () => to(value * 473.176473 * p10_min6),
        }
    },
    tablespoon: (value: number) => {
        return {
            Canadian: () => to(value * 14.20653125 * p10_min6),
            Imperial: () => to(value * 17.7581640625 * p10_min6),
            Metric: () => to(value * 15 * p10_min6),
            USCustomary: () => to(value * 14.78676478125 * p10_min6),
            USNutrition: () => to(value * 15 * p10_min6),
        }
    },
    teaspoon: (value: number) => {
        return {
            Canadian: () => to(value * 4.735510416 * p10_min6),
            Imperial: () => to(value * 5.91938802083 * p10_min6),
            Metric: () => to(value * 5 * p10_min6),
            USCustomary: () => to(value * 4.92892159375 * p10_min6),
            USNutrition: () => to(value * 5 * p10_min6),
        }
    }
}
