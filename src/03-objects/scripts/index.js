import { Account } from "./account.js";

let savingsAccount = new Account('Savings Account', 0);
// console.log(savingsAccount);

depositButton.addEventListener('click', function() {
    console.log('deposit button clicked')
    console.log(savingsAccount);

});

withdrawlButton.addEventListener('click', function() {
    console.log('withdrawl button clicked')
});
