import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from '../Header/header';
import {Link,hashHistory} from 'react-router';
import './style.scss';

class UserSummary extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render () {
		return (
			<div class="user-summary-wrapper">
				<div class="return">
					<i onClick={this.clickHandle.bind(this)} class="iconfont icon-fanhui"></i>
					<span class="title">个人中心</span>
				</div>
				<img class="bg" src="image/userTopBg.jpg"/>
				<Link class="user-summary" to={this.props.to}>
					<img class="avatar" height="60" width="60" src="image/default-avatar.png" />
					<div class="content">
						<div class="userName">{this.props.userName}</div>
						<div class="userCity">{this.props.cityName}</div>
					</div>
					<div class="arrow">
						<i class="iconfont icon-arrow-right"></i>
					</div>
				</Link>
			</div>
		)
	}
	clickHandle() {
		hashHistory.push(this.props.backUrl)
	}
}


export default UserSummary;