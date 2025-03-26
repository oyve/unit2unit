import Big from "big.js";
import { convertFrom } from "./common";
import UnitConverter from "./unitConverter";

const VOLT_RATIOS = {
    volt: 1,
    microVolt: 1e-6,
    milliVolt: 0.001,
    kiloVolt: 1000,
    megaVolt: 1e6
};

const converter = new UnitConverter(VOLT_RATIOS);

export const to = (value: number | Big) => ({
    ...converter.createToMethods(value),
});

export default {
    from: (value: number | Big, unit: string) => converter.from(value, unit),

    volt: (value: number | Big) => to(value),
    microVolt: (value: number | Big) => to(convertFrom(value, VOLT_RATIOS.microVolt)),
    milliVolt: (value: number | Big) => to(convertFrom(value, VOLT_RATIOS.milliVolt)),
    kiloVolt: (value: number | Big) => to(convertFrom(value, VOLT_RATIOS.kiloVolt)),
    megaVolt: (value: number | Big) => to(convertFrom(value, VOLT_RATIOS.megaVolt))
};