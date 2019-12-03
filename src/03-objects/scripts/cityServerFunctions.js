// import { City, Community } from "./city.js";

const url = 'http://localhost:5000/';

const serverFunctions = {
    async postData(url, data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST',     // *GET, POST, PUT, DELETE, etc.
            mode: 'cors',       // no-cors, *cors, same-origin
            cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow',         // manual, *follow, error
            referrer: 'no-referrer',    // no-referrer, *client
            body: JSON.stringify(data)  // body data type must match "Content-Type" header
        });
        return await response.json();   // parses JSON response into native JavaScript objects
    },
    async loadData(myCommunity) {
            try {
                let myData = postData(url + all);
                myCommunity.cityList = myData.map((cit) => createNewCity(cit.name, cit.latitude, cit.longitude, cit.population));
                return false;
            } catch (error) {
                return "Citties not loaded";
            };
    },
    
}

export { serverFunctions }




    

    




