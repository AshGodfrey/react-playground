import React, {Component} from 'react';

class Bomb extends React.Component {
	state = {
		counter: 0,
	};

	mountComponent() {
		this.interval = setInterval(() => {
			this.setState({
				counter: this.state.counter + 1
			})
		}, 100)
	}

	unmountComponent(){
		clearInterval(this.interval)
	}

	display() {
		const {counter} = this.state
		if (counter >= 8) {
			clearInterval(this.interval)
			return "boom!"
		} else if (counter % 2 === 0) {
			return 'tick'
		} else {
			return 'tock'
		}
	}
	render() {
		return (
			<div className="Countdown">
				{this.display()}
			</div>
		)

	}
}

export default Bomb