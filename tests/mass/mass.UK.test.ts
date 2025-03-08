import UK from '../../src/mass/mass.UK';

describe('UK Mass Conversions', () => {
    test('Conversion from pound', () => {
        const pound = UK.pound(1000);
        expect(pound.toHundredweight()).toBe(8.928571428571429);
        expect(pound.toStone()).toBe(71.42857142857143);
        expect(pound.toQuarter()).toBe(35.714285714285715);
        expect(pound.toTon()).toBe(0.44642857142857145);
        expect(pound.toOunce()).toBe(16000);
        expect(pound.toGrain()).toBe(7000000);
        expect(pound.toDram()).toBe(256000);
        expect(pound.toScruple()).toBe(350000);
    });

    test('Conversion from hundredweight', () => {
        const hundredweight = UK.hundredweight(1000);
        expect(hundredweight.toPound()).toBe(112000);
    });
});
