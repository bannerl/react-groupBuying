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
			<div className="home-header">
				<div className="city">
					<Link to="/city">
						{this.props.cityName}
						<i className="iconfont icon-xiala"></i>
					</Link>	
				</div>
				<div className="search">
					<SearchInput linkTo="/search/all/index"/>
				</div>
				<Link className="user" to='/login'>
					<i className="iconfont icon-user"></i>
				</Link>
			</div>
		)
	}
}


export default HomeHeader;