'use strict';

import Big from "big.js";
import { convertFrom, convertTo } from "./common";

const VOLT_RATIOS: Record<string, number> = {
    volt: 1,
    microVolt: 1e-6,
    milliVolt: 0.001,
    kiloVolt: 1000,
    megaVolt: 1e6
};

const to = (value: number | Big) => {
    return {
        toVolt: (): number | Big => value,
        toMicroVolt: (): number | Big => convertTo(value, VOLT_RATIOS.microVolt),
        toMilliVolt: (): number | Big => convertTo(value, VOLT_RATIOS.milliVolt),
        toKiloVolt: (): number | Big => convertTo(value, VOLT_RATIOS.kiloVolt),
        toMegaVolt: (): number | Big => convertTo(value, VOLT_RATIOS.megaVolt),
    };
};

export default {
    volt: (value: number | Big) => to(value),
    microVolt: (value: number | Big) => to(convertFrom(value, VOLT_RATIOS.microVolt)),
    milliVolt: (value: number | Big) => to(convertFrom(value, VOLT_RATIOS.milliVolt)),
    kiloVolt: (value: number | Big) => to(convertFrom(value, VOLT_RATIOS.kiloVolt)),
    megaVolt: (value: number | Big) => to(convertFrom(value, VOLT_RATIOS.megaVolt))
};