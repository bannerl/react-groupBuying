import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Cell from '../../../components/Cell/cell';
import './style.scss';

class EditAcount extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render () {
		return (
			<div class="userDetail-content">
				<Cell to="/editWord" title={this.props.userInfos.userName} icon="icon-user-little" value="修改"/>
				<Cell to="/editPassword" title='修改密码' icon="icon-lock_fill" />
			</div>
		)
	}
}

export default EditAcount;