const { last } = require('./last.js');
test('the last element', () => expect(last([1,2,3,4])).toEqual(4));
test('the last 2 elements', () => expect(last([1,2,3,4], 2)).toEqual([3,4]));
test('null → []', () => expect(last(null)).toEqual([]));