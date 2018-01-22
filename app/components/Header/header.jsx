import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link, hashHistory} from 'react-router';
import './style.scss';

class Home extends React.Component {
	constructor(props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	};
	
	render() {
		return (
			<div class="header">
				<div class="return" onClick={this.clickHandle.bind(this)}>
					<i class="iconfont icon-fanhui"></i>
				</div>
				<div class="title">{this.props.title}</div>
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

export default Home;