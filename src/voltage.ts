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
    ...converter.createFromMethods(to)
};