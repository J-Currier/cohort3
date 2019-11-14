import newUser from './index.js';


const functions = {

    createNewCardFunction: (newAccountName, newAccountBalance, counter) => {
        

        let intAccountBalance = parseInt(newAccountBalance);
        let currencyBalance = intAccountBalance.toFixed(2);

        

        const newAccountCard = document.createElement('div');
        newAccountCard.setAttribute('class', 'cards');
        newAccountCard.setAttribute('id', newAccountName);
        newAccountCard.setAttribute('value', counter);
        console.log(newAccountCard);

        let titleDiv = document.createElement('div');
        titleDiv.setAttribute('class', 'accountCardHeader')
        let newId = newAccountName + 'Title';
        titleDiv.setAttribute('id', newId);
        titleDiv.innerHTML = newAccountName;
        newAccountCard.appendChild(titleDiv);

        let balanceDiv = document.createElement('div');
        balanceDiv.setAttribute('class', 'accountCardBalance')
        let newBalId = newAccountName + 'Balance';
        balanceDiv.setAttribute('id', newBalId);
        balanceDiv.innerHTML = `Your balance is $${currencyBalance}`;
        newAccountCard.appendChild(balanceDiv);

        let newCardDiv = document.createElement('div');
        newCardDiv.setAttribute('class', 'accountCardButtons')
        let newCardDivId = newAccountName + 'CardButtons';
        newCardDiv.setAttribute('id', newCardDivId);
        newAccountCard.appendChild(newCardDiv);

        let inputField = document.createElement('input');
        inputField.setAttribute('class', 'amountInput')
        let newInputId = newAccountName + 'input';
        inputField.setAttribute('id', newInputId);
        inputField.setAttribute('placeholder', 'enter amount');
        newAccountCard.appendChild(inputField);

        let brTag = document.createElement('br');
        newAccountCard.appendChild(brTag);

        let depositbutton = document.createElement('button');
        depositbutton.setAttribute('class', 'buttons');
        depositbutton.innerHTML = 'Deposit';
        depositbutton.value = 'deposit';
        newAccountCard.appendChild(depositbutton);


        let withdrawbutton = document.createElement('button');
        withdrawbutton.setAttribute('class', 'buttons');
        withdrawbutton.innerHTML = 'Withdraw';
        withdrawbutton.value = 'withdraw';
        newAccountCard.appendChild(withdrawbutton);

        let deletebutton = document.createElement('button');
        deletebutton.setAttribute('class', 'buttons');
        deletebutton.innerHTML = 'DELETE';
        deletebutton.value = 'delete';
        newAccountCard.appendChild(deletebutton);



       
        myAccountCardsId.insertBefore(newAccountCard, myAccountCardsId.childNodes[0]);

        // return newAccountCard;

    },

    depositFunction: (accountName, amount) => {

        console.log("the deposit function")
        console.log(newUser);
    },

    withdrawFunction: (accountName, amount) => {
        console.log("the wd function")

    },

    deleteFunction: (accountName) => {
        console.log("the delete function")

    },

    



}


export default functions;