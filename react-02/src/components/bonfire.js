import React from 'react';
import bonfire from './bonfire.svg';

class BonfireIcon extends React.Component { 
    constructor(props) {
      super(props);
      this.state = {
        isCardView: true,
      }
    } 

    render() {
        if (this.state.isCardView ){
			return (
				<div>
					<img src={bonfire} className="header-logo" alt="logo"  />
					
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
