import functions from './functions' 

// C:\Code\cohort3\src\01-getting-started\scripts\functions.js

test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("negative"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(2000000)).toBe("extra large");
});

test('Does that add function work?', () => {
    expect(functions.add(1,2)).toBe(3);
    expect(functions.add(101,202)).toBe(303);
});

test('Calculator test', () => {
    expect(functions.objectTests(5*3)).toBe(15);
    expect(functions.objectTests(5+3)).toBe(8);
    expect(functions.objectTests(5-3)).toBe(2);
    expect(functions.objectTests(5/3)).toBe(2.5);
});

test('subtractTest', () => {
    expect(functions.subtract(2,1)).toBe(1);
    
});