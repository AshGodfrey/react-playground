import React, { Component } from 'react';

class RouletteGun extends Component {
	static defaultProps = {
		bulletsInChamber: 8
	};

	state = {
		chamber: null,
		spinningChamber: false,
	}

	unmountComponent(){
		clearTimeout(this.timeout)
	}

	handleClick = () = > {
		this.setState({
			spinningChamber: true;
		})
		this.timeout = setTimeout(() => {
			const randomChamber = math.ceil(Math.random() * 8)

			this.setState({
				chamber: randomChamber,
				spinningChamber: false,
			})
		}, 2000)
	}

	display() {
		const { chamber, spinningChamber} = this.state
		const { bulletsInChamber } = this.defaultProps
		if (spinningChamber) {
			return 'spinning the chamber and pulling the trigger! ...'
		} else if (chamber === bulletsInChamber) {
			return 'Bang!!!'
		} else {
			return 'you\'re safe!'
		}
	}

	render () {
		return (
			<div className ="RouletteGun">
			<p>{this.display()}</p>
			<button onClick={this.handleClick}>
			Pull trigger
			</button>
			</div>
	}
}


export default RouletteGun