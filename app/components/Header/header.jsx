import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router';
import './style.scss';

class Home extends React.Component {
	constructor(props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	};
	
	render() {
		return (
			<div class="header">
				<Link class="return">
					<i class="iconfont icon-xiala"></i>
				</Link>
				<div class="title">{this.props.title}</div>
			</div>
		);
	};
	
	componentDidMount () {
		
	}
}

export default Home;