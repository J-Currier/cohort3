
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
export { Account }