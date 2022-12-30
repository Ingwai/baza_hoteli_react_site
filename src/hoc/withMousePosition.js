import { Component } from 'react';

const withMousePosition = WrappedComponent => {
	class Hoc extends Component {
		constructor() {
			super();
			this.state = {
				x: 0,
				y: 0,
			};
		}
		updateMousePosition = e => {
			this.setState({ x: e.pageX, y: e.pageY });
		};

		componentDidMount() {
			document.body.addEventListener('mousemove', this.updateMousePosition);
		}

		render() {
			return <WrappedComponent mouseX={this.state.x} mouseY={this.state.y} {...this.props} />;
		}
	}
	return Hoc;
};

export default withMousePosition;
