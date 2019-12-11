import React from 'react';
import BonfireIcon from './components/bonfire';
import CompassIcon from './components/compass';
import FoxIcon from './components/fox';
import PawprintIcon from './components/pawprint';
import TurtleIcon from './components/turtle';



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
    console.log('hellooo');
    console.log(event.target.id);
    this.setState({
        selected: event.target.id
      });
    };
  
    pageRendered = () => {
      if (this.state.selected === 'bonfire') {
      return < BonfireIcon eventFunc={this.onSelect}/>;
      } if (this.state.selected === 'compass') {
        return < CompassIcon eventFunc={this.onSelect} />;
      } if (this.state.selected === 'fox') {
        return < FoxIcon eventFunc={this.onSelect} />;
      } if (this.state.selected === 'pawprint') {
        return < PawprintIcon eventFunc={this.onSelect} />;
      } if (this.state.selected === 'turtle' ) {
        return < TurtleIcon eventFunc={this.onSelect} />;
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
