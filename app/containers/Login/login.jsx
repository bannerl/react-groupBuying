import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import * as UserInfoActions from '../../actions/userinfo';
import Header from '../../components/Header/header';
import LoginComponent from '../../components/Login/login';

class Login extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			isLogin: false
		}
	}
	render () {
		return (
			<div>
				<Header title="登陆" />
				
				<LoginComponent />
			</div>
		)
	}
}

function mapStateToProps (state) {
	return {}
}

function mapDispatchToProps (dispath) {
	return {
		InfoActions: bindActionCreators(UserInfoActions,dispath)
	}
}

const LoginContainer = connect (
	mapStateToProps,
	mapDispatchToProps
)(Login)

export default LoginContainer;