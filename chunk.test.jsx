const { chunk } = require('./chunk.js');

test('size 2 → [[1,2],[3,4],[5]]', () => {
  expect(chunk([1,2,3,4,5], 2)).toEqual([[1,2],[3,4],[5]]);
});
test('size > length → whole array', () => {
  expect(chunk([1,2], 5)).toEqual([[1,2]]);
});
test('empty array → []', () => {
  expect(chunk([], 2)).toEqual([]);
});