import React from 'react';
import bonfire from './bonfire.svg';
import compass from './compass.svg';
import fox from './fox.svg';
import pawprint from './paw-print.svg';
import turtle from './turtle.svg';
import 'C:/Code/cohort3/react-02/src/App.css';


class FoxIcon extends React.Component { 
    constructor(props) {
      super(props);
      this.id= 'fox Button'
    } 

    render() {
			return (
        <div className="App">
          <div className='myHeader'>
            <input type="image" src={bonfire}  className="header-logo" id="bonfire" onClick={this.props.eventFunc} alt='homeButton'/>
            <input type="image" src={compass}  className="header-logo" id="compass" onClick={this.props.eventFunc} alt='navButton'/>
            <input type="image" src={fox}  className="header-logo-invert" id="fox" onClick={this.props.eventFunc} alt='homeButton'/>
            <input type="image" src={pawprint}  className="header-logo" id="pawprint" onClick={this.props.eventFunc} alt='homeButton'/>
            <input type="image" src={turtle}  className="header-logo" id="turtle" onClick={this.props.eventFunc} alt='homeButton'/>
          </div>

          <div className="App-header">
            <div className='accountsDiv'>
              <div className='myHeading'>Bank o' Jen
              </div>
            <div className='addAccountSection'>
              <div className='addNewAccountCard'>
                To add a new account:<br />
                Give your new account a name pput an input here 
                {/* <input id='newAccountName' type='text' placeholder="New account name"> */}
                  <br />
                Enter the starting balance    put an input here
                {/* <input id='newAccountBalance' type='text' placeholder='New account balance'> */}
                  <br />
                <div className='buttonDiv'>
                  <button className='buttons' id='addAccountButton'>Make a New Account!</button>
                </div>
                <div id='displayArea'>
                  <div id='textdisplay'>
                  </div>
                  <button className='buttons' id='highestAccount'>Highest Balance</button>
                  <button className='buttons' id='lowestAccount'>Lowest Balance</button>
                  <button className='buttons' id='sumAccount'>Account Total</button>
                </div>
              </div>
            </div>
            <div className='myAccountCards' id='myAccountCardsId'>
            </div>
            </div>
          </div>
        </div>
      )
    };
};

export default FoxIcon;
