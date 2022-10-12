const capitalizeString = require('./capitalizeString')

test('return capitalizeString', () => {
    expect(capitalizeString('hello')).toBe('Hello')
})