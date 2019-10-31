import functions from './functions.js'

test('this is a dummy test', () => {
    console.log('Hello from functions.test') ;
    expect(functions.dummyLog()).toBe(0);
});