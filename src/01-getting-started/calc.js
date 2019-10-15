const functions = {


    enterPressed: () => {
        let ans = "";
        let input1 = parseInt(document.getElementById("inputBox1").value);
        let input2 = document.getElementById("inputBox2").value;
        let input3 = parseInt(document.getElementById("inputBox3").value);
        if (input2 == "+") {
            console.log("+");
            ans = input1 + input3;
        } else if (input2 == "*") {
            console.log("*");
            ans = input1 * input3;
        } else if (input2 == "/") {
            console.log("/");
            ans = input1 / input3;
        } else if (input2 == "-") {
            console.log("-");
            ans = input1 - input3;
        } else {
            ans = "Error: Incorrect Operator"
        };
        document.getElementById('output1').innerHTML = input1 + input2 + input3 + "=";
        document.getElementById('output2').innerHTML = ans;
    };



    },
    
    // operator: (input2) => {
    //     if (input2 == "+") {
    //         return functions.adding(input1, input3);
    //     } 
    //     if (input2 == "*") {
    //         return functions.mult(input1, input3);
    //     }
    //     if (input2 == "/") {
    //         return functions.divide(input1, input3);
    //     }
    //     if (input2 == "-") {
    //         return functions.subtracting(input1, input3);
    //     }

    // },



    // mult: (a, b) => {
    //     return a*b;
    // },

    // divide: (a, b) => {
    //     return a/b;
    // },

    // adding: (a, b) => {
    //     return a + b;
    // },

    // subtracting: (a, b) => {
    //     return a - b;
    // },


};


export default functions