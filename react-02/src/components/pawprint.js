import React from 'react';
import bonfire from './bonfire.svg';
import compass from './compass.svg';
import fox from './fox.svg';
import pawprint from './paw-print.svg';
import turtle from './turtle.svg';
import 'C:/Users/Dustin/cohort3/react-02/src/App.js';
import serverFunctions from './cityserverfunctions.js';


class PawprintIcon extends React.Component { 
    constructor(props) {
      super(props);
      this.id= 'pawprint Button'
      this.state = {
        isCardView: true,
      }
    } 
    
    render() {
			return (
        <div className="App">
          <div className='myHeader'>
            <input type="image" src={bonfire}  className="header-logo" id="bonfire" onClick={this.props.eventFunc} alt='homeButton'/>
            <input type="image" src={compass}  className="header-logo" id="compass" onClick={this.props.eventFunc} alt='navButton'/>
            <input type="image" src={fox}  className="header-logo" id="fox" onClick={this.props.eventFunc} alt='homeButton'/>
            <input type="image" src={pawprint}  className="header-logo-invert" id="pawprint" onClick={this.props.eventFunc} alt='homeButton'/>
            <input type="image" src={turtle}  className="header-logo" id="turtle" onClick={this.props.eventFunc} alt='homeButton'/>
            <div>Home</div>
            <div>Tic Tac Toe</div>
            <div>Accounts</div>
            <div>Cities</div>
            <div>Turtles!</div>
          </div>

          <div> 
            <MyCitiesComp />
          </div>
        </div>
      )
    };
};


