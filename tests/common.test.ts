import Big from 'big.js';
import { round, roundBig } from '../src/common';

describe('round function', () => {
    it('should not be rounded by decimalPlaces not set', () => {
        const result = round(1.12345678901234567890);
        expect(result).toBe(1.1234567890123457);
    });

    it('should round to specified decimal places when decimalPlaces is set to 15', () => {
        const result = round(1.12345678901234567890, 15);
        expect(result).toBe(1.123456789012346);
    });
});

describe('roundBig function', () => {
    it('should round to Big.DP decimal places when Big.DP is set', () => {
        Big.DP = 5;
        const value = new Big(1.12345678901234567890);
        const result = roundBig(value);
        expect(result).toBe(1.12346);
    });

    it('should round to specified decimal places when Big.DP is set to 10', () => {
        Big.DP = 10;
        const value = new Big(1.12345678901234567890);
        const result = roundBig(value);
        expect(result).toBe(1.1234567890);
    });
});