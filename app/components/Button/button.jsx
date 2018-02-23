import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.scss';

class Button extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			classes:''
		}
	}
	
	render () {
		return (
			<button class={"btn"+this.state.classes} onClick={this.clickHandle.bind(this)}>
				{this.props.icon?<i class={"iconfont "+this.props.icon}></i>:''}
				<label>{this.props.title}</label>
			</button>
		)
	}
	clickHandle() {
		if(this.props.clickHandle){
			this.props.clickHandle()
		}
	}
	
	componentDidMount() {
		const {size,type,plain,icon,disabled} = this.props;
		let str = '';
		if(size){
			str += ' btn-button-'+size;
		}else{
			str += ' btn-button-normal';
		}
		if(type){
			str += ' btn-button-'+type;
		}
		if(plain){
			str += ' is-plain';
		}
		if(disabled){
			str += ' is-disabled';
		}
		this.setState({
			classes:str
		});
	}
}
Button.propTypes = {
	icon:PropTypes.string, //图标
	title:PropTypes.string.isRequired, //文字
	classnames:PropTypes.string,  //类名
	clickHandle:PropTypes.func  //点击事件
}
export default Button;