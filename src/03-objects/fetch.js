const functions = {

    getFirstName: (data) => {
        let name = data[0].name;
        return name;
    },

    getAllFirstNames: (data) => {
        let myArr = [];
        for (let item of data) {
            myArr.push(item.name);
        };
        return myArr;
    },
// async function
};

export default functions;

