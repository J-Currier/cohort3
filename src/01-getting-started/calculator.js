const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function inputDigit(digit) {
    const { displayValue } = calculator;
    calculator.displayValue = displayValue === "0" ? digit: displayValue + digit;
};

function inputDecimal(dot) {
    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    };
};

function handleOperator(nextOperator) {
    const {firstOperand, displayValue, operator } = calculator;
    const inputValue = parseFloat(displayValue);
    if (firstOperand === null) {
        calculator.firstOperand = inputValue;
    }
    calculator.waitingForSecondOperand =true;
    calculator.operator =nextOPerator;
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
        console.log('operator', target.value);
        return;
    }
    if (target.classList.contains('clear')) {
        console.log('clear', target.values);
        return;
    }
    if (target.classList.contains("decimal")) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }
    inputDigit(target.value);
    updateDisplay();
});

// const { target } = event;
// const target = event.target;
