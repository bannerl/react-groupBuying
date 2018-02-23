import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router';
import './style.scss';
import Input from '../InputBind/input';
import { hashHistory } from 'react-router';
import Dialog from '../Dialog/dialog';
import Toast from '../Toast/toast';

class Login extends React.Component {
	constructor(props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			active:false,
			phone:'',
			code:'',
			visible:false,
		}
	};
	
	render() {
		const active = this.state.active;
		
		return (
			<div class="login-wrapper">
				<div class="content">
					<div class="phone border-1px">
						<Input getVal={this.getPhone.bind(this)} placeHolder="请输入手机号" />
						<div class="btn" onClick={this.getOriginCode.bind(this)}>获取验证码</div>
					</div>
					<div class="code border-1px">
						<Input getVal={this.getCode.bind(this)}  placeHolder="请输入验证码" />
					</div>
					<div class={"login-btn "+(active?'active':'')} onClick={this.clickHandle.bind(this)}>登录</div>
				</div>
				<Dialog visible={this.state.visible}>
					<Toast visible={this.state.visible}
						message="密码错误"
					/>
				</Dialog>
			</div>
		);
	};
	//获取输入的手机号
	getPhone (val) {
		if(val) {
			this.setState({
				phone:val
			})
		}
	}
	//获取输入的验证码
	getCode (val) {
		if(val) {
			this.setState({
				code:val
			})
		}
	}
	//获取验证码
	getOriginCode () {
		this.setState({
			visible:true
		})
	}
	//切换登陆按钮点击样式
	clickHandle () {
		this.setState({
			active:true
		})
		setTimeout(()=>{
//			if(this.state) {
//				this.setState({
//					active:false
//				})
//			}
		},100);
		this.savaData()
	}
	//保存登录状态
	savaData () {
		const phone = this.state.phone;
		const code = this.state.code;
		//验证是否正确
		if(/^1[0-9]{10}/.test(phone)){
			this.props.getData(phone,code);
		} else {
			//alert('手机号填写错误');
		}
		this.props.getData(phone,code);
	}
	
}



export default Login;