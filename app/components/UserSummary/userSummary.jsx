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
			<div className="user-summary-wrapper">
				<div className="return">
					<i onClick={this.clickHandle.bind(this)} className="iconfont icon-fanhui"></i>
					<span className="title">个人中心</span>
				</div>
				<img className="bg" src="image/userTopBg.jpg"/>
				<Link className="user-summary" to={this.props.to}>
					<img className="avatar" height="60" width="60" src="image/default-avatar.png" />
					<div className="content">
						<div className="userName">{this.props.userName}</div>
						<div className="userCity">{this.props.cityName}</div>
					</div>
					<div className="arrow">
						<i className="iconfont icon-arrow-right"></i>
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