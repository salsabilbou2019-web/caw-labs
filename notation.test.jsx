const mean = require('./notation.js');

test('mean of [10,10,10,10] is 10', () => {
  expect(mean([10, 10, 10])).toBe(10);
});

test('mean of [2,2,2,2] is 2', () => {
  expect(mean([2, 2, 2,2])).toBe(2);
});
