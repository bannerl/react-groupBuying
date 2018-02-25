import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import InputBind from './input';
import './hocStyle.scss';

function HocInput(Input) {
	return class PP extends React.Component {
		constructor (props,context) {
			super(props,context);
			this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		}
		render () {
			
			return (
				<div className="input-bind-wrapper border-1px">
					<div className="left">{this.props.tipText}</div>
					<div className="right">
						<Input {...this.props} />
					</div>
				</div>
			)
		}
	}
}

export default HocInput(InputBind);