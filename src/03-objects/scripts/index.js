import { Account, AccountController } from "./account.js";
// import { functionExpression } from "@babel/types";

let savingsAccount = new Account('Savings Account', 0);

depositButton.addEventListener('click', function() {
    savingsAccount.deposit(document.getElementById('depositAmount').value)
    document.getElementById('currentBalance').innerHTML = `Current Balance: $ ${parseInt(savingsAccount.balance).toFixed(2)}`
    document.getElementById('depositAmount').value = "";
});

withdrawlButton.addEventListener('click', function() {
    savingsAccount.withdraw(document.getElementById('withdrawAmount').value)
    document.getElementById('currentBalance').innerHTML = `Current Balance: $ ${parseInt(savingsAccount.balance).toFixed(2)}`
    document.getElementById("withdrawAmount").value = '';
});


