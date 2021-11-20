module.exports = {};

const validatePassword = require('./ValidatePassword');

test('valid password?', () => {
    expect(validatePassword("Password123!")).toBe(true);
});