const { first } = require('./first.js');
test('first element', () => expect(first([1,2,3,4], 1)).toEqual([1]));
test('first 2 elements', () => expect(first([1,2,3,4], 2)).toEqual([1,2]));
test('n null', () => expect(first([1,2,3])).toBe(1));
test('empty array or n=0', () => {
  expect(first([], 2)).toEqual([]);
  expect(first([1], 0)).toEqual([]);
});