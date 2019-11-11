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
    // AccountController.creatNewAccount('chequing', 100)
    expect(AccountController.createNewAccount('chequing', 100)).toEqual(100);
});