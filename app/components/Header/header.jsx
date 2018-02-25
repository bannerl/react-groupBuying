import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link, hashHistory} from 'react-router';
import './style.scss';

class Header extends React.Component {
	constructor(props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	};
	
	render() {
		return (
			<div className="header">
				<div className="return" onClick={this.clickHandle.bind(this)}>
					<i className="iconfont icon-fanhui"></i>
				</div>
				<div className="title">{this.props.title}</div>
			</div>
		);
	};
	
	clickHandle () {
		if(this.props.backUrl) {
			hashHistory.push(this.props.backUrl);
		} else {
			window.history.back();
		}
	}
}

export default Header;