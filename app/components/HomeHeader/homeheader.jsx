import React from 'react';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import SearchInput from '../SearchInput/searchinput';
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
					<SearchInput linkTo="/search/all/index"/>
				</div>
				<Link class="user" to='/login'>
					<i class="iconfont icon-user"></i>
				</Link>
			</div>
		)
	}
}


export default HomeHeader;