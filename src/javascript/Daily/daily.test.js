import functions from './daily.js'
import { tsExternalModuleReference, exportAllDeclaration } from '@babel/types'


// //2019-10-6 Daily Exercise
// test('check parameters', () => {
//     expect(functions.assertEquals("a","b")).toBe(false); // Consider the edge cases
//     expect(functions.assertEquals("a","a")).toBe(true);
//     expect(functions.assertEquals(1,2)).toBe(false);
//     expect(functions.assertEquals(2,2)).toBe(true); 
//     expect(functions.assertEquals("2",2)).toBe(false);
//     expect(functions.assertEquals("This value","This value")).toBe(true);

// });

// test('practice test', () => {
//     console.log("hello world");

// });

// //2019-10-9 Daily Exercise
// test('email builder from an array', () => {
//     const name = ["first", "last"];
//     expect(functions.makeEmailArr(name))
//         .toEqual("first.last@evolveu.ca");
//     expect(functions.makeEmailArr(["First", "Last"]))
//         .toEqual("first.last@evolveu.ca");
//     expect(functions.makeEmailArr(["Bill", "Smith"]))
//         .toEqual("bill.smith@evolveu.ca");
// });

// // 2019-10-15 Daily Exercise
// test('for loop', () => {
//     expect(functions.forloopdaily(5)).toEqual([0, 1, 2, 3, 4]);
// });

// test('while loop', () => {
//     expect(functions.whileLoop(5)).toEqual("01234");
// });

test('do while loop', () => {
    expect(functions.doWhileLoop(0)).toEqual([0]);
    expect(functions.doWhileLoop(3)).toEqual([0, 1, 2]);
});
