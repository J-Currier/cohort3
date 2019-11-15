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
    newUser.createNewAccount(newAccountName, newAccountBalance);
    console.table(newUser.accountList);
    // let newCardDiv = functions.createNewCardFunction(newAccountName, newAccountBalance, newUser);
    // myAccountCardsId.insertBefore(newCardDiv, myAccountCardsId.childNodes[0]);
    

});





export default newUser;


