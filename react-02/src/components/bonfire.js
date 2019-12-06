import React from 'react';
import bonfire from './bonfire.svg';

class BonfireIcon extends React.Component { 
    constructor(props) {
      super(props);
      this.id= 'BonfireIcon'
      this.state = {
        isCardView: true,
        checking: "i am checkng",
      }
    } 

    render() {
        if (this.state.isCardView ){
			return (
				<div>
					<img src={bonfire} className="header-logo" alt="logo" id='BonfireState' />
          show {this.state.checking}
          {this.state.checking2}
				</div>
			)
		} else {
            return (
				<div>
					<img src={bonfire} className="header-logo-invert" alt="logo"  />
					
				</div>
			)
        };
	}
};

export default BonfireIcon;
