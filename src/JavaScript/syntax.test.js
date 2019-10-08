import functions from './syntax' 


// define attributes / variables

test('variable type', () => {
    expect(functions.firstTest(1)).toBe("number"); // Consider the edge cases
    expect(functions.firstTest("0")).toBe("string");
    expect(functions.firstTest(true)).toBe("boolean");
    expect(functions.firstTest([15, 3, 5])).toBe("array");
    expect(functions.firstTest()).toBe("undefined");
    expect(functions.firstTest({1: "Attr", 2: "hi"})).toBe("object");
        
});

// sample if / else
test('variable type', () => {
    expect(functions.ifElse(1)).toBe(true); // Consider the edge cases
    expect(functions.ifElse(10)).toBe(false);
    
});

// functions
// parameters
// returns
// arrays
// add to the front
// add to the end
// update values
// loops 
// for
// for/in
// while
// do while
// forEach (with array and function)
// Objects / Dictionaries
// declare object
// lookup key to retrieve value
