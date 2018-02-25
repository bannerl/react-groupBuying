import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header/header';
import CollectionList from './subpage/collectionList';

class Collections extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render () {
		return (
			<div className="user-wrapper">
				<Header title="收藏"/>
				<CollectionList id={this.props.userInfos.userName} />
			</div>
		)
	}
}

function mapStateToProps (state) {
	return {
		userInfos: state.userinfo,
	}
}


const CollectionsContainer = connect (
	mapStateToProps,
	null
)(Collections)

export default CollectionsContainer;