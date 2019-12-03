import { City, Community } from "./city.js";
import functions from './cityDOM.js';
import { serverFunctions } from "./cityServerFunctions.js";


const newComm = new Community('myCommunity');
serverFunctions.loadData(newComm);

console.log(newComm.cityList, 'citlis');
if (newComm.cityList.length > 0) {
    newComm.citiesList.map((cit)=> {
    let newCityCard = functions.createNewCardFunction(cit.mame, cit.population, cit.latitude, cit.longitude, cit.key);
    myCityCardsId.insertBefore(newCityCard, myCityCardsId.childNodes[0]);
    } );
};

myCityCardsId.addEventListener('click', function(){
    console.log(event.target.parentNode.getAttribute('key'), 'pevent');
    let cityKey = parseInt(event.target.parentNode.getAttribute('key'));

    if (event.target.value == 'increasePop') {
        let amount = parseFloat(event.target.parentNode.children[3].value);
        let cityArr = newComm.cityList.map(function(param){return param.key;});  
        let index = cityArr.indexOf(cityKey);
        newComm.cityList[index].movedIn(amount);
        let newPopulation = newComm.cityList[index].population
        serverFunctions.updateCity(newComm.cityList[index]);
        event.target.parentNode.children[1].innerHTML = `Your population is ${newPopulation}`;
    };
    if (event.target.value == 'decreasePop') {
        let amount = parseFloat(event.target.parentNode.children[3].value);
        let cityArr = newComm.cityList.map(function(param){return param.key;});  
        let index = cityArr.indexOf(cityKey);
        newComm.cityList[index].movedOut(amount);
        serverFunctions.updateCity(newComm.cityList[index]);
        let newPopulation = newComm.cityList[index].population
        event.target.parentNode.children[1].innerHTML = `Your population is ${newPopulation}`;
    };
    if (event.target.value == 'delete') {
        let cityArr = newComm.cityList.map(function(param){return param.key;});  
        let index = cityArr.indexOf(cityKey);
        let cityName = newComm.cityList[index].cityName;
        serverFunctions.deleteCity(newComm.cityList[index].key);
        newComm.removeCity(cityName);
        let divToDelete = event.target.parentNode;
        divToDelete.remove();
        console.log(newComm.cityList);
    };
});
// add lat and long get and put in function
addCityButton.addEventListener('click', function() {
    let newCityName= document.getElementById('newCityName').value;
    let newCityPopulation = parseFloat(document.getElementById('newCityPopulation').value);
    let newCityLatitude = parseFloat(document.getElementById('newCityLatitude').value);
    let newCityLongitude = parseFloat(document.getElementById('newCityLongitude').value);


    document.getElementById('newCityName').value = '';
    document.getElementById('newCityPopulation').value = '';
    document.getElementById('newCityLatitude').value = '';
    document.getElementById('newCityLongitude').value = '';


    let lookUpKey = newComm.counter;
    // let newCityCard = functions.createNewCardFunction( newCityName, newCityPopulation, newComm.counter);
    newComm.createNewCity(newCityName,  newCityLatitude, newCityLongitude, newCityPopulation);

    let newKey = newComm.counter;

    // let lookUpKey = newKey - 1;

    let cityArr = newComm.cityList.map(function(param){return param.key;});  
    let index = cityArr.indexOf(lookUpKey);
    let cityForServ = newComm.cityList[index];
    console.log(cityForServ, 'cityserv tonew add')
    serverFunctions.addCity(cityForServ);

    
    let newCityCard = functions.createNewCardFunction( newCityName, newCityPopulation, newCityLatitude, newCityLongitude, newKey);
    myCityCardsId.insertBefore(newCityCard, myCityCardsId.childNodes[0]);
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
    let totalPop = newComm.getPopulation();
    textdisplay.innerHTML = `The total population of your community is <b>${totalPop}</b>`;
});





// do i need to comment out this line?
export default newComm;

