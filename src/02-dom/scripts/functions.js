// import { arrowFunctionExpression } from "@babel/types";

const functions = {
    divClickFunction: () => {
        let divPosition = event.target;
        console.log(divPosition);
        return 0;
    },

    showButtonFunc: () => {
        let children = olTag.children;
        for (let element of children) {
            console.log(element.innerHTML);
        };
        return 4;

    },

    addButtonFunction: () => {
        console.log("add button")
        const newListItem = document.createElement('li');
        newListItem.innerHTML = "Next thing";
        let list = document.getElementById('olTag');
        list.insertBefore(newListItem, list.childNodes[0]);
        return 9;
    },

    // Cards exercise Functions
    // original add button
    addCardFunction: () => {
        let cardNumberArray = functions.cardIdArrayFunction();
        console.log(cardNumberArray);
        let highestCardNumber = Math.max(...cardNumberArray);
        console.log("highest cars is", highestCardNumber);
        let newDiv = functions.createNewCardFunction(highestCardNumber);
        console.log(newDiv);
    },

    createNewCardFunction: (highestCardNumber) => {
        let newCardNumber = highestCardNumber + 1;
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'addedCards');
        newDiv.setAttribute('value', newCardNumber);
        newDiv.setAttribute('id', newCardNumber)
        newDiv.innerHTML = "Card " + newCardNumber + "<br />";
        leftPanelCardsID.insertBefore(newDiv, leftPanelCardsID.childNodes[0]);
        functions.createAddCardBeforeButton(newCardNumber);
        functions.createAddCardAfterButton(newCardNumber); 
        functions.createDeleteButton(newCardNumber); 
        console.log(newDiv);
        // leftPanelCardsID.insertBefore(newDiv, leftPanelCardsID.childNodes[0]);
    },

    addBeforeButtonFunction: () => {
        let cardNumberArray = functions.cardIdArrayFunction();
        console.log(cardNumberArray);
        let highestCardNumber = Math.max(...cardNumberArray);
        let newCardNumber = highestCardNumber + 1;
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'addedCards');
        newDiv.setAttribute('id', newCardNumber)
        newDiv.innerHTML = "Card " + newCardNumber + "<br />";
        // leftPanelCardsID.insertBefore(newDiv, leftPanelCardsID.childNodes[0]);
        functions.createAddCardBeforeButton(newCardNumber);
        functions.createAddCardAfterButton(newCardNumber); 
        functions.createDeleteButton(newCardNumber); 
        console.log(newDiv);

    },

    createDeleteButton: (newCardNumber) => {
        let button = document.createElement('button');
        button.setAttribute('class', 'domButtons delete');
        button.innerHTML = 'Delete Card';
        button.id = "Delete";
        let newCardID = document.getElementById(newCardNumber)
        newCardID.appendChild(button);
    },

    createAddCardBeforeButton: (newCardNumber) => {
        let button = document.createElement('button');
        button.setAttribute('class', 'domButtons addCard');
        button.innerHTML = 'Add Before';
        button.setAttribute('id', "addBeforeButton");
        let newCardID = document.getElementById(newCardNumber)
        newCardID.addEventListener('click', function(){
            console.log("button id", + event.target.id);
            functions.addBeforeButtonFunction();
        });
        newCardID.appendChild(button);
    },

    createAddCardAfterButton: (newCardNumber) => {
        let button = document.createElement('button');
        button.setAttribute('class', 'domButtons addCard');
        button.innerHTML = 'Add After';
        button.id = "addAfter";
        let newCardID = document.getElementById(newCardNumber)
        newCardID.appendChild(button);
    },

    cardIdArrayFunction: () => {
        let cardChildren = leftPanelCardsID.children;
        let cardChildrenLength = document.getElementById('leftPanelCardsID').children.length
        let cardNumberArray = [];
        for (let i = 0; i < cardChildrenLength; i++) {
            cardNumberArray.push(cardChildren[i].id);
        };
        return cardNumberArray;
    },
}


export default functions;