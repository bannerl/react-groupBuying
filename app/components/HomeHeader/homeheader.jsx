import React from 'react';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.scss';

class HomeHeader extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render () {
		return (
			<div class="home-header">
				<div class="city">
					<Link to="/city">
						{this.props.cityName}
						<i class="iconfont icon-xiala"></i>
					</Link>	
				</div>
				<div class="search">
					<input type="text" placeholder="请输入商品或者店铺名称" />
				</div>
				<div class="user">
					<i class="iconfont icon-user"></i>
				</div>
			</div>
		)
	}
}


export default HomeHeader;