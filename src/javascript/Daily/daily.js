const functions = { 
    //functions object

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



// and before this comment ---



//2019-10-9 Daily Exercise

    makeEmailArr: (emailArrInput) => {
        let emailAddress = `${emailArrInput[0]}.${emailArrInput[1]}@evolveu.ca`;
        return emailAddress.toLowerCase();
    }

//2019-10-15 Daily Exercise
        // Let’s dig deeper into arrays. Read the documentation on the following and create examples of each one:

        // Basics
        // for
    forloopdaily: (myinput) => {
        return 7;
    };
        // while
        // do while
        // Next Level
        // for in
        // for of




};

export default functions;