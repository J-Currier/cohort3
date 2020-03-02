// import { City, Community } from "./city.js";
// import functions from "./cityDOM.js";

const url = 'http://localhost:5000/';

const serverFunctions = {
//     async postData(url, data = {}) {
//         // Default options are marked with *
//         const response = await fetch(url, {
//             method: 'POST',     // *GET, POST, PUT, DELETE, etc.
//             mode: 'cors',       // no-cors, *cors, same-origin
//             cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
//             credentials: 'same-origin', // include, *same-origin, omit
//             headers: {
//                 'Content-Type': 'application/json'
//                 // 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//             redirect: 'follow',         // manual, *follow, error
//             referrer: 'no-referrer',    // no-referrer, *client
//             body: JSON.stringify(data)  // body data type must match "Content-Type" header
//         });
//         const json = await response.json();    // parses JSON response into native JavaScript objects
//         json.status = response.status;
//          json.statusText = response.statusText;
//         return json;
//     },
//     async loadData(newComm) {
//         console.log("load func");
//             try {
//                 console.log('fisrt after try');
//                 let myData = await this.postData(url + 'all');
//                 console.log('second');
//                 console.log(myData, myData.length);
//                 console.log(myData[0].name, 'data 1');

//                 myData.map((cit) => newComm.createNewCity(cit.name, cit.latitude, cit.longitude, cit.population));
//                 console.log(newComm.cityList, 'servlist')
//                 myData.map((cit) => {
//                     let correctKey = cit.key + 1;
//                     let newCityCard = functions.createNewCardFunction(cit.name, cit.population, cit.latitude, cit.longitude, correctKey);
//                     myCityCardsId.insertBefore(newCityCard, myCityCardsId.childNodes[0]);
//                 });
//                 return false;
//             } catch (error) {
//                 console.log('error messgae');
//                 return "Cities not loaded";
//             };
//     },

//     async addCity(city) {
//         console.log('adding1 city');
//         try {
//             console.log('adding city');
//             await this.postData(url + 'add', city);
//             return false;
//         } catch (error) {
//             console.log(error);
//             return "City wasn't added to server";

//         };

//     },

//     async updateCity(city) {
//         try {
//             await this.postData(url + 'update', city);
//             return false;
//         } catch (error) {
//             console.log(error);
//             return "Error city not updated";
//         };

//     },

//     async deleteCity(key) {
//         try {
//             await this.postData(url + 'delete', { key });
//             return false;
//         } catch (error) {
//             console.log(error);
//             return "ErrorCity wasn't deleted"
//         }
//     },
    
}

export default serverFunctions 

