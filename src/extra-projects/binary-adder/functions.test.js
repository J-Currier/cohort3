import functions from './functions.js'



test('binaryLogic', () => {
    expect(functions.binaryLogic(0,0,0)).toEqual([0,0]);
    expect(functions.binaryLogic(0,1,0)).toEqual([1,0]);
    expect(functions.binaryLogic(1,0,0)).toEqual([1,0]);
    expect(functions.binaryLogic(0,0,1)).toEqual([1,0]);
    expect(functions.binaryLogic(1,1,0)).toEqual([0,1]);
    expect(functions.binaryLogic(1,1,1)).toEqual([1,1]);
});

test('binaryOutside', () => {
    expect(functions.binaryOutside('010','1101')).toEqual(4);
});