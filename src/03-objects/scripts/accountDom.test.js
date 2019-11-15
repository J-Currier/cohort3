import functions from "./accountDOM.js";

test('Dom test', () => {
    const divElement = document.createElement('div');
    divElement.setAttribute('id', "myAccountCardsId");
    let newAccountCard = functions.createNewCardFunction( 'Savings', 100, 0);

    console.log(divElement, 'parent');
    console.log(newAccountCard, 'acccard');
    divElement.appendChild(newAccountCard);
    expect(divElement.children.length).toEqual(1);
});
