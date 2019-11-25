


class City {
    constructor(name, latitude, longitude, population, key) {
        this.name = name;
        this.latitude = parseFloat(latitude);
        this.longitude = parseFloat(longitude);
        this.population = parseFloat(population);
        this.key = Number(key);
    }

   show() {
        let myStr = `${this.name} ${this.latitude} ${this.longitude} ${this.population}`;
        return myStr;
    }

    movedIn(popGrowth) {
        this.population = this.population + parseInt(popGrowth);
    }

    movedOut(popDecline) {
        this.population = this.population - parseInt(popDecline);
    }

    howBig() {
        if (this.population > 100000) {
            return 'City'
        }
        if (this.population > 19999 && this.population < 100001) {
            return 'Large Town'
        }
        if (this.population > 999 && this.population < 20000) {
            return 'Town'
        }
        if (this.population > 100 && this.population < 1000) {
            return 'Village'
        }
        if (this.population < 101) {
            return 'Hamlet'
        }
 
    }

//     withdraw(withdrawlAmount) {
//         this.balance = this.balance - withdrawlAmount;
//     }

//     balancer() {
//         return this.balance;
//     }
// }

// class AccountController {
//     constructor(firstName, lastName) {
//             this.clientName = firstName + ' ' + lastName;
//             this.accountList = [];
//             this.counter = 0;
//             console.log(this);
//     }

//     createNewAccount(accountName, startingBalance) {

//         this.accountList.push(new Account(accountName, startingBalance, this.counter));
//         // functions.createNewCardFunction(accountName, startingBalance, this.counter);
//         this.counter ++;
//         // filter(account => account.name === name)[0]
//     }

//     removeAccount(deleteAccount) {
//         this.accountList = this.accountList.filter((arr) => arr.accountName != deleteAccount);
//     }

//     sumAccounts() {
//         let myArr = [];
//         this.accountList.forEach((element) => {
//             myArr.push(element.balance);
//             return myArr;
//         });
//         let accountTotals= myArr.reduce((acc, cur) => acc + cur);
//         return accountTotals.toFixed(2);
//     }

//     highestBalance() {
//         let highestValue = Math.max.apply(Math, this.accountList.map(function(param){return param.balance;}));
//         // add filter to create arr of savings with highest balances
//         let highestAccount = this.accountList.find(function(param){ return param.balance == highestValue; });
//         return (highestAccount);
//     }

//     lowestBalance() {
//         let lowestValue = Math.min.apply(Math, this.accountList.map(function(param){return param.balance;}));
//         let lowestAccount = this.accountList.find(function(param){ return param.balance == lowestValue; });
//         return (lowestAccount);

//     }

}


export { City }