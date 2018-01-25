import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from '../../components/Header/header';
import Button from '../../components/Button/button';
import EditAcount from './subpage/editAcount';

class UserDetail extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render () {
		const styles = {
			color:this.props.iconColor?this.props.iconColor:'#1890FF'
		}
		return (
			<div class="userDetail-wrapper">
				<Header title="我的账户" />
				<EditAcount userInfos={this.props.userInfos} />
				<div class="loginOut-content">
					<Button title="退出登录" type="warning" size="large" clickHandle={this.clickHandle.bind(this)} />
				</div>
			</div>
		)
	}
	
	//退出登录
	clickHandle() {
		
	}
	
}

function mapStateToProps (state) {
	return {
		userInfos: state.userinfo
	}
}

const UserDetailContainer = connect (
	mapStateToProps,
	null
)(UserDetail)
	

export default UserDetailContainer;