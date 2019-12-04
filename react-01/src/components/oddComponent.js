import React from 'react';

class OddComponent extends React.Component {

	render() {
			return (
				<div>
					<h1>Hello World from Odd Component </h1>
					<button onClick={this.props.toPass}> pushMe!!</button>
				</div>
			)
		}
}

export default oddComponent;
