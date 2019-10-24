// import { functionExpression } from "@babel/types";
import functions from "./functions.js";


// this is for the event listeners

domBoxID.addEventListener('click', function() {
    functions.divClickFunction()
});

showButton.addEventListener('click', function() {
    functions.showButtonFunc();
    console.log('show button clicked');
})