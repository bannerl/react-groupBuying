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
		let { message, icon, position, duration, show} = this.props;
		
		position = position?position:this.state.position;
		duration = duration?duration:this.state.duration;
		
		return (
			<div class={'toast-wrapper '+(show?'on':'')} >
				{this.props.children}
				<div class="content">
					<span>{message}</span>
				</div>
			</div>
		)
	}
}

Toast.propTypes = {
	message: PropTypes.string,
	icon: PropTypes.string,
	position: PropTypes.string,
	duration: PropTypes.number,
	show: PropTypes.bool
}

Toast.defaultProps = {
	message: '你的提示信息没有填写',
	icon: '',
	position: 'middle',
	duration: 3000
}


export default Toast;