'use strict';

const VOLT_RATIOS: Record<string, number> = {
    volt: 1,
    microVolt: 1e-6,
    milliVolt: 0.001,
    kiloVolt: 1000,
    megaVolt: 1e6
};

const to = (value: number) => {
    return {
        toVolt: (): number => value,
        toMicroVolt: (): number => value * VOLT_RATIOS.microVolt,
        toMilliVolt: (): number => value * VOLT_RATIOS.milliVolt,
        toKiloVolt: (): number => value * VOLT_RATIOS.kiloVolt,
        toMegaVolt: (): number => value * VOLT_RATIOS.megaVolt
    };
};

export const convert = {
    volt: (value: number) => to(value),
    microVolt: (value: number) => to(value / VOLT_RATIOS.microVolt),
    milliVolt: (value: number) => to(value / VOLT_RATIOS.milliVolt),
    kiloVolt: (value: number) => to(value / VOLT_RATIOS.kiloVolt),
    megaVolt: (value: number) => to(value / VOLT_RATIOS.megaVolt)
};
