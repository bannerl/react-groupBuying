import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router';
import './style.scss';
import Input from '../InputBind/input';
import { hashHistory,router } from 'react-router';

class Login extends React.Component {
	constructor(props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			active:false,
			phone:'',
			code:'',
			tipText:'',
			visible:false
		}
	};
	
	render() {
		const {visible,active} = this.state;
		
		return (
			<div className="login-wrapper">
				<div className="content">
					<div className="phone border-1px">
						<Input inputType="tel" getVal={this.getPhone.bind(this)} placeHolder="请输入手机号" />
						<div className="btn" onClick={this.getOriginCode.bind(this)}>获取验证码</div>
					</div>
					<div className="code border-1px">
						<Input getVal={this.getCode.bind(this)}  placeHolder="请输入验证码" />
					</div>
					<div className={"login-btn "+(active?'active':'')} onClick={this.clickHandle.bind(this)}>登录</div>
				</div>
				<div className={'error-tips '+(visible?'on':'')} >{this.state.tipText}</div>
			</div>
		);
	};
	//获取输入的手机号
	getPhone (val) {
		if(val) {
			this.setState({
				phone:val,
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
	//展示错误提示
	showToastHandle(tipText,time) {
		time = time || 1500;
		this.setState({
			visible: true,
			tipText
		});
		setTimeout(() => {
			console.log(34342);
			console.log(window.href,window.location);
			
			this.setState({
				visible: false
			});
			
		},time);
	}
	
	//获取验证码
	getOriginCode () {
		this.showToastHandle('1234');
	}
	//切换登陆按钮点击样式
	clickHandle () {
		this.setState({
			active:true
		});
		setTimeout(()=>{
			this.setState({
				active:false
			});
			this.savaData();	
		},100);
	}
	//保存登录状态
	savaData () {
		const phone = this.state.phone;
		const code = this.state.code;
		//验证是否正确
		if(!/^1[0-9]{10}/.test(phone)){
			this.showToastHandle('手机号输入不正确');
			return;
		} 
		if(code !== '1234'){
			this.showToastHandle('验证码错误');
			return;
		}
		this.props.getData(phone,code);
	}
	
}



export default Login;