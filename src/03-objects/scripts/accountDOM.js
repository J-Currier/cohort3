

const functions = {

    createNewCardFunction: (newAccountName, newAccountBalance, counter) => {
        

        let intAccountBalance = parseFloat(newAccountBalance);
        let currencyBalance = intAccountBalance.toFixed(2);

        

        const newAccountCard = document.createElement('div');
        newAccountCard.setAttribute('class', 'cards');
        newAccountCard.setAttribute('id', newAccountName);
        newAccountCard.setAttribute('key', counter);
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

        let inputField = document.createElement('input');
        inputField.setAttribute('class', 'amountInput');
        inputField.setAttribute('type', 'text')

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

        return newAccountCard;
    },

   

    



}


export default functions;

