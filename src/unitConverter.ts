import Big from "big.js";
import { convertFrom, convertTo, round } from "./common";

type ConversionFunction = (decimalPlaces?: number) => number | Big;

type Conversions<T extends Record<string, number>> = {
  [key in keyof T as `to${Capitalize<key & string>}`]: ConversionFunction;
};

class UnitConverter<T extends Record<string, number>> {
  private ratios: T;

  constructor(ratios: T) {
    this.ratios = ratios;
  }

  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  public generateConversions(value: number | Big): Conversions<T> {
    const conversions: Record<string, ConversionFunction> = {};

    Object.keys(this.ratios).forEach((unit) => {
      const ratio = this.ratios[unit as keyof T];
      const conversionKey = `to${this.capitalize(unit)}`;

      // Define conversion functions dynamically
      conversions[conversionKey] = (decimalPlaces?: number) => {
        return round(convertTo(value, ratio), decimalPlaces);
      };
    });

    return conversions as Conversions<T>;
  }

  from(value: number | Big, unit: string) {
    const ratio = this.ratios[unit];

    if (!ratio) {
      throw new Error(`Unknown unit: ${ratio}`);
    };
    
    return {
        to: (targetUnit: string) => {
          const targetRatio = this.ratios[targetUnit];
          
          if (!targetRatio) {
            throw new Error(`Unknown target unit: ${targetUnit}`);
          }
    
          return convertTo(convertFrom(value, ratio), targetRatio);
        }
    }
  };

  fromRatio(value: number | Big, ratio: number): number | Big {
      return value instanceof Big ? value.times(ratio) : value * ratio;
  };
  
  toRatio(value: number | Big, ratio: number): number | Big {
      return value instanceof Big ? value.div(ratio) : value / ratio;
  };
  
  processConversions(conversions: Record<string, any>)  {
    // Example: Log each conversion function or do something with them
    Object.keys(conversions).forEach(key => {
        console.log(`Processing conversion for ${key}`);
        const conversionFunc = conversions[key];
        // Call the conversion function, assuming it's a function
        if (typeof conversionFunc === 'function') {
            console.log("");
        }
    });
};

};

export default UnitConverter