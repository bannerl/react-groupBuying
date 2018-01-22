import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import * as UserInfoActions from '../../actions/userinfo';
import Header from '../../components/Header/header';
import LoginComponent from '../../components/Login/login';
import { LoginIn } from '../../fetch/login/login';
import LocalStore from '../../util/localStore';

class Login extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			isLogin:false
		}
	}
	render () {
		return (
			<div>
				<Header title="登录" />
				<LoginComponent getData={this.getData.bind(this)} />
			</div>
		)
	}
	
	componentDidMount () {
		const userName = this.props.userInfos.userName;
		const localUserName = LocalStore.getItem('userName');
		if(userName !== ''||localUserName) {
			this.goUserPage()
		}
	}
	
	//获取登录信息
	getData (phone,code) {
		//后台验证
		let params = {
			phone,code
		}
		const result = LoginIn(params);
		
		result.then(res=>{
			return res.json()
		}).then(json => {
			if(json.state === 'success') {
				let obj = this.props.userInfos;
				obj.userName = params.phone;
				LocalStore.setItem('userName',params.phone);
				this.props.InfoActions.update(obj);
				this.goUserPage()
			}
		})
	}
	
	// 跳转用户页面
	goUserPage () {
		const router = this.props.params.router;
		if(router) {
			hashHistory.push('/'+router);
		} else {
			hashHistory.push('/user');
		}
	}
}

function mapStateToProps (state) {
	return {
		userInfos:state.userinfo
	}
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