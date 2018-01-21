import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as actionTypes from '../constants/store'
import * as UserInfoActionsFromOtherFile from '../actions/userinfo'
import * as LocalStoreKey from '../config/localStoreKey'
import LocalStore from '../util/localStore'

class Index extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			initPage:false
		}
	}
	render () {
		return (
			<div>
				{   this.state.initPage
					?this.props.children
					:<div>加载中...</div>
				}
			</div>
		)
	}
	
	componentDidMount () {
		let cityName = LocalStore.getItem(LocalStoreKey.CITYNAME);
		let userName = LocalStore.getItem(LocalStoreKey.USERNAME);
		if(cityName == null) {
			cityName = '杭州';
		}
		if(userName == null) {
			userName = '';
		}
		
		this.props.userInfoActions.update({
			cityName:cityName,
			userName:userName
		});
		this.setState({
			initPage:true
		})
	}
}

function mapStateToProps () {
	return {}
}

function mapDispatchToProps (dispatch) {
	return {
		userInfoActions: bindActionCreators(UserInfoActionsFromOtherFile,dispatch)
	}
}

const IndexContainer = connect (
	mapStateToProps,
	mapDispatchToProps
)(Index)

export default IndexContainer;