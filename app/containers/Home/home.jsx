import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import HomeHeader from '../../components/HomeHeader/homeheader';
import Carousel from '../../components/Carousel/carousel';
import ListAd from './subpage/listAd';
import FavoriteList from './subpage/favoriteList';
import * as UserInfoActions from '../../actions/userinfo';

class Home extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render () {
		const { cityName,userName } = this.props;
		return (
			<div>
				<HomeHeader cityName={cityName}/>
				<Carousel />
				<div style={{"height":".13rem","background":'#f5f5f5'}}></div>
				<ListAd />
				<div style={{"height":".13rem","background":'#f5f5f5'}}></div>
				<FavoriteList cityName={cityName} />
			</div>
		)
	}
}

function mapStateToProps (state) {
	return {
		cityName:state.userinfo.cityName,
		userName:state.userinfo.userName
	}
}

function mapDispatchToProps (dispath) {
	return {
		InfoActions: bindActionCreators(UserInfoActions,dispath)
	}
}

const HomeContainer = connect (
	mapStateToProps,
	mapDispatchToProps
)(Home)

export default HomeContainer;