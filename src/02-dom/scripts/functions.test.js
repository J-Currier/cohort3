import functions from "./functions.js";

test('divClick', () => {
    expect(functions.divClickFunction(5)).toBe(0);

});

test('showButton', () => {
    expect(functions.showButtonFunc(5)).toBe(0);
});