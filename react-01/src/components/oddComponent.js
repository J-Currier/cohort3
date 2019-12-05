import React from 'react';

class OddComponent extends React.Component {

	render() {
        if (this.props.counter % 2 !== 0){
			return (
				<div>
					<h1>Hello World from Odd Component </h1>
					
				</div>
			)
		};
        if (this.props.counter % 2 === 0) {
            return null;
        };
	}
}

export default OddComponent;
