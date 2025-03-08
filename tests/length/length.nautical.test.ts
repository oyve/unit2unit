import Nautical from '../../src/length/length.nautical';

describe('Nautical Length Conversions', () => {
    test('Mile to all', () => {
        const mile = Nautical.nauticalMile(1000);
        expect(mile.toFoot()).toBe(6076120);
        expect(mile.toCableLength()).toBe(10000);
        expect(mile.toFathom()).toBe(1013333);
        expect(mile.toLeague()).toBe(333.3333333333333);
        expect(mile.toNauticalMile()).toBe(1000);
    });

    test('Foot to nautical mile', () => {
        const foot = Nautical.foot(1000);
        expect(foot.toNauticalMile()).toBe(0.16457871141452113);
    });

    test('Cable length to nautical mile', () => {
        const cableLength = Nautical.cableLength(1000);
        expect(cableLength.toNauticalMile()).toBe(100);
    });

    test('Fathom to nautical mile', () => {
        const fathom = Nautical.fathom(6000);
        expect(fathom.toNauticalMile()).toBe(5.92105457929427);
    });

    test('League to nautical mile', () => {
        const league = Nautical.league(1000);
        expect(league.toNauticalMile()).toBe(3000);
    });
});