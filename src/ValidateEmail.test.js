module.exports = {};

const validateEmail = require('./ValidateEmail');

test('valid email?', () => {
    expect(validateEmail("test@mail.com")).toBe(true);
});