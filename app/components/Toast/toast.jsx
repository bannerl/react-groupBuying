import React from 'react';
import PropTypes from 'prop-types';
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
	message: PropTypes.string.isRequired,
	icon: PropTypes.string,
	position: PropTypes.string,
	duration: PropTypes.number
}

export default Toast;