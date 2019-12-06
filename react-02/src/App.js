import React from 'react';
import logo from './logo.svg';
import compass from './compass.svg';
import fox from './fox.svg';
import pawprint from './paw-print.svg';
import turtle from './turtle.svg';
import './App.css';
import BonfireIcon from './components/bonfire.js';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      selected: "hi there",
      checking2: "im in app",
    }
  }

  switchMyState = () => {

  }

  onSelect = (event) => {
    this.setState({
        selected: event.target.id
      });
      console.log(this.state.selected)
      console.log(this)
    };

  render () {
    return (
      <div className="App">
        <div className='myHeader'>
          <button className="myButton" onClick={this.onSelect} ><BonfireIcon /></button>
          <img src={compass} className="header-logo" alt="logo" />
          <img src={fox} className="header-logo" alt="logo" />
          <img src={pawprint} className="header-logo" alt="logo" />
          <img src={turtle} className="header-logo" alt="logo" />


        </div>
        <header className="App-header">
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
        </header>
      </div>
    );
  }
}

export default App;
