 import UK from '../../src/length/length.UK';

describe('UK Length Conversions', () => {
    test('Foot', () => {
        const value = UK.foot(100);
        
        expect(value.toInch()).toBe(1200);
    });
});
