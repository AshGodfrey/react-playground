import React from 'react';

class HelloWorld extends React.Component {
	state = {
		mystate: 'world',
	}
	render() {
		return (
			<div className='helloWorld'>
				<p>Hello, {this.state.mystate}!</p>
				<button 
					onClick={() => this.setState({mystate: 'world'})}
				>
				World 
				</button>

				<button 
					onClick={() => this.setState({mystate: 'friend'})}
				>
				friend
				</button>

				<button 
					onClick={() => this.setState({mystate: 'react'})}
				>
				React
				</button>

			</div>
			)
	}
}

export default HelloWorld