import React from 'react';
import { render } from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.scss';

class Message extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			title:'提示',
			tips:'操作成功',
			cancelButton:true,
			zIndex:-1
		}
	}
	render () {
		let message = {};
		let { zIndex } = this.state;
		for(var k in this.state){
			if(this.props.message[k]){
				message[k] = this.props.message[k];
			} else {
				message[k] = this.state[k];
			}
		}
		if(this.props.messageShow){
			zIndex = 2000;
			document.getElementsByTagName('body')[0].style.overflow='hidden';
		}else {
			document.getElementsByTagName('body')[0].style.overflow='auto';
		}
		return (
			<div class="msg-wrapper" style={{zIndex:zIndex,display:zIndex>10?'block':'none'}}>
				<div class="msg-container">
					<div class="msg-header">{message.title}</div>
					<div class="msg-body">{message.tips}</div>
					<div class="msg-footer border-1px-top">
						<div class="left" onClick={this.clickHandle.bind(this,true)}>确定</div>
						<div class="right border-1px-left" onClick={this.clickHandle.bind(this,false)}>取消</div>
					</div>
				</div>
			</div>	
		)
	}
	
	//点击事件
	clickHandle (state) {
		this.props.messageResult(state);
		this.setState({
			zIndex:-1
		});
	}
	
	componentDidMount () {
	}
}

export default Message;

