import { City, Community } from "./city.js";
import functions from './cityDOM.js';
// import { conditionalExpression } from "@babel/types";

const newComm = new Community('myCommunity');
console.log(newComm);


myCityCardsId.addEventListener('click', function(){
    let cityKey = parseInt(event.target.parentNode.getAttribute('key'));

    if (event.target.value == 'increasePop') {
        let amount = parseFloat(event.target.parentNode.children[2].value);
        let cityArr = newComm.cityList.map(function(param){return param.key;});  
        let index = cityArr.indexOf(cityKey);
        newComm.cityList[index].movedIn(amount);
        console.log('new population', newComm.cityList[index].population);
        let newPopulation = newComm.cityList[index].population
        event.target.parentNode.children[1].innerHTML = `Your population is ${newPopulation}`;
    };
    if (event.target.value == 'decreasePop') {
        let amount = parseFloat(event.target.parentNode.children[2].value);
        let cityArr = newComm.cityList.map(function(param){return param.key;});  
        let index = cityArr.indexOf(cityKey);
        newComm.cityList[index].movedOut(amount);
        console.log('new population', newComm.cityList[index].population);
        let newPopulation = newComm.cityList[index].population
        event.target.parentNode.children[1].innerHTML = `Your population is ${newPopulation}`;
    };
    if (event.target.value == 'deleteCity') {
        let cityArr = newComm.cityList.map(function(param){return param.key;});  
        let index = cityArr.indexOf(cityKey);
        let cityName = newComm.cityList[index].cityName;
        newComm.removeCity(cityName);
        let divToDelete = event.target.parentNode;
        divToDelete.remove();
    };
});
// add lat and long get and put in function
addCityButton.addEventListener('click', function() {
    let newCityName= document.getElementById('newCityName').value;
    let newCityPopulation = parseFloat(document.getElementById('newCityPopulation').value);
    document.getElementById('newCityName').value = '';
    document.getElementById('newCityPopulation').value = '';
    // let newCityCard = functions.createNewCardFunction( newCityName, newCityPopulation, newComm.counter);
    newComm.createNewCity(newCityName, newCityPopulation);
    console.log(newComm.cityList.length);
    let newCityCard = functions.createNewCardFunction( newCityName, newCityPopulation, this.key);
    myCityCardsId.insertBefore(newCityCard, myCityCardsId.childNodes[0]);
    console.table(newComm.cityList);
});

mostNortherly.addEventListener('click', function() {
    let mostNortherlyCity = newComm.mostNorthern();
    textdisplay.innerHTML = `The northern most city is <b>${mostNortherlyCity.name}</b> `;
});

mostSouthernly.addEventListener('click', function() {
    let mostSouthernlyCity = newComm.mostSouthern();
    textdisplay.innerHTML = `The southern most city is <b>${mostSouthernlyCity.name}</b> `;
});

totalPop.addEventListener('click', function() {
    console.log('sum');
    let totalPop = newComm.getPopulation();
    textdisplay.innerHTML = `The total population of your community is <b>${totalPop}</b>`;
});





// do i need to comment out this line?
export default newComm;

