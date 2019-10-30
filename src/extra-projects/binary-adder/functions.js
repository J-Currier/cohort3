const functions = {
    binaryOutside: (arr1, arr2) => {
        console.log(Math.max(arr1.length, arr2.length));
        let maxArrLength = Math.max(arr1.length, arr2.length);

        return maxArrLength
    },

    binaryLogic: (x, y, z) => {
        let b = 9;
        let myArr = [];

        if (x == 0 && y == 0 && z == 0) {
            b = 0;
            z = 0;
            myArr.push(b);
            myArr.push(z);
            return myArr;
        };
        if (((x || y == 1) || z == 1) && !(x && y == 1) && !(x && z == 1) && !(z && y == 1)) {
            b = 1;
            z = 0;
            myArr.push(b);
            myArr.push(z);
            return myArr;
        };
        if (((!x || !y ) || !z ) && !(!x && !y) && !(!x && !z) && !(!z && !y )) {
            b = 0;
            z = 1;
            myArr.push(b);
            myArr.push(z);
            return myArr;
        };
        if (x == 1 && y == 1 && z == 1) {
            b = 1;
            z = 1;
            myArr.push(b);
            myArr.push(z);
            return myArr;
        };

    },

};

export default functions;


