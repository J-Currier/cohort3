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

    addCardFunction: () => {
        let cardNumberArray = functions.cardIdArrayFunction();
        console.log(cardNumberArray);
        let highestCardNumber = Math.max(...cardNumberArray);
        console.log(highestCardNumber);
        let newDiv = functions.createNewCardFunction(highestCardNumber);
        console.log(newDiv);
    },

    createNewCardFunction: (highestCardNumber) => {
        return "hi";
    },

    cardIdArrayFunction: () => {
        let cardChildren = leftPanelCardsID.children;
        let cardChildrenLength = document.getElementById('leftPanelCardsID').children.length
        let cardNumberArray = [];
        for (let i = 0; i < cardChildrenLength; i++) {
            cardNumberArray.push(cardChildren[i].id);
        };
        return cardNumberArray;


    // const newDiv = document.createElement('div');
    // newDiv.setAttribute('class', 'insideBoxes');
    // newDiv.setAttribute('counter', counterNum)
    // newDiv.textContent = "counter is " + counterNum;

    // input.appendChild(newDiv);
    // console.log(newDiv);
    // return counterNum;

    },
}


export default functions;