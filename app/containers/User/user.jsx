import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header/header';

class Name extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render () {
		return (
			<div>
				<Header title="个人中心" backUrl="/" />
				
			</div>
		)
	}
}

function mapStateToProps () {
	return {
		
	}
}

function mapDispatchToProps () {
	return {
		
	}
}

const Names = connect (
	mapStateToProps,
	mapDispatchToProps
)(Name)

export default Names;