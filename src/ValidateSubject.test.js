module.exports = {};

const validateSubject = require('./ValidateSubject');

test('valid subject?', () => {
    expect(validateSubject("Subject Title that should fail\n")).toBe(false);
});