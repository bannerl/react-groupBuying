import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header/header';
import OrderList from './subpage/orderList';

class UserOrder extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render () {
		return (
			<div className="user-wrapper">
				<Header title="订单"/>
				<OrderList id={this.props.userInfos.userName} />
			</div>
		)
	}
}

function mapStateToProps (state) {
	return {
		userInfos: state.userinfo,
	}
}


const UserOrderContainer = connect (
	mapStateToProps,
	null
)(UserOrder)

export default UserOrderContainer;