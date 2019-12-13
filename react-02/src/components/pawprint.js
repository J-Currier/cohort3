import React from 'react';
import bonfire from './bonfire.svg';
import logo from './logo.svg';
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

          <div className="App-header">
            <h1>Welcome to the PAWPRINT page </h1>
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

export default PawprintIcon;