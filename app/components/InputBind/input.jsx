import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.scss';

class Input extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			value:'',
			closeState:false
		}
	}
	render () {
		const tips = this.props.placeHolder?this.props.placeHolder:'';
		const { closeState,value} = this.state;
		return (
			<div class="input-bind">
				<input 
					type="text" 
					ref="value"
					value={value} 
					onChange={this.changeHandle.bind(this)} 
					onKeyUp={this.KeyUpHandle.bind(this,value)}
					placeholder={tips}
				/>
				{ closeState?<span class="iconfont icon-close" onClick={this.deleteText.bind(this)}></span>:'' }
			</div>
		)
	}
	
	//清空数据
	deleteText () {
		this.setState({
			value:'',
			closeState:false
		});
		this.refs.value.focus();
		this.props.getVal('');
	}
	
	//绑定输入数据
	changeHandle (e) {
		let value = e.target.value;
		this.setState({
			value:value
		});
		
		//传出value
		if(this.props.getVal) {
			this.props.getVal(value);
		}
		
		//打开关闭按钮
		if(value.length>0) {
			this.state.closeState = true
		} else {
			this.state.closeState = false
		}
	}
	//键盘按下事件传到父节点中
	KeyUpHandle (val,e) {
		if(this.props.KeyUpHandle){
			this.props.keyUpHandle(val,e)
		}
	}
	componentDidMount () {
		if(this.props.IsFocus) {
			this.refs.value.focus();
		}
		if(this.props.value){
			this.setState({
				value:this.props.value
			})
		}
	}
}

	/*
	 * 提供传入参数
	 * placeHolder 提示显示
	 * IsFocus 页面加载是否获取焦点
	 * 父组件可通过keyUpHandle获取键盘事件
	 * 父组件可通过getVal获取输入框值
	*/
Input.propTypes = {
	KeyUpHandle: PropTypes.func,
	getVal: PropTypes.func,
	val: PropTypes.string,
	placeHolder: PropTypes.string,
	IsFocus: PropTypes.bool
}

export default Input;