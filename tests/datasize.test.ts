import datasize from '../src/datasize';

describe('Datasize Conversion', () => {
    it('should correctly convert bits to other units', () => {
        const value = datasize.bit(8);
        expect(value.toBit()).toBe(8);
        expect(value.toNibble()).toBe(2);
        expect(value.toByte()).toBe(1);
        expect(value.toKilobyte()).toBe(0.001);
        expect(value.toKibibyte()).toBe(0.0009765625);
        expect(value.toMegabyte()).toBe(0.000001);
        expect(value.toMebibyte()).toBe(0.00000095367431640625);
        expect(value.toGigabyte()).toBe(0.000000001);
        expect(value.toGibibyte()).toBe(0.0000000009313225746154785);
        expect(value.toTerabyte()).toBe(0.000000000001);
        expect(value.toTebibyte()).toBe(0.0000000000009094947017729282);
        expect(value.toPetabyte()).toBe(0.000000000000001);
        expect(value.toPebibyte()).toBe(0.0000000000000008881784197001252);
        expect(value.toExabyte()).toBe(0.000000000000000001);
        expect(value.toExbibyte()).toBe(0.0000000000000000008673617379884035);
    });

    it('should convert nibble to other units correctly', () => {
        const value = datasize.nibble(2);
        expect(value.toBit()).toBe(8);
        expect(value.toNibble()).toBe(2);
        expect(value.toByte()).toBe(1);
        expect(value.toKilobyte()).toBe(0.001);
        expect(value.toKibibyte()).toBe(0.0009765625);
        expect(value.toMegabyte()).toBe(0.000001);
        expect(value.toMebibyte()).toBe(0.00000095367431640625);
        expect(value.toGigabyte()).toBe(0.000000001);
        expect(value.toGibibyte()).toBe(0.0000000009313225746154785);
        expect(value.toTerabyte()).toBe(0.000000000001);
        expect(value.toTebibyte()).toBe(0.0000000000009094947017729282);
        expect(value.toPetabyte()).toBe(0.000000000000001);
        expect(value.toPebibyte()).toBe(0.0000000000000008881784197001252);
        expect(value.toExabyte()).toBe(0.000000000000000001);
        expect(value.toExbibyte()).toBe(0.0000000000000000008673617379884035);
    });

    it('should convert byte to other units correctly', () => {
        const value = datasize.byte(1);
        expect(value.toBit()).toBe(8);
        expect(value.toNibble()).toBe(2);
        expect(value.toByte()).toBe(1);
        expect(value.toKilobyte()).toBe(0.001);
        expect(value.toKibibyte()).toBe(0.0009765625);
        expect(value.toMegabyte()).toBe(0.000001);
        expect(value.toMebibyte()).toBe(0.00000095367431640625);
        expect(value.toGigabyte()).toBe(0.000000001);
        expect(value.toGibibyte()).toBe(0.0000000009313225746154785);
        expect(value.toTerabyte()).toBe(0.000000000001);
        expect(value.toTebibyte()).toBe(0.0000000000009094947017729282);
        expect(value.toPetabyte()).toBe(0.000000000000001);
        expect(value.toPebibyte()).toBe(0.0000000000000008881784197001252);
        expect(value.toExabyte()).toBe(0.000000000000000001);
        expect(value.toExbibyte()).toBe(0.0000000000000000008673617379884035);
    });

    it('should convert kilobyte to other units correctly', () => {
        const value = datasize.kilobyte(1);
        expect(value.toBit()).toBe(8000);
        expect(value.toNibble()).toBe(2000);
        expect(value.toByte()).toBe(1000);
        expect(value.toKilobyte()).toBe(1);
        expect(value.toKibibyte()).toBe(0.9765625);
        expect(value.toMegabyte()).toBe(0.001);
        expect(value.toMebibyte()).toBe(0.00095367431640625);
        expect(value.toGigabyte()).toBe(0.000001);
        expect(value.toGibibyte()).toBe(0.0000009313225746154785);
        expect(value.toTerabyte()).toBe(0.000000001);
        expect(value.toTebibyte()).toBe(0.0000000009094947017729282);
        expect(value.toPetabyte()).toBe(0.000000000001);
        expect(value.toPebibyte()).toBe(0.0000000000008881784197001252);
        expect(value.toExabyte()).toBe(0.000000000000001);
        expect(value.toExbibyte()).toBe(0.0000000000000008673617379884035);
    });

    it('should convert kibibyte to other units correctly', () => {
        const value = datasize.kibibyte(1);
        expect(value.toBit()).toBe(8192);
        expect(value.toNibble()).toBe(2048);
        expect(value.toByte()).toBe(1024);
        expect(value.toKilobyte()).toBe(1.024);
        expect(value.toKibibyte()).toBe(1);
        expect(value.toMegabyte()).toBe(0.001024);
        expect(value.toMebibyte()).toBe(0.0009765625);
        expect(value.toGigabyte()).toBe(0.000001024);
        expect(value.toGibibyte()).toBe(0.00000095367431640625);
        expect(value.toTerabyte()).toBe(0.000000001024);
        expect(value.toTebibyte()).toBe(0.0000000009313225746154785);
        expect(value.toPetabyte()).toBe(0.000000000001024);
        expect(value.toPebibyte()).toBe(0.0000000000009094947017729282);
        expect(value.toExabyte()).toBe(0.000000000000001024);
        expect(value.toExbibyte()).toBe(0.0000000000000008881784197001252);
    });

    it('should convert megabyte to other units correctly', () => {
        const value = datasize.megabyte(1);
        expect(value.toBit()).toBe(8000000);
        expect(value.toNibble()).toBe(2000000);
        expect(value.toByte()).toBe(1000000);
        expect(value.toKilobyte()).toBe(1000);
        expect(value.toKibibyte()).toBe(976.5625);
        expect(value.toMegabyte()).toBe(1);
        expect(value.toMebibyte()).toBe(0.95367431640625);
        expect(value.toGigabyte()).toBe(0.001);
        expect(value.toGibibyte()).toBe(0.0009313225746154785);
        expect(value.toTerabyte()).toBe(0.000001);
        expect(value.toTebibyte()).toBe(0.0000009094947017729282);
        expect(value.toPetabyte()).toBe(0.000000001);
        expect(value.toPebibyte()).toBe(0.0000000008881784197001252);
        expect(value.toExabyte()).toBe(0.000000000001);
        expect(value.toExbibyte()).toBe(0.0000000000008673617379884035);
    });

    it('should convert mebibyte to other units correctly', () => {
        const value = datasize.mebibyte(1);
        expect(value.toBit()).toBe(8388608);
        expect(value.toNibble()).toBe(2097152);
        expect(value.toByte()).toBe(1048576);
        expect(value.toKilobyte()).toBe(1048.576);
        expect(value.toKibibyte()).toBe(1024);
        expect(value.toMegabyte()).toBe(1.048576);
        expect(value.toMebibyte()).toBe(1);
        expect(value.toGigabyte()).toBe(0.001048576);
        expect(value.toGibibyte()).toBe(0.0009765625);
        expect(value.toTerabyte()).toBe(0.000001048576);
        expect(value.toTebibyte()).toBe(0.00000095367431640625);
        expect(value.toPetabyte()).toBe(0.000000001048576);
        expect(value.toPebibyte()).toBe(0.0000000009313225746154785);
        expect(value.toExabyte()).toBe(0.000000000001048576);
        expect(value.toExbibyte()).toBe(0.0000000000009094947017729282);
    });

    it('should convert gigabyte to other units correctly', () => {
        const value = datasize.gigabyte(1);
        expect(value.toBit()).toBe(8000000000);
        expect(value.toNibble()).toBe(2000000000);
        expect(value.toByte()).toBe(1000000000);
        expect(value.toKilobyte()).toBe(1000000);
        expect(value.toKibibyte()).toBe(976562.5);
        expect(value.toMegabyte()).toBe(1000);
        expect(value.toMebibyte()).toBe(953.67431640625);
        expect(value.toGigabyte()).toBe(1);
        expect(value.toGibibyte()).toBe(0.9313225746154785);
        expect(value.toTerabyte()).toBe(0.001);
        expect(value.toTebibyte()).toBe(0.0009094947017729282);
        expect(value.toPetabyte()).toBe(0.000001);
        expect(value.toPebibyte()).toBe(0.0000008881784197001252);
        expect(value.toExabyte()).toBe(0.000000001);
        expect(value.toExbibyte()).toBe(0.0000000008673617379884035);
    });

    it('should convert gibibyte to other units correctly', () => {
        const value = datasize.gibibyte(1);
        expect(value.toBit()).toBe(8589934592);
        expect(value.toNibble()).toBe(2147483648);
        expect(value.toByte()).toBe(1073741824);
        expect(value.toKilobyte()).toBe(1073741.824);
        expect(value.toKibibyte()).toBe(1048576);
        expect(value.toMegabyte()).toBe(1073.741824);
        expect(value.toMebibyte()).toBe(1024);
        expect(value.toGigabyte()).toBe(1.073741824);
        expect(value.toGibibyte()).toBe(1);
        expect(value.toTerabyte()).toBe(0.001073741824);
        expect(value.toTebibyte()).toBe(0.0009765625);
        expect(value.toPetabyte()).toBe(0.000001073741824);
        expect(value.toPebibyte()).toBe(0.00000095367431640625);
        expect(value.toExabyte()).toBe(0.000000001073741824);
        expect(value.toExbibyte()).toBe(0.0000000009313225746154785);
    });

    it('should convert terabyte to other units correctly', () => {
        const value = datasize.terabyte(1);
        expect(value.toBit()).toBe(8000000000000);
        expect(value.toNibble()).toBe(2000000000000);
        expect(value.toByte()).toBe(1000000000000);
        expect(value.toKilobyte()).toBe(1000000000);
        expect(value.toKibibyte()).toBe(976562500);
        expect(value.toMegabyte()).toBe(1000000);
        expect(value.toMebibyte()).toBe(953674.31640625);
        expect(value.toGigabyte()).toBe(1000);
        expect(value.toGibibyte()).toBe(931.3225746154785);
        expect(value.toTerabyte()).toBe(1);
        expect(value.toTebibyte()).toBe(0.9094947017729282);
        expect(value.toPetabyte()).toBe(0.001);
        expect(value.toPebibyte()).toBe(0.0008881784197001252);
        expect(value.toExabyte()).toBe(0.000001);
        expect(value.toExbibyte()).toBe(0.0000008673617379884035);
    });

    it('should convert tebibyte to other units correctly', () => {
        const value = datasize.tebibyte(1);
        expect(value.toBit()).toBe(8796093022208);
        expect(value.toNibble()).toBe(2199023255552);
        expect(value.toByte()).toBe(1099511627776);
        expect(value.toKilobyte()).toBe(1099511627.776);
        expect(value.toKibibyte()).toBe(1073741824);
        expect(value.toMegabyte()).toBe(1099511.627776);
        expect(value.toMebibyte()).toBe(1048576);
        expect(value.toGigabyte()).toBe(1099.511627776);
        expect(value.toGibibyte()).toBe(1024);
        expect(value.toTerabyte()).toBe(1.099511627776);
        expect(value.toTebibyte()).toBe(1);
        expect(value.toPetabyte()).toBe(0.001099511627776);
        expect(value.toPebibyte()).toBe(0.0009765625);
        expect(value.toExabyte()).toBe(0.000001099511627776);
        expect(value.toExbibyte()).toBe(0.00000095367431640625);
    });

    it('should convert petabyte to other units correctly', () => {
        const value = datasize.petabyte(1);
        expect(value.toBit()).toBe(8000000000000000);
        expect(value.toNibble()).toBe(2000000000000000);
        expect(value.toByte()).toBe(1000000000000000);
        expect(value.toKilobyte()).toBe(1000000000000);
        expect(value.toKibibyte()).toBe(976562500000);
        expect(value.toMegabyte()).toBe(1000000000);
        expect(value.toMebibyte()).toBe(953674316.40625);
        expect(value.toGigabyte()).toBe(1000000);
        expect(value.toGibibyte()).toBe(931322.5746154785);
        expect(value.toTerabyte()).toBe(1000);
        expect(value.toTebibyte()).toBe(909.4947017729282);
        expect(value.toPetabyte()).toBe(1);
        expect(value.toPebibyte()).toBe(0.8881784197001252);
        expect(value.toExabyte()).toBe(0.001);
        expect(value.toExbibyte()).toBe(0.0008673617379884035);
    });

    it('should convert pebibyte to other units correctly', () => {
        const value = datasize.pebibyte(1);
        expect(value.toBit()).toBe(9007199254740992);
        expect(value.toNibble()).toBe(2251799813685248);
        expect(value.toByte()).toBe(1125899906842624);
        expect(value.toKilobyte()).toBe(1125899906842.624);
        expect(value.toKibibyte()).toBe(1099511627776);
        expect(value.toMegabyte()).toBe(1125899906.842624);
        expect(value.toMebibyte()).toBe(1073741824);
        expect(value.toGigabyte()).toBe(1125899.906842624);
        expect(value.toGibibyte()).toBe(1048576);
        expect(value.toTerabyte()).toBe(1125.899906842624);
        expect(value.toTebibyte()).toBe(1024);
        expect(value.toPetabyte()).toBe(1.125899906842624);
        expect(value.toPebibyte()).toBe(1);
        expect(value.toExabyte()).toBe(0.001125899906842624);
        expect(value.toExbibyte()).toBe(0.0009765625);
    });

    it('should convert exabyte to other units correctly', () => {
        const value = datasize.exabyte(1);
        expect(value.toBit()).toBe(8000000000000000000);
        expect(value.toNibble()).toBe(2000000000000000000);
        expect(value.toByte()).toBe(1000000000000000000);
        expect(value.toKilobyte()).toBe(1000000000000000);
        expect(value.toKibibyte()).toBe(976562500000000);
        expect(value.toMegabyte()).toBe(1000000000000);
        expect(value.toMebibyte()).toBe(953674316406.25);
        expect(value.toGigabyte()).toBe(1000000000);
        expect(value.toGibibyte()).toBe(931322574.6154785);
        expect(value.toTerabyte()).toBe(1000000);
        expect(value.toTebibyte()).toBe(909494.7017729282);
        expect(value.toPetabyte()).toBe(1000);
        expect(value.toPebibyte()).toBe(888.1784197001252);
        expect(value.toExabyte()).toBe(1);
        expect(value.toExbibyte()).toBe(0.8673617379884035);
    });

    it('should convert exbibyte to other units correctly', () => {
        const value = datasize.exbibyte(1);
        expect(value.toBit()).toBe(9223372036854776000);
        expect(value.toNibble()).toBe(2305843009213694000);
        expect(value.toByte()).toBe(1152921504606846976);
        expect(value.toKilobyte()).toBe(1152921504606847);
        expect(value.toKibibyte()).toBe(1125899906842624);
        expect(value.toMegabyte()).toBe(1152921504606.847);
        expect(value.toMebibyte()).toBe(1099511627776);
        expect(value.toGigabyte()).toBe(1152921504.606847);
        expect(value.toGibibyte()).toBe(1073741824);
        expect(value.toTerabyte()).toBe(1152921.504606847);
        expect(value.toTebibyte()).toBe(1048576);
        expect(value.toPetabyte()).toBe(1152.921504606847);
        expect(value.toPebibyte()).toBe(1024);
        expect(value.toExabyte()).toBe(1.152921504606847);
        expect(value.toExbibyte()).toBe(1);
    });
});
