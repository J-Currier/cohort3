
const functions = {

    createNewCardFunction: (newCityName, newCityPopulation, latitude, longitude, counter) => {
        console.log(counter, 'counter')

        let intCityPopulation = parseFloat(newCityPopulation);

        const newCityCard = document.createElement('div');
        newCityCard.setAttribute('class', 'cards');
        newCityCard.setAttribute('id', newCityName);
        let correctCounter = counter - 1;
        newCityCard.setAttribute('key', correctCounter);
        console.log(newCityCard);

        let titleDiv = document.createElement('div');
        titleDiv.setAttribute('class', 'cityCardHeader')
        let newId = newCityName + 'Title';
        titleDiv.setAttribute('id', newId);
        titleDiv.innerHTML = newCityName;
        newCityCard.appendChild(titleDiv);

        let populationDiv = document.createElement('div');
        populationDiv.setAttribute('class', 'cityCardPopulation')
        let newPopId = newCityName + 'Population';
        populationDiv.setAttribute('id', newPopId);
        populationDiv.innerHTML = `Your population is ${intCityPopulation}`;
        newCityCard.appendChild(populationDiv);

        let latlongDiv = document.createElement('div');
        latlongDiv.setAttribute('class', 'cityCardPopulation')
        let newLatLonID = newCityName + 'latLong';
        latlongDiv.setAttribute('id', latitude);
        latlongDiv.innerHTML = `${latitude}, ${longitude}`;
        newCityCard.appendChild(latlongDiv);


        let inputField = document.createElement('input');
        inputField.setAttribute('class', 'amountInput');
        inputField.setAttribute('type', 'text')

        let newInputId = newCityName + 'input';
        inputField.setAttribute('id', newInputId);
        inputField.setAttribute('placeholder', 'enter population change');
        newCityCard.appendChild(inputField);

        let brTag = document.createElement('br');
        newCityCard.appendChild(brTag);

        let increasepopbutton = document.createElement('button');
        increasepopbutton.setAttribute('class', 'buttons');
        increasepopbutton.innerHTML = 'Population Increase';
        increasepopbutton.value = 'increasePop';
        newCityCard.appendChild(increasepopbutton);


        let decreasepopbutton = document.createElement('button');
        decreasepopbutton.setAttribute('class', 'buttons');
        decreasepopbutton.innerHTML = 'Population Decrease';
        decreasepopbutton.value = 'decreasePop';
        newCityCard.appendChild(decreasepopbutton);

        let deletebutton = document.createElement('button');
        deletebutton.setAttribute('class', 'buttons');
        deletebutton.innerHTML = 'DELETE';
        deletebutton.value = 'delete';
        newCityCard.appendChild(deletebutton);

        return newCityCard;
    },

   

    



}


export default functions;
