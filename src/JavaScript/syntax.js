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
    }
// functions
// parameters
// returns
// arrays
// add to the front
// add to the end
// update values
// loops 
// for
// for/in
// while
// do while
// forEach (with array and function)
// Objects / Dictionaries
// declare object
// lookup key to retrieve value
}


export default functions;