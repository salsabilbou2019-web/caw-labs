test('logs correct strings', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation();
    require('./concatenation.js');
    expect(spy).toHaveBeenNthCalledWith(1, "Red,Green,White,Black");
    expect(spy).toHaveBeenNthCalledWith(3, "RedGreenWhiteBlack");
    spy.mockRestore();
  });