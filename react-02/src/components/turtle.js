import React from 'react';
import bonfire from './bonfire.svg';
import compass from './compass.svg';
import fox from './fox.svg';
import pawprint from './paw-print.svg';
import turtle from './turtle.svg';
import 'C:/Code/cohort3/react-02/src/App.css';
import seaTurtle from './seaTurtle.svg'


class TurtleIcon extends React.Component { 
    constructor(props) {
      super(props);
      this.id= 'turtle Button'
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
            <input type="image" src={pawprint}  className="header-logo" id="pawprint" onClick={this.props.eventFunc} alt='homeButton'/>
            <input type="image" src={turtle}  className="header-logo-invert" id="turtle" onClick={this.props.eventFunc} alt='homeButton'/>
          </div>

          <div className="turtle-App-header">
            <h1>Welcome to the 🐢 page!</h1>
            <h2>Why turtles?</h2>
            because I can
            <img src={seaTurtle} className="turtle-logo" alt="logo" />
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

export default TurtleIcon;