
const isAlphaNumeric = require('../index');

test('valid alphanumeric strings return true', () => {
  expect(isAlphaNumeric('abc123')).toBe(true);
});

test('invalid strings return false', () => {
  expect(isAlphaNumeric('abc123!')).toBe(false);
});