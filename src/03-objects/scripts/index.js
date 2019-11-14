import { Account, AccountController } from "./account.js";
import functions from './accountDOM.js';
// import { conditionalExpression } from "@babel/types";

const newUser = new AccountController('New', 'User');
console.log(newUser);


myAccountCardsId.addEventListener('click', function(){
    let accountKey = parseInt(event.target.parentNode.getAttribute('key'));

    if (event.target.value == 'deposit') {
        let amount = event.target.parentNode.children[2].value;
        let accountArr = newUser.accountList.map(function(param){return param.key;});  
        let index = accountArr.indexOf(accountKey);
        newUser.accountList[index].deposit(amount);
        
        depositbutton.innerHTML = 'Deposit';


    };
    


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


