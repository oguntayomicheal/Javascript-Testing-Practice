const {add, subtract, divide, multiply, calculator} = require('./calculator');

describe('add', () => {
    calculator(6,3);
    test('not null', () => {
        expect(add(6,3)).not.toBeNull();
      })
    test('addition', () => {
        expect(add(6,3)).toBe(9)
    })
    test('notdefined', () => {
        expect(add(6,3)).not.toBeUndefined();
      })
});

describe('subtract', () => {
    calculator(6,3);
    test('not null', () => {
        expect(subtract(6,3)).not.toBeNull();
      })
    test('addition', () => {
        expect(subtract(6,3)).toBe(3)
    })
    test('notdefined', () => {
        expect(subtract(6,3)).not.toBeUndefined();
      })
})

describe('multiply', () => {
    calculator(6,3);
    test('not null', () => {
        expect(multiply(6,3)).not.toBeNull();
      })
    test('addition', () => {
        expect(multiply(6,3)).toBe(18)
    })
    test('notdefined', () => {
        expect(multiply(6,3)).not.toBeUndefined();
      })
})

describe('divide', () => {
    calculator(6,3);
    test('not null', () => {
        expect(divide(6,3)).not.toBeNull();
      })
    test('addition', () => {
        expect(divide(6,3)).toBe(2)
    })
    test('notdefined', () => {
        expect(divide(6,3)).not.toBeUndefined();
      })
})