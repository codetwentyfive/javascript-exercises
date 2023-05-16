const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  test('says "Hello my lovely future"', function() {
    expect(helloWorld()).toEqual('Hello my lovely future');
  });
});
