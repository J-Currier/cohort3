import functions from "./functions.js";

test('divClick', () => {
    expect(functions.divClickFunction('larry', 'shumlich')).toBe("l.shumlich@evolveu.ca");

});