import { Account, AccountController } from "./account.js";


test('account check', () => {
    const savings = new Account("savings", 25);
    expect(savings.balance).toEqual(25);
    savings.deposit(10);
    expect(savings.balance).toEqual(35);
    savings.withdraw(30);
    expect(savings.balance).toEqual(5);
});

test('balance', () => {
    const savings2 = new Account("savings2", 25);
    expect(savings2.balance).toEqual(25);
});

test('account controller', () => {
    const divElement = document.createElement('div');
    divElement.setAttribute('id', "myAccountCardsId");

    const PeterPan = new AccountController('Peter', 'Pan');

    PeterPan.createNewAccount('savings', 100);
    PeterPan.createNewAccount('chequeing', 100);
    expect(PeterPan.clientName).toEqual('Peter Pan');
    expect(PeterPan.accountList.length).toEqual(2);
    PeterPan.removeAccount('chequeing');
    expect(PeterPan.accountList.length).toEqual(1);
    PeterPan.createNewAccount('cheq2',220);
    expect(PeterPan.sumAccounts()).toStrictEqual('320.00');
    let highestBallance = PeterPan.highestBalance();
    expect(highestBallance.balance).toEqual(220.00);
    let lowestBalanceA = PeterPan.lowestBalance();
    console.log(lowestBalanceA, 'test');
    expect(lowestBalanceA.balance).toEqual(100.00);

});