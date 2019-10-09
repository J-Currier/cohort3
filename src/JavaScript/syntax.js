const functions = {
    
    // define attributes / variables// number
// string
// boolean
// array
// dictionary / objects
// undefined
    
    firstTest: (a) => {
        console.log(a);
        let numType =  typeof a;
            if (numType == "object") {
                Array.isArray(a) ? numType = "array" : numType = "object";
            }
        return numType;
    },

    

    
// sample if / else

    ifElse: (b) => {
        if (b < 3) {
            return true;
        } else {
            return false;
        }
    },
// functions
// parameters
// returns
funcTest: (a, b) => {
    return (a + b);
},

// arrays
// add to the end
arrayTest: (a) => {
    let myArray = [];
    myArray.push(a);
    console.log(myArray);
    return myArray[myArray.length - 1];
},


// add to the front
arrayTestFront: (a) => {
    let myArray = [];
    myArray.unshift(a);
    console.log(myArray);
    return myArray[myArray.length - 1];
},

// update values
arrayUpdate: (num, position) => {
    let myArray = [1, 2, 3, 4, 5];
    myArray[position - 1] = num;

    return myArray[position - 1];
},




// loops 
// for
myForLoop: (myForLoopVar) => {
    let myForLoopArray = [];
    let sum = 0;
    for (let i = 0; i < myForLoopVar; i += 2) {
        myForLoopArray.push(i);
        console.log(myForLoopArray);
        sum = myForLoopArray.reduce((cur, acc) => (acc + cur));
        
    };
    return sum;
},
// for/in
forInFunction: (forInInput) => {
    console.log("do something");
},
// while
// do while
// forEach (with array and function)
// Objects / Dictionaries
// declare object
// lookup key to retrieve value
}


export default functions;