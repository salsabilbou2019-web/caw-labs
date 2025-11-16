// echo.test.jsx
const {exf} = require('./echo.js');

test('prints "echo" 5 times', () => {
  const spy = jest.spyOn(console, 'log').mockImplementation();
  exf('echo', 5);
  expect(spy).toHaveBeenCalledTimes(5);
  expect(spy).toHaveBeenCalledWith("echo");
  spy.mockRestore();
});
