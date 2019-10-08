// Your daily exercises create two files in  your repository:

// javascript/daily.test.js
// javascript/daily.js

// Follow good TDD practices to write this code.

// Write a function that will receive two parameters. The function will compare the parameters and do the following:

// if the two parameters are equal, log nothing and return true
// if the two parameters are not equal, log to the console the following and return false:

// “ *** the two values are not the same” and also log the two parameters as follows:
// 	“p1-->” parameter 1
// “p2-->” parameter 2

// Copy and paste the code provided. Only put code in-between the two comment lines.

/*	
	Write the function that will create this output:

*** the two values are not the same:
    p1--> a
    p2--> b
*** the two values are not the same:
    p1--> 1
    p2--> 2
*** the two values are not the same:
    p1--> 2
    p2--> 2
*/

// Write the function after this comment ---

function assertEquals(a, b) {
    if (a === b) {
        return true;
    } else {
        console.log("the two values are not the same:")
        console.log("p1--> " + a);
        console.log("p1--> " + b);
        return false;
    }
};

export default assertEquals;

// and before this comment ---

assertEquals("a","b");
assertEquals("a","a");
assertEquals(1,2);
assertEquals(2,2);
assertEquals("2",2);
assertEquals("This value","This value");