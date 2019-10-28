// import { functionExpression } from "@babel/types";
import functions from "./functions.js";


// this is for the event listeners

domBoxID.addEventListener('click', function() {
    functions.divClickFunction()
});

showButton.addEventListener('click', function() {
    functions.showButtonFunc(this.id);
});

addButton.addEventListener('click', function() {
    functions.addButtonFunction();
});

// cards exercise

addCardButton.addEventListener('click', function() {
    functions.originalAddButton();
});



