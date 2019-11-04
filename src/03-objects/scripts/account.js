
class Account {
    constructor(accountName, balance) {
        this.accountName = accountName
        this.balance = balance;
    }

    deposit(depositAmount) {
        this.balance = this.balance + depositAmount;

    }

    withdraw(withdrawlAmount) {
        this.balance = this.balance - withdrawlAmount;
    }

    balance() {
        return this.balance;
    }
}

class AccountController {

    createNewAccount(accountName, startingBalance) {
        console.log('new accoutn created')
    }

    removeAccount(accountName) {
        console.log("account removed");
    }

    sumAccounts() {
        console.log('Account total');
    }

    highestBalance() {
        console.log('Account with highest Balance');
    }

    lowestBalance() {
        console.log('Account with lowest balance');
    }

}
export { Account, AccountController }