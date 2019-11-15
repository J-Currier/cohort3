import functions from './accountDOM.js';

class Account {
    constructor(accountName, balance, key) {
        this.accountName = accountName;
        this.balance = parseFloat(balance);
        this.key = Number(key);
    }

    deposit(depositAmount) {
        this.balance = this.balance + parseInt(depositAmount);

    }

    withdraw(withdrawlAmount) {
        this.balance = this.balance - withdrawlAmount;
    }

    balance() {
        return this.balance;
    }
}

class AccountController {
    constructor(firstName, lastName) {
            this.clientName = firstName + ' ' + lastName;
            this.accountList = [];
            this.counter = 0;
            console.log(this);
    }

    createNewAccount(accountName, startingBalance) {

        this.accountList.push(new Account(accountName, startingBalance, this.counter));
        // functions.createNewCardFunction(accountName, startingBalance, this.counter);
        this.counter ++;
        // filter(account => account.name === name)[0]
    }

    removeAccount(deleteAccount) {
        this.accountList = this.accountList.filter((arr) => arr.accountName != deleteAccount);
    }

    sumAccounts() {
        let myArr = [];
        this.accountList.forEach((element) => {
            myArr.push(element.balance);
            return myArr;
        });
        let accountTotals= myArr.reduce((acc, cur) => acc + cur);
        return accountTotals.toFixed(2);
    }

    highestBalance() {
        let highestValue = Math.max.apply(Math, this.accountList.map(function(param){return param.balance;}));
        // add filter to create arr of savings with highest balances
        let highestAccount = this.accountList.find(function(param){ return param.balance == highestValue; });
        return (highestAccount);
    }

    lowestBalance() {
        let lowestValue = Math.min.apply(Math, this.accountList.map(function(param){return param.balance;}));
        let lowestAccount = this.accountList.find(function(param){ return param.balance == lowestValue; });
        return (lowestAccount);

    }

}


export { Account, AccountController}