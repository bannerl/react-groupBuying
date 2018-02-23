import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Button from './button';

function HocButton(componentWrapper) {
	return class HocButton extends React.Component {
		constructor (props,context) {
			super(props,context);
			this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		}
		render () {
			const style = {
				padding: '.3rem .2rem'
			}
			return (
				<div style={style}>
					<Button {...this.props} />
				</div>
			)
		}
	}
}


export default HocButton(Button);