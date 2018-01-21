import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router';
import './style.scss';
import Input from '../InputBind/input';

class Home extends React.Component {
	constructor(props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			active:false
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
					<div class={"login-btn "+(active?'active':'')} onClick={this.clickHandle.bind(this)}>登陆</div>
				</div>
			</div>
		);
	};
	//获取输入的手机号
	getPhone (val) {
		console.log(val)
	}
	//获取输入的验证码
	getCode (val) {
		
	}
	//获取验证码
	getOriginCode () {
		
	}
	//切换登陆按钮点击样式
	clickHandle () {
		this.setState({
			active:true
		})
		setTimeout(()=>{
			this.setState({
				active:false
			})
		},100)
	}
	
}

export default Home;