import assertEquals from './daily.js'

test('check parameters', () => {
    expect(assertEquals("a","b")).toBe(false); // Consider the edge cases
    expect(assertEquals("a","a")).toBe(true);
    expect(assertEquals(1,2)).toBe(false);
    expect(assertEquals(2,2)).toBe(true); 
    expect(assertEquals("2",2)).toBe(false);
    expect(assertEquals("This value","This value")).toBe(true);

});

test('practice test', () => {
    console.log("hello world");

});

