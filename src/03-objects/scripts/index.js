import { Account } from "./account.js";
// import { functionExpression } from "@babel/types";

let savingsAccount = new Account('Savings Account', 0);
// console.log(savingsAccount);




depositButton.addEventListener('click', function() {
    savingsAccount.deposit(document.getElementById('depositAmount').value)
    document.getElementById('currentBalance').innerHTML = `Current Balance: $ ${parseInt(savingsAccount.balance).toFixed(2)}`
    console.log('deposit button clicked')
    console.log(savingsAccount);

});

withdrawlButton.addEventListener('click', function() {
    console.log('withdrawl button clicked')
});
