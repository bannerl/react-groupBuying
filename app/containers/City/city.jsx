import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserInfoOperation from '../../actions/userinfo';

import Header from '../../components/Header/header';
import CitySelect from '../../components/CitySelect/cityselect';
import HotCity from '../../components/HotCity/hotcity';

class City extends React.Component {
	constructor(props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	};
	
	render() {
		return (
			<div>
				<Header title="城市列表" />			
				<CitySelect cityName={this.props.cityName} />
				<div style={{"height":".13rem","background":'#f5f5f5'}}></div>
				<HotCity cityHandle={this.toggleCity.bind(this)} />
			</div>
		);
	};
	
	//切换城市
	toggleCity (cityName) {
		this.props.UserInfoActions.update({
			cityName: cityName
		});
	}
}

function mapStateToProps (state) {
	return {
		cityName:state.userinfo.cityName
	}
}

function mapDispatchToProps (dispath) {
	return {
		UserInfoActions: bindActionCreators(UserInfoOperation,dispath)
	}
}

const CityContainer = connect (
	mapStateToProps,
	mapDispatchToProps
)(City)

export default CityContainer;