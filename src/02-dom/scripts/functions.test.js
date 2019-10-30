import functions from "./functions.js";

// test('divClick', () => {
//     expect(functions.divClickFunction(0)).toBe(0);

// });

test('addAfterButtonForCards', () => {
    const divElement = document.createElement('div');
    divElement.setAttribute('id', "leftPanelCardsID");
    document.body.append(divElement);
    let card1= functions.createNewCardFunction();
    divElement.append(card1);
    document.getElementById('addAfter').click();
    expect(divElement.children.length).toBe(2);
    divElement.remove();
});

test('addbeforeButtonForCards', () => {
    const divElement = document.createElement('div');
    divElement.setAttribute('id', "leftPanelCardsID");
    document.body.append(divElement);
    let card1= functions.createNewCardFunction();
    divElement.append(card1);
    document.getElementById("addBefore").click();
    expect(divElement.children.length).toBe(2);
    divElement.remove();
});

test('deletecardButtonForCards', () => {
    const divElement = document.createElement('div');
    divElement.setAttribute('id', "leftPanelCardsID");
    document.body.append(divElement);
    let card1= functions.createNewCardFunction();
    divElement.append(card1);
    document.getElementById("Delete").click();
    expect(divElement.children.length).toBe(0);
    divElement.remove();
});

test('showButton', () => {
    expect(functions.showButtonFunc("showButton")).toBe("showButton");
});

test('addButton', () => {
    const divElement = document.createElement('ol');
    divElement.id = 'olTag';
    document.body.append(divElement);
    const newItem = document.createElement('li');
    newItem.innerHTML = "test";
    divElement.insertBefore(newItem, divElement.childNodes[0]);
    console.log("test",  divElement.id);
    functions.addButtonFunction(divElement);
    expect(divElement.children.length).toBe(2);
    divElement.remove();


});


test('createNewCard', () => {
    const divElement = document.createElement('div');
    divElement.setAttribute('id', "leftPanelCardsID");
    document.body.append(divElement);
    let card1= functions.createNewCardFunction();
    divElement.append(card1);
    let card2 = functions.createNewCardFunction();
    divElement.appendChild(card2);
    let card3= functions.createNewCardFunction();
    divElement.append(card3);
    expect(divElement.children.length).toBe(3);
    divElement.remove();
});


test('addAfterPlacement', () => {
    const divElement = document.createElement('div');
    divElement.setAttribute('id', "leftPanelCardsID");
    document.body.append(divElement);
    let card1= functions.createNewCardFunction();
    divElement.append(card1);
    let card2 = functions.createNewCardFunction();
    divElement.appendChild(card2);
    let card3= functions.createNewCardFunction();
    divElement.append(card3);
    functions.addAfterPlacementFunction();
    expect(divElement.children.length).toBe(4);
    divElement.remove();
});

test('addBeforePlacementFunction', () => {

    const divElement = document.createElement('div');
    divElement.setAttribute('id', "leftPanelCardsID");
    document.body.append(divElement);
    let card1= functions.createNewCardFunction();
    divElement.append(card1);
    let card2 = functions.createNewCardFunction();
    divElement.appendChild(card2);
    functions.addBeforePlacementFunction();
    expect(divElement.children.length).toBe(3);
    divElement.remove();
});


test('originalAddButtonpleasework', () => {
    const divElement = document.createElement('div');
    divElement.setAttribute('id', "leftPanelCardsID");
    document.body.append(divElement);
    let card1= functions.createNewCardFunction();
    divElement.append(card1);
    let card2 = functions.createNewCardFunction();
    divElement.appendChild(card1);
    divElement.appendChild(card2);
    functions.originalAddButton();
    expect(divElement.children.length).toBe(3);
    divElement.remove();
});

test('cardIdArrayFunction', () => {
    const divElement = document.createElement('div');
    divElement.setAttribute('id', "leftPanelCardsID");
    document.body.append(divElement);
    let card1= functions.createNewCardFunction();
    divElement.append(card1);
    let card2 = functions.createNewCardFunction();
    divElement.appendChild(card1);
    divElement.appendChild(card2);
    expect(functions.cardIdArrayFunction(divElement)).toEqual(["1", "2"]);
    divElement.remove();
});
