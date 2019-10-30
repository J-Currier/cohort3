// import { arrowFunctionExpression } from "@babel/types";

const functions = {
    // divClickFunction: () => {
    //     let divPosition = event.target;
    //     return 0;
    // },

    showButtonFunc: (value) => {
        let myString = value;
        return myString;

    },

    addButtonFunction: (newDiv) => {
        const newListItem = document.createElement('li');
        newListItem.innerHTML = "Next thing";
        let list = document.getElementById('olTag');
        list.insertBefore(newListItem, list.childNodes[0]);
    },

    // Cards exercise Functions


    createNewCardFunction: () => {
        let cardNumberArray = functions.cardIdArrayFunction();
        let highestCardNumber;
        if (cardNumberArray.length == 0) {
            highestCardNumber = 0;
        } else {
            highestCardNumber = Math.max(...cardNumberArray);
        };
        
        let newCardNumber = highestCardNumber + 1;

        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'addedCards');
        newDiv.setAttribute('id', newCardNumber)
        newDiv.innerHTML = "Card " + newCardNumber + "<br />";

        let deletebutton = document.createElement('button');
        deletebutton.setAttribute('class', 'domButtons delete');
        deletebutton.innerHTML = 'Delete Card';
        deletebutton.id = "Delete";
        deletebutton.value = newCardNumber;

        newDiv.appendChild(deletebutton);

        let addBeforebutton = document.createElement('button');
        addBeforebutton.setAttribute('class', 'domButtons addBefore');
        addBeforebutton.innerHTML = 'Add Before Card';
        addBeforebutton.value = newCardNumber;
        addBeforebutton.id = "addBefore";
        newDiv.appendChild(addBeforebutton);

        let addAfterbutton = document.createElement('button');
        addAfterbutton.setAttribute('class', 'domButtons addAfter');
        addAfterbutton.innerHTML = 'Add Card After';
        addAfterbutton.value = newCardNumber;
        addAfterbutton.id = 'addAfter';
        newDiv.appendChild(addAfterbutton);

        addAfterbutton.addEventListener('click', function(){
            functions.addAfterPlacementFunction(this.value);
        });

        addBeforebutton.addEventListener('click', function(){
            functions.addBeforePlacementFunction(this.value);
        });

        deletebutton.addEventListener('click', function() {
            let divToDelete = document.getElementById(this.value);
            divToDelete.remove();

        })
        return newDiv;

    },

    addAfterPlacementFunction: (cardValue) => {
        let newDiv = functions.createNewCardFunction();
        let cardNumberArray = functions.cardIdArrayFunction();
        let indexOfCardClicked = cardNumberArray.indexOf(cardValue);
        leftPanelCardsID.insertBefore(newDiv, leftPanelCardsID.childNodes[indexOfCardClicked + 1]);
    },

    addBeforePlacementFunction: (cardValue) => {
        let newDiv = functions.createNewCardFunction();
        let cardNumberArray = functions.cardIdArrayFunction();
        let indexOfCardClicked = cardNumberArray.indexOf(cardValue);
        leftPanelCardsID.insertBefore(newDiv, leftPanelCardsID.childNodes[indexOfCardClicked]);
    },




    originalAddButton: () => {
        let newDiv = functions.createNewCardFunction();
        leftPanelCardsID.insertBefore(newDiv, leftPanelCardsID.childNodes[0]);
    },

    cardIdArrayFunction: (leftPan) => {
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