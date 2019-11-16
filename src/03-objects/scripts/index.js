import { Account, AccountController } from "./account.js";
import functions from './accountDOM.js';
// import { conditionalExpression } from "@babel/types";

const newUser = new AccountController('New', 'User');
console.log(newUser);


myAccountCardsId.addEventListener('click', function(){
    let accountKey = parseInt(event.target.parentNode.getAttribute('key'));

    if (event.target.value == 'deposit') {
        let amount = parseFloat(event.target.parentNode.children[2].value);
        let accountArr = newUser.accountList.map(function(param){return param.key;});  
        let index = accountArr.indexOf(accountKey);
        newUser.accountList[index].deposit(amount);
        console.log('new balance', newUser.accountList[index].balance);
        let newBalance = newUser.accountList[index].balance.toFixed(2)
        event.target.parentNode.children[1].innerHTML = `Your balance is $${newBalance}`;
    };
    if (event.target.value == 'withdraw') {
        let amount = parseFloat(event.target.parentNode.children[2].value);
        let accountArr = newUser.accountList.map(function(param){return param.key;});  
        let index = accountArr.indexOf(accountKey);
        newUser.accountList[index].withdraw(amount);
        console.log('new balance', newUser.accountList[index].balance);
        let newBalance = newUser.accountList[index].balance.toFixed(2)
        event.target.parentNode.children[1].innerHTML = `Your balance is $${newBalance}`;
    };
    if (event.target.value == 'delete') {
        let accountArr = newUser.accountList.map(function(param){return param.key;});  
        let index = accountArr.indexOf(accountKey);
        let accountName = newUser.accountList[index].accountName;
        newUser.removeAccount(accountName);
        let divToDelete = event.target.parentNode;
        divToDelete.remove();
    };

    


});

addAccountButton.addEventListener('click', function() {
    let newAccountName= document.getElementById('newAccountName').value;
    let newAccountBalance = parseFloat(document.getElementById('newAccountBalance').value);
    document.getElementById('newAccountName').value = '';
    document.getElementById('newAccountBalance').value = '';
    let newAccountCard = functions.createNewCardFunction( newAccountName, newAccountBalance, newUser.counter);

    newUser.createNewAccount(newAccountName, newAccountBalance);
    console.log(newUser.accountList.length);
    // let newAccountCard = functions.createNewCardFunction( newAccountName, newAccountBalance, this.key);
    myAccountCardsId.insertBefore(newAccountCard, myAccountCardsId.childNodes[0]);

    console.table(newUser.accountList);
});

highestAccount.addEventListener('click', function() {
    let highestAccount = newUser.highestBalance();
    textdisplay.innerHTML = `Your <b>${highestAccount.accountName}</b> account is your largest asset with a balance of <b>$${highestAccount.balance.toFixed(2)}</b>`;
});

lowestAccount.addEventListener('click', function() {
    let lowestAccount = newUser.lowestBalance();
    textdisplay.innerHTML = `Your <b>${lowestAccount.accountName} </b>account is your smallest asset with a balance of <b>$${lowestAccount.balance.toFixed(2)}</b>`;
});

sumAccount.addEventListener('click', function() {
    console.log('sum');
    let totalAccount = newUser.sumAccounts();
    textdisplay.innerHTML = `The total amount of your assests is <b>$${totalAccount}</b>`;
});






export default newUser;


