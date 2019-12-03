import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComp from './components/myComponent.js';


class App extends React.Component {
  constructor() {
    super();
    this.counter = 21;
    this.state = {
      myState: "TBD"
    };
  };

  onPushMe = () => {
    console.log("You pushed me");
    this.counter ++;
    console.log(this.counter);
    this.setState({
      myState: "now: " + this.counter
    });
  };
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>I am in control of this application and my name is Jen!    {this.counter} {this.state.myState}</h1>
          <button onClick={this.onPushMe}>Push ME!!</button>
          
          <MyComp whatToSay='what Ever' />
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
