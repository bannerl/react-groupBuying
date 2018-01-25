import React from 'react';
import { Link } from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.scss';
import Header from '../../components/Header/header'
import Input from '../../components/InputBind/input'
import Button from '../../components/Button/button';
import * as UserInfoActionsFromFile from '../../actions/userinfo';

class EditWord extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			value:'',
			val:''
		};
	}
	render () {
		
		return (
			<div class="editWord-wrapper">
				<Header title='编辑用户名' />
				<div class="content">
					<Input IsFocus getVal={this.getVal.bind(this)} value={this.props.userInfos.userName} />
				</div>
				<div class="editWord-confirm">
					<Button clickHandle={this.clickHandle.bind(this)} type="warning" size="large" title="保存" />
				</div>
			</div>
		)
	}
	
	//保存
	clickHandle() {
		let userInfos = this.props.userInfos;
		if(this.state.val.length>2){
			userInfos.userName = this.state.val;
		}else{
			userInfos.userName = this.props.userInfos.userName;
		}
		this.props.userInfoActions.update(userInfos);
		window.history.back();
	}
	//获取value
	getVal(val) {
		this.setState({
			val
		})
	}
}


function mapStateToProps (state) {
	return {
		userInfos: state.userinfo
	}
}

function mapDispatchToProps(dispatch) {
	return {
		userInfoActions: bindActionCreators(UserInfoActionsFromFile,dispatch)
	}
}

const EditWordContainer = connect (
	mapStateToProps,
	mapDispatchToProps
)(EditWord)

export default EditWordContainer;