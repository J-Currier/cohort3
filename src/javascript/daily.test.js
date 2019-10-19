import functions from './daily.js'
import { tsExternalModuleReference, exportAllDeclaration } from '@babel/types'


//2019-10-6 Daily Exercise
test('check parameters', () => {
    expect(functions.assertEquals("a","b")).toBe(false); // Consider the edge cases
    expect(functions.assertEquals("a","a")).toBe(true);
    expect(functions.assertEquals(1,2)).toBe(false);
    expect(functions.assertEquals(2,2)).toBe(true); 
    expect(functions.assertEquals("2",2)).toBe(false);
    expect(functions.assertEquals("This value","This value")).toBe(true);

});

test('practice test', () => {
    console.log("hello world");

});

//2019-10-9 Daily Exercise
test('email builder from an array', () => {
    const name = ["first", "last"];
    expect(functions.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj(["First", "Last"]))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj(["Bill", "Smith"]))
        .toEqual("bill.smith@evolveu.ca");
});

// 2019-10-15 Daily Exercise
test('for loop', () => {
    expect(functions.forloopdaily(5)).toEqual([0, 1, 2, 3, 4]);
});

test('while loop', () => {
    expect(functions.whileLoop(5)).toEqual("01234");
});

test('do while loop', () => {
    expect(functions.doWhileLoop(0)).toEqual([0]);
    expect(functions.doWhileLoop(3)).toEqual([0, 1, 2]);
});

test('for in loop', () => {
    expect(functions.forInLoop({fname:"John", lname:"Doe", age:25})).toEqual("JohnDoe25");
});

test('for of loop', () => {
    expect(functions.forOfLoop("hello there")).toEqual(11);
});

//2019-10-15 Daily Exercise
test('sliceEx', () => {
    expect(functions.sliceEx(["Banana", "Orange", "Lemon", "Apple", "Mango"])).toEqual(["Lemon", "Apple", "Mango"]);
});



test('forEach', () => {
    expect(functions.forEach(["Banana", "Orange", "Mango"])).toBe(3);
});

test('map', () => {
    expect(functions.mapping([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
});

test('filter', () => {
    expect(functions.filtering([1, 2, 3, 4])).toEqual([1, 2]);
});

test('reduce', () => {
    expect(functions.reducing([1, 2, 3, 4])).toEqual(10);
});

test('sort', () => {
    expect(functions.sorter(["Banana", "Orange", "Lemon", "Apple", "Mango"])).toEqual(["Apple", "Banana", "Lemon", "Mango", "Orange"]
    );
});
