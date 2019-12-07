import React from 'react';
import bonfire from './bonfire.svg';
import logo from './logo.svg';
import compass from './compass.svg';
import fox from './fox.svg';
import pawprint from './paw-print.svg';
import turtle from './turtle.svg';
import 'C:/Code/cohort3/react-02/src/App.css';
// import './App.css';


class BonfireIcon extends React.Component { 
    constructor(props) {
      super(props);
      this.id= 'bonfire Button'
      this.state = {
        isCardView: true,
        checking: "i am checkng",
      }
    } 

    render() {
			return (
        <div className="App">
          <div className='myHeader'>
            <input type="image" src={bonfire}  className="header-logo-invert" id="bonfire" onClick={this.switchMyState} alt='homeButton'/>
            <input type="image" src={compass}  className="header-logo" id="bonfire" onClick={this.switchMyState} alt='homeButton'/>
            <input type="image" src={fox}  className="header-logo" id="bonfire" onClick={this.switchMyState} alt='homeButton'/>
            <input type="image" src={pawprint}  className="header-logo" id="bonfire" onClick={this.switchMyState} alt='homeButton'/>
            <input type="image" src={turtle}  className="header-logo" id="bonfire" onClick={this.switchMyState} alt='homeButton'/>
          </div>

          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </div>
        </div>
      )
    };
};

export default BonfireIcon;
