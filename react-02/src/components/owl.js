import React, { useState } from 'react';
import bonfire from './bonfire.svg';
import compass from './compass.svg';
import fox from './fox.svg';
import pawprint from './paw-print.svg';
import turtle from './turtle.svg';
import owl from './owl.svg';

import 'C:/code/cohort3/react-02/src/App.css';


class OwlIcon extends React.Component { 
  



    render() {
			return (
        <div className="App">
          <div className='myHeader'>
            <input type="image" src={bonfire}  className="header-logo" id="bonfire" onClick={this.props.eventFunc} alt='homeButton'/>
            <input type="image" src={compass}  className="header-logo" id="compass" onClick={this.props.eventFunc} alt='navButton'/>
            <input type="image" src={fox}  className="header-logo" id="fox" onClick={this.props.eventFunc} alt='homeButton'/>
            <input type="image" src={pawprint}  className="header-logo" id="pawprint" onClick={this.props.eventFunc} alt='homeButton'/>
            <input type="image" src={turtle}  className="header-logo" id="turtle" onClick={this.props.eventFunc} alt='homeButton'/>
            <input type="image" src={owl}  className="header-logo-invert" id="owl" onClick={this.props.eventFunc} alt='homeButton'/>

            <div>Home</div>
            <div>Tic Tac Toe</div>
            <div>Accounts</div>
            <div>Cities</div>
            <div>Turtles!</div>
            <div>LIFO/FIFO</div>

          </div>
my compontent will go here
          {/* <LinkedListComp /> */}
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

export default OwlIcon;