import { City } from "./city.js";


test('account check', () => {
    const newCity = new City("My City", 51.0447, 114.0719, 1234567, 1);
    expect(newCity.name).toEqual("My City");
    expect(newCity.latitude).toEqual(51.0447);
    expect(newCity.show()).toEqual("My City 51.0447 114.0719 1234567");
    newCity.movedIn(1);
    expect(newCity.population).toEqual(1234568);
    newCity.movedOut(2);
    expect(newCity.population).toEqual(1234566);

});

// test('balance', () => {
//     const savings2 = new Account("savings2", 25);
//     expect(savings2.balancer()).toEqual(25);
// });

// test('account controller', () => {
//     const divElement = document.createElement('div');
//     divElement.setAttribute('id', "myAccountCardsId");

//     const PeterPan = new AccountController('Peter', 'Pan');

//     PeterPan.createNewAccount('savings', 100);
//     PeterPan.createNewAccount('chequeing', 100);
//     expect(PeterPan.clientName).toEqual('Peter Pan');
//     expect(PeterPan.accountList.length).toEqual(2);
//     PeterPan.removeAccount('chequeing');
//     expect(PeterPan.accountList.length).toEqual(1);
//     PeterPan.createNewAccount('cheq2',220);
//     expect(PeterPan.sumAccounts()).toStrictEqual('320.00');
//     let highestBallance = PeterPan.highestBalance();
//     expect(highestBallance.balance).toEqual(220.00);
//     let lowestBalanceA = PeterPan.lowestBalance();
//     console.log(lowestBalanceA, 'test');
//     expect(lowestBalanceA.balance).toEqual(100.00);

// });