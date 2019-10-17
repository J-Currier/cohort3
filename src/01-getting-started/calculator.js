const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;
    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else { 
    calculator.displayValue = displayValue === "0" ? digit: displayValue + digit;
    };
    console.log(calculator);
};

function inputDecimal(dot) {
    if (calculator.waitingForSecondOperand === true) return;
    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    };
};

function handleOperator(nextOperator) {
    const {firstOperand, displayValue, operator } = calculator;
    const inputValue = parseFloat(displayValue);
    if (operator && calculator.waitingForSecondOperand) {
        calculator.operator = nextOperator;
        console.log(calculator);
        return;
    }
    if (firstOperand === null) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        const result = performCalculation[operator](firstOperand, inputValue);
    calculator.displayValue = String(result);
    calculator.firstOperand = result;
    }
    calculator.waitingForSecondOperand =true;
    calculator.operator = nextOperator;
    console.log(calculator);
}

const performCalculation = {
    "/": (firstOperand, secondOperand) => firstOperand / secondOperand,
    "x": (firstOperand, secondOperand) => firstOperand * secondOperand,
    "+": (firstOperand, secondOperand) => firstOperand + secondOperand,
    "-": (firstOperand, secondOperand) => firstOperand - secondOperand,
    "=": (firstOperand, secondOperand) => secondOperand,
};

function percentageFunction() {
    calculator.displayValue = parseFloat(calculator.displayValue) / 100;
    
};

function resetCalculator() {
    calculator.displayValue = "0";
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    console.log(calculator);
}

function updateDisplay() {
    const display = document.querySelector('.result');
    display.value = calculator.displayValue;

}

updateDisplay();
    
const keys = document.querySelector('.buttons');

keys.addEventListener('click', (event) => {
    const { target} = event;
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operation')) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }
    if (target.classList.contains('clear')) {
        resetCalculator();
        updateDisplay();
        return;
    }
    if (target.classList.contains("decimal")) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }
    if (target.classList.contains("percentage")){
        percentageFunction();
        updateDisplay();
        return;
    }
    inputDigit(target.value);
    updateDisplay();
});

// VVVVVVVV Canadian Tax Calculator Code VVVVVVVV



myButton.addEventListener('click', function() {
    console.log("button was pressed");
    let textInput = document.getElementById("incomeinput").value;
    let totTaxPaid = testFunctions.taxCalcTaxPayment(textInput);
    document.getElementById("outputtaxesans").innerHTML = "$ " + totTaxPaid;
    let totIncome = testFunctions.netIncome(textInput);
    document.getElementById("outputincomeans").innerHTML = "$ " + totIncome;
    let totrate = testFunctions.effectiveTaxRate(textInput);
    document.getElementById("outputtaxrateans").innerHTML = totrate + "%";
});


// function taxCalcButtonClick() {
//     console.log("button was pressed");
//     // let textInput = document.getElementById("incomeinput").value;
//     console.log("hi");
//     console.log(textInput);

//     // document.getElementById("outputtaxestext").innerHTML.HTML = taxCalcTaxPayment(textInput);
    
// };

const testFunctions = {


    
    taxCalcTaxPayment: (income) => {
        let taxesToPay = 0;
        if (income < 47630.01) {
            taxesToPay = income * .15
            return taxesToPay;
        };
        if (income > 47630.00 && income < 95259.01) {
            taxesToPay = 7144.5 + ((income - 47630) * .205);
            return taxesToPay;
        };
        if (income > 95259.00 && income < 147667.01) {
            taxesToPay = 16908.45 + ((income - 95259) * .26);
            return taxesToPay;
        };
        if (income > 147667.00 && income < 210371.01) {
            taxesToPay = 30534.53 + ((income - 147667) * .29);
            return taxesToPay;
        };
        if (income > 210371.00) {
            taxesToPay = 48718.69 + ((income - 210371) * .33);
            return taxesToPay;
        };
        console.log(taxesToPay);
        let netPay = income - taxesToPay;
        console.log("netpay" , netpay)
        

    },
    netIncome: (income) => {
        let taxes = testFunctions.taxCalcTaxPayment(income);
        let netPay = income - taxes;
        return netPay;

    },
    effectiveTaxRate: (income) => {
        let taxes = testFunctions.taxCalcTaxPayment(income);
        let effectTaxRate = taxes / income * 100;
        return effectTaxRate;
    }

}

// export default testFunctions;