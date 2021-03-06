import functions from "./tdd-01.js";

test('email Builder', () => {
    expect(functions.emailBuilder('larry', 'shumlich')).toBe("l.shumlich@evolveu.ca");

});


test('hello world console.log1', () => {
    console.log("Hello World 1");
});

test('hello world console.log2', () => {
    console.log("Hello World 2");
});

test('check a string to see if it is the same', () => {
    expect('abcd').toEqual('2abcde');
});

test('check an array see if it is the same', () => {
    expect([6, 2, 3, 4]).toEqual([1, 2, 3, 4]);
});
