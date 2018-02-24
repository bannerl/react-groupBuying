import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import UserSummary from '../../components/UserSummary/userSummary';
import Cell from '../../components/Cell/cell';
import { getItem } from '../../util/localStore';

class User extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render () {
		return (
			<div class="user-wrapper">
				<UserSummary backUrl="/" to="/userDetail" cityName={this.props.userInfos.cityName} userName={this.props.userInfos.userName} />
				<Cell title="我的订单" to="/orders" icon="icon-activity_fill"/>
				<Cell title="我的收藏" to="/collections" icon="icon-collection_fill" iconColor="#ff3131" />
			</div>
		)
	}
	
	componentDidMount() {
		if(!this.props.userInfos.userName){
			hashHistory.push('/');
		}
	}
}
	
function mapStateToProps (state) {
	return {
		userInfos: state.userinfo,
		store: state.store
	}
}

function mapDispatchToProps () {
	return {}
}

const UserContainer = connect (
	mapStateToProps,
	mapDispatchToProps
)(User)

export default UserContainer;