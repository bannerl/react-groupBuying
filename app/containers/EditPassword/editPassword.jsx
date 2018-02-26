import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from '../../components/Header/header';
import Toast from '../../components/Toast/toast';
import HocInput from '../../components/InputBind/hocInput';
import HocButton from '../../components/Button/hocButton';
import { hashHistory } from 'react-router';

class EditPassword extends React.Component {
	constructor(props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			passw:'',
			cpassw:'',
			toastShow:false,
			tips: ''
		}
	};
	
	render() {
		
		const style = {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate3d(-50%,-50%,0)',
			padding: '.07rem .1rem',
			color:'#fff',
			borderRadius:'.06rem',
			background:'rgba(0,0,0,.5)',
			display: this.state.toastShow?'block':'none'
		}
		return (
			<div>
				<Header onClick={this.clickHandle.bind(this)}  title="修改密码" />
				<HocInput tipText="新密码" inputType="password" getVal={this.getPassWordHandle.bind(this)} placeHolder="请输入新密码" />
				<HocInput tipText="确认密码" inputType="password" getVal={this.getPassWordAgainHandle.bind(this)} placeHolder="请再次输入新密码" />
				<HocButton clickHandle={this.clickHandle.bind(this)} title="保存" type="danger" size="large" />
				<div style={style} className="toast-tips">{this.state.tips}</div>
			</div>
		);
	};
	getPassWordHandle(passw) {
		
		this.setState({
			passw
		})
	}
	getPassWordAgainHandle(cpassw) {
		this.setState({
			cpassw
		})
	}
	showToastHandle(tips,su) {
		this.setState({
			toastShow: true,
			tips
		});
		setTimeout(() => {
			this.setState({
				toastShow: false
			});
			if(su){
				hashHistory.go(-1);
			}
		},1500);
	}
	clickHandle() {
		const passw = this.state.passw.trim();
		const cpassw = this.state.cpassw.trim();
		if(passw.length<6||cpassw.length<6){
			this.showToastHandle('密码长度不能少于6位');
		}else if(passw !== cpassw){
			this.showToastHandle('两次密码输入不一致');
		}else{
			this.showToastHandle('保存成功','success');
		}
	}
	componentDidMount() {
		
	}
}

export default EditPassword;