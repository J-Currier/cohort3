import functions from './syntax' 
import { exportAllDeclaration } from '@babel/types'


// // define attributes / variables

// test('variable type', () => {
//     expect(functions.firstTest(1)).toBe("number"); // Consider the edge cases
//     expect(functions.firstTest("0")).toBe("string");
//     expect(functions.firstTest(true)).toBe("boolean");

//     expect(functions.firstTest([15, 3, 5])).toBe("array");
//     expect(functions.firstTest()).toBe("undefined");
//     expect(functions.firstTest({1: "Attr", 2: "hi"})).toBe("object");
        
// });

// // sample if / else
// test('ifelse', () => {
//     expect(functions.ifElse(1)).toBe(true); // Consider the edge cases
//     expect(functions.ifElse(10)).toBe(false);
    
// });

// // functions
// // parameters
// // returns
// test('functions', () => {
//     expect(functions.funcTest(1, 4)).toBe(5); // Consider the edge cases
//     expect(functions.funcTest("b", "a")).toBe("ba");
    
// });


// // arrays
// // add to the back
// test('arraysback', () => {
//     expect(functions.arrayTest(7)).toBe(7); // Consider the edge cases
    
    
// });
// // add to the front

// test('arraysfront', () => {
//     expect(functions.arrayTestFront(5)).toBe(5); // Consider the edge cases
    
    
// });


// // update values
// test('arraysUpdate Values', () => {
//     expect(functions.arrayUpdate(8, 3)).toBe(8); // Consider the edge cases
    
    
// });

// // loops 
// // for
// test('for loop', () => {
//     expect(functions.myForLoop(7)).toBe(12); 
    
    
// });


// // for/in
// test('check forin', () => {
//     expect(functions.forInFunction("")).toBe("Archibald Shazam Unicycle "); 
    
// });

// // while
// test('While loop test', () => {
//     expect(functions.myWhileLoop(4)).toBe[0, 1, 2, 3];
// });

// // do while
// test('Do While Test', () => {
//     expect(functions.doWhile(0)).toBe[1];
//     expect(functions.doWhile(4)).toBe[0, 1, 2, 3];
// });

// forEach array
test('For Each Test', () => {
    expect(functions.forEachFunc["hi", "hello", "howdy"]).toBe["hi!", "hello!", "howdy!"]
})
// forEach function
// Objects / Dictionaries
// declare object
// lookup key to retrieve value
