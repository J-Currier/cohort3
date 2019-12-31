import React from 'react';
import bonfire from './bonfire.svg';
import compass from './compass.svg';
import fox from './fox.svg';
import pawprint from './paw-print.svg';
import turtle from './turtle.svg';
import 'C:/Code/cohort3/react-02/src/App.css';


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
            {/* <MyCitiesComp /> */}
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
      updatePop:'',
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePopChange = this.handlePopChange.bind(this);
    this.handleMoveInOut = this.handleMoveInOut.bind(this);
    this.moveInFunction = this.moveInFunction.bind(this);
    this.moveOutFunction = this.moveOutFunction.bind(this);
    this.deleteFunction = this.deleteFunction.bind(this);

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
        // *******add in lat and long******
          let myNewCity = {
              name: this.state.cityName,
              population: parseInt(this.state.cityPop),
              uniqueID: this.state.counter
          }
  
          this.setState({
              citiesList: this.state.citiesList.concat(myNewCity),
              counter: this.state.counter +1,
          });
          this.setState({
              cityName: '',
              cityPop: 0,
          });
      }
}

  handleNameChange(event) {
      this.setState({cityName: event.target.value});
  }

  handlePopChange(event) {
      let newPop = parseFloat(event.target.value)
      this.setState({cityPop: newPop });
  }

  handleMoveInOut(event) {
      this.setState({updatePop: event.target.value})
  }
  
  moveInFunction(event) {
      if (isNaN(event.target.parentNode.children[2].value) || event.target.parentNode.children[2].value.length === 0 ) {
          alert('Please enter a valid number')
          return null
      }
      let cardKey = parseInt(event.target.value)
      let cityArr = this.state.citiesList.map(function(param){return param.uniqueID;});  
      let index = cityArr.indexOf(cardKey);
      let newPop = (parseInt(this.state.citiesList[index].population) + parseInt(event.target.parentNode.children[2].value));
      let mycityArr = this.state.citiesList;
      mycityArr[index].population = newPop;
      this.setState({citiesList: mycityArr})
      event.target.parentNode.children[2].value = 0;
  }

  moveOutFunction(event) {
      if (isNaN(event.target.parentNode.children[2].value) || event.target.parentNode.children[2].value.length === 0 ) {
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

//   render() {
//       return (
//           <div className="App-header">
//               <div className='accountsDiv'>
//                   <div className='myHeading'>Bank o' Jen
//                   </div>
//                   <div className='addAccountSection'>


//                       <div className='addNewAccountCard'>
//                               To add a new account:<br />
//                               Give your new account a name 
//                               <input type="text" value={this.state.cityName} onChange={this.handleNameChange} />
//                               <br />
//                               Enter the starting balance   <br /> 
//                               $<input type="text" value={this.state.cityPop} onChange={this.handlePopChange} />
//                               <br />
//                           <div className='buttonDiv'>
                          
//                           <NewAccountButton onClick={() => this.createNewCity()}  />    
//                           </div>
//                           <div id='displayArea'>
//                           <div id='textdisplay'>
//                               <AccountTotal citiesList={this.state.citiesList}/>
//                               <HighestBalance citiesList={this.state.citiesList}/>
//                               <LowestBalance citiesList={this.state.citiesList} />
//                           </div>
//                           </div>
//                       </div>
//                   </div>
//                   <div className='myAccountCards' id='myAccountCardsId'>
//                       <DisplayAccounts myAccounts={this.state.citiesList} onChange={this.handleMoveInOut} onDeposit ={this.moveInFunction} onWithdrawl={this.moveOutFunction} onDelete={this.deleteFunction}/>
//                   </div>
//               </div>
//           </div>
//       )} 

// }

// function NewAccountButton(props) { 
//       return(
//               <button className='buttons' id='addAccountButton' onClick={props.onClick}>Make a New Account!</button>
//       );

// }


// function DisplayAccounts(props) {
// const cardList = props.myAccounts.map((account) => <li key={account.uniqueID.toString()}> {CreateNewCardFunction(account, props)}</li>);
//   return <ul className="unstyled">{cardList}</ul>;
// }

// function CreateNewCardFunction(account, props) {


//   return (
      
//       <div className="cards" id={account.name} key={account.uniqueID} >
//           <div className='accountCardHeader' >{account.name}</div>
//           <div className='accountCardBalance'>Your balance is ${account.balance}</div>
//           <input className="amountInput" type="text" onChange={props.onChange}/>
//           <button className='buttons' value={account.uniqueID} onClick={props.onDeposit} >Deposit</button>
//           <button className='buttons' value={account.uniqueID} onClick={props.onWithdrawl} >Withdraw</button>
//           <button className='buttons' value={account.uniqueID} onClick={props.onDelete} >DELETE ACCOUNT</button>


//       </div>
//   )

//    }

// function HighestBalance(props) {
//   if (props.citiesList.length > 0) {
//   let highestValue = Math.max.apply(Math, props.citiesList.map(function(param){return param.balance;}));
//   let highestAccount = props.citiesList.find(function(param){ return parseFloat(param.balance) === highestValue; });
//   return (
//       <div>Your <b>{highestAccount.name}</b> account is your largest asset with a balance of <b>${highestAccount.balance}</b></div>
//   );
//   }  else {return null }
// }

// function LowestBalance(props) {
//   if (props.citiesList.length > 1) {
//   let lowestValue = Math.min.apply(Math, props.citiesList.map(function(param){return param.balance;}));
//   let lowestAccount = props.citiesList.find(function(param){ return parseFloat(param.balance) === lowestValue; });
//   return (
//       <div>Your <b>{lowestAccount.name}</b> account is your smallest asset with a balance of <b>${lowestAccount.balance}</b></div>
//   );
//   }  else {return null }
// }

// function AccountTotal(props) {
//   if (props.citiesList.length > 0) {
//       let myArr = [];
//       props.citiesList.forEach((element) => {
//           myArr.push(element.balance);
//           return myArr;
//       });
//       let accountTotals= myArr.reduce((acc, cur) => acc + cur);
//       return (
//           <div>The sum of your accounts is <b>${accountTotals}</b></div>
//       )} else { return null}

// }

export default PawprintIcon;