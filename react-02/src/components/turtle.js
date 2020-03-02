import React, { useState } from 'react';
import bonfire from './bonfire.svg';
import compass from './compass.svg';
import fox from './fox.svg';
import pawprint from './paw-print.svg';
import turtle from './turtle.svg';
import 'C:/code/cohort3/react-02/src/App.css';
import seaTurtle from './seaTurtle.svg'


class TurtleIcon extends React.Component { 
  constructor(props) {
    super(props);
    this.id= 'turtle Button'
    this.state = {
      isCardView: true,
      itemName: '',
      itemAmount:'',
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.addNewNode = this.addNewNode.bind(this);

  };



  handleNameChange(event) {
      this.setState({itemName: event.target.value});
  }
  handleAmountChange(event) {
    this.setState({itemAmount: event.target.value});
  }
  addNewNode(event) {
    console.log('I was clicked')
    console.log(this.state.itemName, this.state.itemAmount);
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
            <div>Home</div>
            <div>Tic Tac Toe</div>
            <div>Accounts</div>
            <div>Cities</div>
            <div>Turtles!</div>
          </div>

          <div className="linkedListComp">
            <div className='myHeading'>
              Linked List
            </div>
            <div className='addNewAccountCard'>
              <div className='addAccountSection'>
                Item:               
                <input type="text" value={this.state.itemName} onChange={this.handleNameChange} />
                Amount:                
                <input type="number" value={this.state.itemAmount} onChange={this.handleAmountChange} />
                <br/>
                <button className='buttons' id='addNewNodeButton' onClick={this.addNewNode}>Add my item</button>
              </div>
            </div>
            <div className='myAccountCards'>
              My list will go here
            </div>
            
          </div>
        </div>
      )
    };
};
// function Example() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times hello</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

export default TurtleIcon;