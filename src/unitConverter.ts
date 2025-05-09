import Big from "big.js";
import { round } from "./common";

type ConversionFunction = (decimalPlaces?: number) => number | Big;

type Conversions<T extends Record<string, number>> = {
  [key in keyof T as `to${Capitalize<key & string>}`]: ConversionFunction;
};

type UnitMethods<T extends Record<string, number>, R> = {
  [key in keyof T]: (value: number | Big) => R;
};

class UnitConverter<T extends Record<string, number>> {
  private ratios: T;

  constructor(ratios: T) {
    this.ratios = ratios;
  }

  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  public createToMethods(value: number | Big): Conversions<T> {
    const conversions: Record<string, ConversionFunction> = {};

    Object.keys(this.ratios).forEach((unit) => {
      const ratio = this.ratios[unit as keyof T];
      const conversionKey = `to${this.capitalize(unit)}`;

      // Define conversion functions dynamically
      conversions[conversionKey] = (decimalPlaces?: number) => {
        return round(this.toRatio(value, ratio), decimalPlaces);
      };
    });

    return conversions as Conversions<T>;
  }

  
  private _itemsProvider: (value: number | Big) => Record<string, () => any> = () => ({});

  // Setter to inject the property call logic from the caller
  setItemsProvider(provider: (value: number | Big) => Record<string, () => any>): this {
    this._itemsProvider = provider;
    return this;
  }

  // Method to access the dynamically injected properties (maintaining fluent chaining with correct types)
  tos<T>(value: number | Big): T {
    const items = this._itemsProvider(value);
    return items as T;  // Type casting to the generic type `T`
  }

  from(value: number | Big, unit: string) {
    const ratio = this.ratios[unit];

    if (!ratio) {
      throw new Error(`Unknown unit: ${ratio}`);
    };
    // return this.tos(5)
    return {
        to: (targetUnit: string) => {
          const targetRatio = this.ratios[targetUnit];
          
          if (!targetRatio) {
            throw new Error(`Unknown target unit: ${targetUnit}`);
          }
    
          return this.toRatio(this.fromRatio(value, ratio), targetRatio);
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

  public createFromMethods<R>(
    conversionFn: (value: number | Big, ratio?: number) => R): UnitMethods<T, R> {
    const methods = {} as UnitMethods<T, R>;
    Object.keys(this.ratios).forEach((unit) => {
      methods[unit as keyof T] = (value: number | Big) => {
        const ownRatio = this.ratios[unit as keyof T];
        const baseValue = this.fromRatio(value, ownRatio);
        return conversionFn(baseValue); //no need for ratio when not doing between unit families
      };
    });
    return methods;
  }
};

export default UnitConverter