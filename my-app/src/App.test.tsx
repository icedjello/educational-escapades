import {romanToInteger} from "./algorithms/romanNumerals";
import {isIncreasingWithAtMostOneException} from "./algorithms/nonDecreasing";
import {duplicateZeros} from "./algorithms/duplicateZeros";

test('roman numerals', () => {
    expect(romanToInteger(`I`)).toBe(1);
    expect(romanToInteger(`MDCCCLXXXVIII`)).toBe(1888);
    expect(romanToInteger(`DCCCLXXXIX`)).toBe(889);
    expect(romanToInteger(`DCCLXXXIX`)).toBe(789);
    expect(romanToInteger(`MCMXLIX`)).toBe(1949);
    expect(romanToInteger(`MMXX`)).toBe(2020);

});

test('non-decreasing array', () => {
    expect(isIncreasingWithAtMostOneException([1, 3])).toBe(true);
    expect(isIncreasingWithAtMostOneException([1, 3, 5])).toBe(true);
    expect(isIncreasingWithAtMostOneException([1, 3, 8, 7])).toBe(true);
    expect(isIncreasingWithAtMostOneException([1, 3, 8, 4, 11, 10])).toBe(false);
    expect(isIncreasingWithAtMostOneException([1])).toBe(true);
    expect(isIncreasingWithAtMostOneException([1, 1])).toBe(true);
    expect(isIncreasingWithAtMostOneException([1, 1, 2])).toBe(false);
    expect(isIncreasingWithAtMostOneException([1, 1, 3])).toBe(true);
    expect(isIncreasingWithAtMostOneException([1, 2, 3])).toBe(true);
});

test('duplicate zeros', () => {
    expect(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0])).toStrictEqual([1, 0, 0, 2, 3, 0, 0, 4]);
    expect(duplicateZeros([1, 2, 3])).toStrictEqual([1, 2, 3]);
    expect(duplicateZeros([1,0,1])).toStrictEqual([1,0,0]);
});
