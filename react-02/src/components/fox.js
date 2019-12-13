import React from 'react';
import bonfire from './bonfire.svg';
import compass from './compass.svg';
import fox from './fox.svg';
import pawprint from './paw-print.svg';
import turtle from './turtle.svg';
import 'C:/Code/cohort3/react-02/src/App.css';
import MyAccountComp from './myAccountComp.js'


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

          <div> 
            <MyAccountComp />
          </div>
          </div>
      )
    };
};

export default FoxIcon;
