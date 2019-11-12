import functions from './subtractor.js'

test('binarySubtractor', () => {
    expect(functions.binarySubtract(0,0,0)).toEqual([0,0]);
    expect(functions.binarySubtract(0,1,0)).toEqual([1,1]);
    expect(functions.binarySubtract(1,0,0)).toEqual([1,0]);
    expect(functions.binarySubtract(0,0,1)).toEqual([1,1]);
    expect(functions.binarySubtract(1,1,0)).toEqual([0,0]);
    expect(functions.binarySubtract(1,1,1)).toEqual([1,1]);
});

test('binaryOutside', () => {
    expect(functions.binaryOutside('1101','010')).toEqual("1011");
    expect(functions.binaryOutside('110110','1101')).toEqual("101001");
    expect(functions.binaryOutside('1101', '0')).toEqual("1101");
    expect(functions.binaryOutside('1101101','')).toEqual("1101101");

});