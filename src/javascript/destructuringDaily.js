const functions = { 
    myNameArr: [],
    myGenderArr: [],
    myRegionArr: [],
    mySurnameArr: [],


    destrucFunction: (myArrOfPeople) => {
        for (let element of myArrOfPeople) {
            let {gender, name, region, surname } = element
            functions.myNameArr.push(name);
            functions.myGenderArr.push(gender);
            functions.myRegionArr.push(region);
            functions.mySurnameArr.push(surname)
        };

    },
};












export default functions;