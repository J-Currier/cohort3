import functions from './functions.js';

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));


enterbutton.addEventListener('click', (() => {
    answerhere.textContent = functions.calculatorFunction(calcinput.value);
}));
