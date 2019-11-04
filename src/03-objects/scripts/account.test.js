import { Account } from "./account.js";


test('account check', () => {
    const savings = new Account("savings", 25);
    expect(savings.balance).toEqual(25);
    savings.deposit(10);
    expect(savings.balance).toEqual(35);
    savings.withdraw(30);
    expect(savings.balance).toEqual(5);
});