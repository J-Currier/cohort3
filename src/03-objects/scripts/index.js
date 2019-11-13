import { Account, AccountController } from "./account.js";
import functions from './accountDOM.js';
// import { functionExpression } from "@babel/types";

const newUser = new AccountController('New', 'User');

addAccountButton.addEventListener('click', function() {
    let newAccountName= document.getElementById('newAccountName').value
    let newAccountBalance = document.getElementById('newAccountBalance').value
    document.getElementById('newAccountName').value = '';
    document.getElementById('newAccountBalance').value = '';
    newUser.createNewAccount(newAccountName, newAccountBalance)
    console.table(newUser.accountList);
    let newCardDiv = functions.createNewCardFunction(newAccountName, newAccountBalance);
    myAccountCardsId.insertBefore(newCardDiv, myAccountCardsId.childNodes[0]);
});






