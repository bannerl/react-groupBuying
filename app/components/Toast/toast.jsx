import React from 'react';
import propTypes from 'prop-types';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.scss';

class Toast extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			position:'middle',
			duration:3000
		};
	}
	render () {
		let { message, icon, position, duration } = this.props;
		position = position?position:this.state.position;
		duration = duration?duration:this.state.duration;
		
		return (
			<div class="toast-wrapper">
				<div class="content">
					<i></i>
					<span>{message}</span>
				</div>
			</div>
		)
	}
}

Toast.propTypes = {
	message: React.PropTypes.string.isRequired,
	icon: React.PropTypes.string,
	position: React.PropTypes.string,
	duration: React.PropTypes.number
}

export default Toast;