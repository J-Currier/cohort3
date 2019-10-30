
const functions = {
    
    size: (num) => {
        if (num < 0) return "negative";
        if (num < 10) return "small";
        if (num < 20) return "medium";
        if (num < 100) return "large";
        return "extra large";
    },

    add: (num1, num2) => {
        return num1 + num2;
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    },


     // Calculator
    // Calculator
    // Calculator
    
    // calculatorFunction: (a) => {
    //     let typedInput = document.getElementById("calcinput").value;
    //     document.getElementById("calcinput").value = "";
        
    //     let answer = typedinput;
    
    // },


    
};

export default functions;
