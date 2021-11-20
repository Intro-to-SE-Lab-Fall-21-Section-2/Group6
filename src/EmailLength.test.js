module.exports = {};

const emailLength = require('./EmailLength');

test('valid email length?', () => {
    expect(emailLength("4096")).toBe(true);
});