import functions from "./functions.js";

test('divClick', () => {
    expect(functions.divClickFunction(5)).toBe(0);

});

test('showButton', () => {
    expect(functions.showButtonFunc(5)).toBe(4);
});

test('addButton', () => {
    expect(functions.addButtonFunction(5)).toBe(9);
});
