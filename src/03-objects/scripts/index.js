import { Account, AccountController } from "./account.js";
import functions from './accountDOM.js';

const newUser = new AccountController('New', 'User');
console.log(newUser);


myAccountCardsId.addEventListener('click', function(){
    console.log(this.value);


});

addAccountButton.addEventListener('click', function() {
    let newAccountName= document.getElementById('newAccountName').value;
    let newAccountBalance = document.getElementById('newAccountBalance').value;
    document.getElementById('newAccountName').value = '';
    document.getElementById('newAccountBalance').value = '';
    newUser.createNewAccount(newAccountName, newAccountBalance);
    console.table(newUser.accountList);
    // let newCardDiv = functions.createNewCardFunction(newAccountName, newAccountBalance, newUser);
    // myAccountCardsId.insertBefore(newCardDiv, myAccountCardsId.childNodes[0]);
    

});





export default newUser;


