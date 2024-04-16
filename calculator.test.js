// calculator.test.js
const calculate = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
    expect(calculate(1, 2, '+')).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
    expect(calculate(5, 3, '-')).toBe(2);
});

test('multiplies 4 * 2 to equal 8', () => {
    expect(calculate(4, 2, '*')).toBe(8);
});

test('divides 8 / 2 to equal 4', () => {
    expect(calculate(8, 2, '/')).toBe(4);
});

test('throws error on division by zero', () => {
    expect(() => calculate(5, 0, '/')).toThrow('Division by zero.');
});

test('throws error on invalid operation', () => {
    expect(() => calculate(5, 2, '^')).toThrow('Invalid operation!');
});