class MyCitiesComp extends React.Component { 
  constructor(props) {
    super(props);

    this.state = { 
      id: 'myCitiesComp',
      citiesList: [],
      counter: 0,
      cityName: '',
      cityPop: 0,
      cityLat: 0,
      cityLong:0,
      updatePop:'',
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePopChange = this.handlePopChange.bind(this);
    this.handleLatChange = this.handleLatChange.bind(this);
    this.handleLongChange = this.handleLongChange.bind(this);
    this.handleMoveInOut = this.handleMoveInOut.bind(this);
    this.moveInFunction = this.moveInFunction.bind(this);
    this.moveOutFunction = this.moveOutFunction.bind(this);
    this.deleteFunction = this.deleteFunction.bind(this);

  } 

  componentDidMount() {
    <CityServerFunctions createNewCity={this.createNewCity}/>
  }

  createNewCity() {
      let nameList = this.state.citiesList.map(function(param){return param.name;});
      if (isNaN(this.state.cityPop) || this.state.cityPop.length < 1 ) {
          alert('Please enter a valid population')
          return null
      }


      
      if (this.state.cityName === '') {
          alert("Please use a valid City name");
          return null
      } 
      if (this.state.citiesList.length > 0 && nameList.indexOf(this.state.cityName) >= 0) {
              alert("That city name is already in use, please choose another");
              return null
          
      } else {
          let myNewCity = {
              name: this.state.cityName,
              population: parseInt(this.state.cityPop),
              uniqueID: this.state.counter,
              latitude: parseInt(this.state.cityLat),
              longitude: parseInt(this.state.cityLong)
          }
  
          this.setState({
              citiesList: this.state.citiesList.concat(myNewCity),
              counter: this.state.counter +1,
          });
          this.setState({
              cityName: '',
              cityPop: 0,
              cityLat: 0,
              cityLong:0
          });
      }
}

  handleNameChange(event) {
      this.setState({cityName: event.target.value});
  }

  handleLatChange(event) {
    this.setState({cityLat: event.target.value});
}

  handleLongChange(event) {
    this.setState({cityLong: event.target.value});
}


  handlePopChange(event) {
      let newPop = parseFloat(event.target.value)
      this.setState({cityPop: newPop });
  }

  handleMoveInOut(event) {
      this.setState({updatePop: event.target.value})
  }
  
  moveInFunction(event) {
      console.log("move in function");
      if (isNaN(event.target.parentNode.children[3].value) || event.target.parentNode.children[3].value.length === 0 ) {
          alert('Please enter a valid number')
          return null
      }
      let cardKey = parseInt(event.target.value)
      let cityArr = this.state.citiesList.map(function(param){return param.uniqueID;});  
      let index = cityArr.indexOf(cardKey);
      let newPop = (parseInt(this.state.citiesList[index].population) + parseInt(event.target.parentNode.children[3].value));
      let mycityArr = this.state.citiesList;
      mycityArr[index].population = newPop;
      this.setState({citiesList: mycityArr})
      event.target.parentNode.children[3].value = 0;
  }

  moveOutFunction(event) {
      if (isNaN(event.target.parentNode.children[3].value) || event.target.parentNode.children[3].value.length === 0 ) {
          alert('Please enter a valid number')
          return null
      }

      let cardKey = parseInt(event.target.value)
      let cityArr = this.state.citiesList.map(function(param){return param.uniqueID;});  
      let index = cityArr.indexOf(cardKey);
      let newPop = (parseInt(this.state.citiesList[index].population) - parseInt(this.state.updatePop));
      let mycityArr = this.state.citiesList;
      mycityArr[index].population = newPop;
      this.setState({citiesList: mycityArr})
      
  }

  deleteFunction(event) {
      let cardKey = parseInt(event.target.value)
      let mycityArr = this.state.citiesList.filter((arr) => arr.uniqueID !== cardKey);
      this.setState({citiesList: mycityArr})
  }

  render() {
      return (
          <div className="App-header">
              <div className='accountsDiv'>
                  <div className='myHeading'>Communities
                  </div>
                  <div className='addAccountSection'>


                      <div className='addNewAccountCard'>
                              To add a new city:<br />
                              Give your new city a name 
                              <input type="text" value={this.state.cityName} onChange={this.handleNameChange} />
                              <br />
                              Enter the starting population  <br /> 
                              <input type="text" value={this.state.cityPop} onChange={this.handlePopChange} />
                              <br />
                              Enter the latitude  <br /> 
                              <input type="text" value={this.state.cityLat} onChange={this.handleLatChange} />
                              <br />
                              Enter the longitude  <br /> 
                              <input type="text" value={this.state.cityLong} onChange={this.handleLongChange} />
                              <br />

                          <div className='buttonDiv'>
                          
                          <NewCityButton onClick={() => this.createNewCity()}  />    
                          </div>
                          <div id='displayArea'>
                          <div id='textdisplay'>
                              <PopulationTotal citiesList={this.state.citiesList}/>
                              <MostNorthern citiesList={this.state.citiesList}/>
                              <MostSouthern citiesList={this.state.citiesList} />
                          </div>
                          </div>
                      </div>
                  </div>
                  <div className='myAccountCards' id='myCityCardsId'>
                      <DisplayCities myCities={this.state.citiesList} onChange={this.handleMoveInOut} onMoveIn ={this.moveInFunction} onMoveOut={this.moveOutFunction} onDelete={this.deleteFunction}/>
                  </div>
              </div>
          </div>
      )} 

}

function NewCityButton(props) { 
      return(
              <button className='buttons' id='addCityButton' onClick={props.onClick}>Make a New City!</button>
      );

}


function DisplayCities(props) {
const cardList = props.myCities.map((city) => <li key={city.uniqueID.toString()}> {CreateNewCardFunction(city, props)}</li>);
  return <ul className="unstyled">{cardList}</ul>;
}

function CreateNewCardFunction(city, props) {


  return (
      
      <div className="cards" id={city.name} key={city.uniqueID} >
          <div className='accountCardHeader' >{city.name}</div>
          <div className='accountCardBalance'>Population: {city.population}</div>
          <div className='accountCardBalance'>Location: {city.latitude}, {city.longitude}</div>
          <input className="amountInput" type="text" onChange={props.onChange}/>
          <button className='buttons' value={city.uniqueID} onClick={props.onMoveIn} >Increase Population</button>
          <button className='buttons' value={city.uniqueID} onClick={props.onMoveOut} >Decrease Population</button>
          <button className='buttons' value={city.uniqueID} onClick={props.onDelete} >DELETE CITY</button>


      </div>
  )

   }

function MostNorthern(props) {
  if (props.citiesList.length > 1) {
  let highestValue = Math.max.apply(Math, props.citiesList.map(function(param){return param.latitude;}));
  let mostNorthernly = props.citiesList.find(function(param){ return parseFloat(param.latitude) === highestValue; });
  return (
      <div> <b>{mostNorthernly.name}</b> is the most northern city</div>
  );
  }  else {return null }
}

function MostSouthern(props) {
  if (props.citiesList.length > 1) {
  let lowestValue = Math.min.apply(Math, props.citiesList.map(function(param){return param.latitude;}));
  let mostSouthernly = props.citiesList.find(function(param){ return parseFloat(param.latitude) === lowestValue; });
  return (
      <div> <b>{mostSouthernly.name}</b>  is the most southern city</div>
  );
  }  else {return null }
}

function PopulationTotal(props) {
  if (props.citiesList.length > 0) {
      let myArr = [];
      props.citiesList.forEach((element) => {
          myArr.push(element.population);
          return myArr;
      });
      let PopulationTotals= myArr.reduce((acc, cur) => acc + cur);
      return (
          <div>The total population of your community is <b>{PopulationTotals}</b></div>
      )} else { return null}

}

// class CityServerFunctions extends React.Component { 
//     constructor(props) {
//       super(props);
//       this.url= 'http://localhost:5000/'
//       this.state = {
//       }
//     } 

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
//         json.statusText = response.statusText;
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
//     }
// }


export default PawprintIcon;