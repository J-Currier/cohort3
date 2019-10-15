import functions from './calc' 

// C:\Code\cohort3\src\01-getting-started\scripts\functions.js

test('Check the sizes', () => {
    expect(functions.mult(5, 3)).toBe(15); // Consider the edge cases
    expect(functions.divide(5, 2)).toBe(2.5);
    expect(functions.adding(5, 3)).toBe(8);
    expect(functions.subtracting(5, 3)).toBe(2);
   
});

test('the operator', () => {
    expect(functions.operator("+")).toBe(7);
    expect(functions.operator("-")).toBe(3);
    expect(functions.operator("*")).toBe(10);
    expect(functions.operator("/")).toBe(2.5);

});