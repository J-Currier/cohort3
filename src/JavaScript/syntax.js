const functions = {
    
    // define attributes / variables// number
// string
// boolean
// array
// dictionary / objects
// undefined
    
    firstTest: (a) => {        
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
        return myArray[myArray.length - 1];
    },


// add to the front
    arrayTestFront: (a) => {
        let myArray = [];
        myArray.unshift(a);
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
            sum = myForLoopArray.reduce((cur, acc) => (acc + cur));
            
        };
        return sum;
    },
// for/in

    forInFunction: (forInInput) => {
        const loopObject = {
            firstName: "Archibald",
            lastName: "Shazam",
            car: "Unicycle"
        
        };
        let profile = "";
        for (let prop in loopObject) {
            profile += loopObject[prop] + " ";
            
        };
        return profile;
    },
// while

    myWhileLoop: (whileInput) => {
        let myArray = [];
        let i = 0;
        while(i < whileInput) {
            myArray.push(i);
            i++;

        };
        return myArray;
    },
// do while
    doWhile: (doWhileInput) => {
        let doArray = [];
        let i = 1;
        while(i < doWhileInput) {
            doArray.push(i);
            i++;

        };
        return doArray;
    },
    
// forEach array and function
    forEachFunc: (forEachInput) => {
        let forArray = forEachInput;
        let newArray = [];
        const doThisForEach = (item, index) => {
            
            newArray.push(item + "!");
            console.log(newArray);
        };
        forArray.forEach(doThisForEach);

    },

// Objects / Dictionaries

    objectTests: (objectInput) => {
        // declare object
        const daysOTheWeek = {
        Sunday: "Funday",
        Monday: "OneDay!",
        Tuesday: "Newsday",
        Wednesday: "Wed-Nes-Day...",
        Thursday: "It's the day of Thor!",
        Friday: "Freedom!!!!",
        Saturday: "Homework lol"
        };
        // lookup key to retrieve value
    return daysOTheWeek[objectInput];
    },

   







export default functions;


