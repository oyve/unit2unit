'use strict';

const ratios: Record<string, number> = {
    millisecond: 1000,
    microsecond: 1000000,
    nanosecond: 1000000000,
    minute: 60,
    hour: 3600,
    day: 86400, // 3600 * 24
    week: 604800, // 3600 * 24 * 7
    month: 2592000, // 3600 * 24 * 30
    year: 31536000, // 3600 * 24 * 365
    decade: 315360000, // 3600 * 24 * 365 * 10
    century: 3153600000, // 3600 * 24 * 365 * 100
    millennium: 31536000000 // 3600 * 24 * 365 * 1000
};

const to = (value: number) => {
    return {
        toMillisecond: (): number => value * ratios.millisecond,
        toMicrosecond: (): number => value * ratios.microsecond,
        toNanosecond: (): number => value * ratios.nanosecond,
        toSecond: (): number => value,
        toMinute: (): number => value / ratios.minute,
        toHour: (): number => value / ratios.hour,
        toDay: (): number => value / ratios.day,
        toWeek: (): number => value / ratios.week,
        toMonth: (): number => value / ratios.month,
        toYear: (): number => value / ratios.year,
        toDecade: (): number => value / ratios.decade,
        toCentury: (): number => value / ratios.century,
        toMillennium: (): number => value / ratios.millennium,
    };
};

export const convert = {
    millisecond: (value: number) => to(value / ratios.millisecond),
    microsecond: (value: number) => to(value / ratios.microsecond),
    nanosecond: (value: number) => to(value / ratios.nanosecond),
    second: (value: number) => to(value),
    minute: (value: number) => to(value * ratios.minute),
    hour: (value: number) => to(value * ratios.hour),
    day: (value: number) => to(value * ratios.day),
    week: (value: number) => to(value * ratios.week),
    month: (value: number) => to(value * ratios.month),
    year: (value: number) => to(value * ratios.year),
    decade: (value: number) => to(value * ratios.decade),
    century: (value: number) => to(value * ratios.century),
    millennium: (value: number) => to(value * ratios.millennium),
};
