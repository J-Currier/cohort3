
const functions = {
    
    addCard: (input, counterNum) => {
    
        console.log("I am in add card");
        // input.textContent = "this is working"; ***this deletes the card each time
        // counterNum += 1;
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'insideBoxes');
        newDiv.setAttribute('counter', counterNum)
        newDiv.textContent = "counter is " + counterNum;

        input.appendChild(newDiv);
        console.log(newDiv);
        return counterNum;
    },

    whatCards: (input) => {
        let myArr = [];
        console.log(input.children);
        return 0;
    },


}


export default functions;