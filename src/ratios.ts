// import Big from "big.js";

// // Length and Mass Ratios
// const LENGTH_RATIOS = {
//     centimeter: 10 ** -2,
//     meter: 1,
//     kilometer: 10 ** 3,
// } as const;

// const MASS_RATIOS = {
//     gram: 1,
//     kilogram: 10 ** 3,
//     tonne: 10 ** 6,
// } as const;

// // Extract unit names dynamically
// type LengthUnit = keyof typeof LENGTH_RATIOS;
// type MassUnit = keyof typeof MASS_RATIOS;

// // Generic UnitConverter Base Class
// abstract class UnitConverter<T extends number | Big, U extends string> {
//     protected value: T;
//     protected ratios: Record<U, number>;

//     constructor(value: T, ratios: Record<U, number>) {
//         this.value = value;
//         this.ratios = ratios;
//     }

//   // Convert from one unit to another
//   convertTox(target: any): any {
//     const targetRatio = target.ratio;
    
//     // Handle conversion for both directions
//     if (this.value instanceof Big) {
//       return new target.constructor(this.value.div(this.ratio).times(targetRatio));
//     } else {
//       return new target.constructor((this.value / this.ratio) * targetRatio);
//     }
//   }

//     // Convert to target unit
//     convertTo(unit: U): T {
//         const ratio = this.ratios[unit];
//         return this.applyRatio(1 / ratio);
//     }

//     // Apply ratio conversion
//     private applyRatio(ratio: number): T {
//         return this.value instanceof Big
//             ? this.value.times(ratio) as T
//             : (this.value as number) * ratio as T;
//     }
// }

// // Length class
// class Length<T extends number | Big = number> extends UnitConverter<T, LengthUnit> {
//     constructor(value: T) {
//         super(value, LENGTH_RATIOS);
//     }
// }

// // Mass class
// class Mass<T extends number | Big = number> extends UnitConverter<T, MassUnit> {
//     constructor(value: T) {
//         super(value, MASS_RATIOS);
//     }
// }

// // **Create Fluent API Proxy**
// function createFluentMethods<T extends number | Big, U extends string>(
//     createInstance: (value: T) => UnitConverter<T, U>,
//     ratios: Record<U, number>
// ) {
//     return (value: T) => {
//         const instance = createInstance(value);
//         return new Proxy(instance, {
//             get(target, prop: string) {
//                 if (prop in ratios) {
//                     return () => target.convertTo(prop as U);
//                 }
//                 return Reflect.get(target, prop);
//             },
//         }) as Record<U, () => T>;
//     };
// }

// // **Factory Object for Fluent API**
// const Metric = {
//     length: createFluentMethods<number | Big, LengthUnit>(
//         (value) => new Length(value),
//         LENGTH_RATIOS
//     ),
//     mass: createFluentMethods<number | Big, MassUnit>(
//         (value) => new Mass(value),
//         MASS_RATIOS
//     ),
// };

// export default Metric

// // // **Example Usage:**
// // console.log(Metric.length(10).centimeter()); // 10
// // console.log(Metric.length(1).kilometer());   // 0.001
// // console.log(Metric.mass(1000).gram());       // 1000
// // console.log(Metric.mass(5).kilogram());      // 5000
