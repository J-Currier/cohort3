import React from 'react';
// import BonfireIcon from './components/bonfire.js';
import BonfireIcon from './components/bonfire';



class App extends React.Component {

  constructor() {
    super();
    this.state = {
      selected: 'bonfire',
    }
  }

  switchMyState = () => {
    console.log('hiii');
  }

  onSelect = (event) => {
    this.setState({
        selected: event.target.id
      });
    };
  
    pageRendered = () => {
      if (this.state.selected === 'bonfire') {
        return < BonfireIcon />;
      // } if (this.state.selected === ticTacToe) {
      //   return < TicTacToeGame />;
      // } if (this.state.selected === coins) {
      //   return < Accounts />;
      // } if (this.state.selected === city) {
      //   return < Homepage />;
      // } if (this.state.selected === gears1 || this.state.selected === gears2) {
      //   return < Homepage />;
      }
    }

  render () {
    return (
      <div className="App-Display">
        {this.pageRendered()}
      </div>
    );
  }
}

export default App;
