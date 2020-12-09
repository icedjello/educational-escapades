import {romanToInteger} from "./algorithms/romanNumerals";
import {isNonDecreasing} from "./algorithms/nonDecreasing";

test('roman numerals', () => {
  expect(romanToInteger(`I`)).toBe(1);
  expect(romanToInteger(`DCCCLXXXIX`)).toBe(889);
});

test ('non-decreasing array - simple', ()=>{
  expect(isNonDecreasing([1,3])).toBe(true);
  expect(isNonDecreasing([1,3,1])).toBe(false);
});
