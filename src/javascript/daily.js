const functions = { 
    //functions object

// callback part 2 
// Based on callback exercise, part 1, now write a function 
// using the generic callback function which returns an object 
// of the total number of people, total age, and the average age 
// of people from BC and Alberta only.


//2019-11-08 Daily Exercise Callback Exercise Part 1
    sortWest: (peopleArr, myFunction) => {
        console.log('hiJen')
        let count = 0;
        let westArr = [];
        for (let i = 0; i < peopleArr.length; i++) {
            if (peopleArr[i].province === "BC" || peopleArr[i].province === "AB") {
                westArr.push(peopleArr[i]);
            };
        };
        console.log(westArr);
        
        let myList = myFunction(westArr);
        return myList;
    },

    makeList: (westArr) => {
        let nameList = westArr.map((obj) => {
            let toAdd = obj.fname + ' ' + obj.lname;
            return toAdd;
        })
        // let toAdd = westArr.fname + ' ' + westArr.lname;
        // westArr.push(toAdd);
        return nameList;
        
    },
// 2019-10-29 Daily Exercise-More Array Exercises find balance and average

// write a function to receive the same array (staff) and return the total of balances
    staffBalance: (staffObject) => {
        let myArr = [];
        staffObject.forEach((element) => {
            myArr.push(element.balance);
            return myArr;
        });
        let total = myArr.reduce((acc, cur) => acc + cur);
        return total;

    
    },

// write a function to receive the same array (staff) and return the average the balances
    staffAverage: (dataObject) => {
       return functions.staffBalance(dataObject) /dataObject.length;;
    },

// 2019-10-25 Daily Exercise-Email list
    loopStaffForEach: (dataObject) => {
        let myArr = [];
        dataObject.forEach(function(element) {
            myArr.push(functions.emailCallBackFunction(element));
            return myArr;
        });
        return myArr;
        
    },

    loopStaffMap: (dataObject) => {
        let myArr = dataObject.map(functions.emailCallBackFunction);
        return myArr;
    },

    emailCallBackFunction: (staffObject) => {
        let emailAddress = `${staffObject.fname}.${staffObject.lname}@evolveu.ca`;
        return (emailAddress.toLowerCase());
    },


// 2019-10-21 Daily Exercise-Email list
    loopStaffOf: (dataobject) => {
        let myArr = [];
        for (let x of dataobject) {
            myArr.push(functions.makeEmailObj(x));
        };
        return myArr;
    },

    loopStaffIn: (dataobject) => {
        let myArr = [];
        for (let x in dataobject) {
            let staffObject = dataobject[x];
            let emailAddress = `${staffObject.fname}.${staffObject.lname}@evolveu.ca`;
            
            myArr.push(emailAddress.toLowerCase());
        };
        return myArr;
    },

// 2019-10-21 Daily Exercise-Email list
    loopStaff: (dataobject) => {
        let myArr = [];
        for (let x of dataobject) {
            myArr.push(functions.makeEmailObj(x));
        };
        return myArr;
    },

//2019-10-6 Daily Exercise

    assertEquals: (a, b) => {
        if (a === b) {
            return true;
        } else {
            console.log( `*** the two values are not the same:
            p1------> ${a}
            p2------> ${b}`);
            return false;
        };
    },




//2019-10-9 Daily Exercise

    makeEmailObj: (emailObjInput) => {
        // let myObj = (emailObjInput);
        let emailAddress = `${emailObjInput.fname}.${emailObjInput.lname}@evolveu.ca`;
        return emailAddress.toLowerCase();
    },

//2019-10-15 Daily Exercise
        // Let’s dig deeper into arrays. Read the documentation on the following and create examples of each one:

        // Basics
        // for
    forloopdaily: (myinput) => {
        let text = [];
        for (let i = 0; i < myinput; i ++) {
            text.push(i);
        };
        return text;
    },
        // while
    whileLoop: (wlinput) => {
        let myString = "";
        let i = 0;
        while (i < wlinput) {
            myString = myString + i;
            i++;

        };
        return myString;
    },
        // do while
    doWhileLoop: (dwlinput) => {
        let myArr = [];
        let i = 0;
        do {
            myArr.push(i);
            i ++;
        }
        while (i < dwlinput);
        return myArr;
    },

    
        // Next Level
        // for in
    forInLoop: (filInput) => {
        const  person = filInput;
        let string = "";
        for (let x in person) {
            string += person[x];
        };
        return string;
    },
        // for of
    forOfLoop: (foInput) => {
        const myString = foInput;
        let value = 0;
        for (let element of myString) {
            value += 1;
        };
        return value;
    },

//2019-10-15 Daily Exercise
// slice
    sliceEx: (input) => {
        let newArray = input.slice(2,5);
        return newArray;
    },
// splice
    splicer: (input) => {
        let myArr = input;
        myArr.splice(1, 2, "kiwi", "pumpkin", "grapes");
        return myArr
    },



// forEach
    forEach: (input) => {
        let fruits = input;
        let value = 0;
        const fruitFunction = (item, index) => {
            value += 1;
            
            
        };
        fruits.forEach(fruitFunction);
        return value;
    },
    

// map
    mapping: (input) => {
        let newArr = input.map(number => number*2);
        return newArr;
    },

// filter
    filtering: (input) => {
        let newArr = input.filter(number => number < 3);
        return newArr;
    },
// reduce
    reducing: (input) => {
        let newList = input.reduce((acc, cur) => acc + cur);
        return newList
    },

// sort
    sorter: (input) => {
        let sortedArr = input.sort();
        return sortedArr;
    },



};

export default functions;