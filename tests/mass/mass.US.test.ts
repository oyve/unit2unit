import US from '../../src/mass/mass.US';

describe('US Mass Conversions', () => {
    test('Conversion from pound', () => {
        const pound = US.pound(100);
        expect(pound.toOunce()).toBe(1600);
        expect(pound.toStone()).toBe(7.142857142857143);
        expect(pound.toGrain()).toBe(700000);
        expect(pound.toHundredweight()).toBe(1);
        expect(pound.toDram()).toBe(25600);
        expect(pound.toQuarter()).toBe(4);
    });

    test('Conversion from ounce', () => {
        const pound = US.ounce(1600);
        expect(pound.toPound()).toBe(100);
    });

    test('Conversion from stone', () => {
        const stone = US.stone(1);
        expect(stone.toPound()).toBe(14);
    });

    test('Conversion from grain', () => {
        const grain = US.grain(7000);
        expect(grain.toPound()).toBe(1);
    });

    test('Conversion from hundredweight', () => {
        const hundredweight = US.hundredweight(1);
        expect(hundredweight.toPound()).toBe(100);
    });

    test('Conversion from dram', () => {
        const dram = US.dram(256);
        expect(dram.toPound()).toBe(1);
    });

    test('Conversion from quarter', () => {
        const quarter = US.quarter(4);
        expect(quarter.toPound()).toBe(100);
    });
});
