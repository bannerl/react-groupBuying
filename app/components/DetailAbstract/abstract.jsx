import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.scss';

class Name extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render () {
		const data = this.props.data;
		return (
			<div class="detail-abstract">
				<div class="image-wrapper">
					<img src={data.image} />
					<div class="content">
						<h3 class="title">{data.title}</h3>
						<p class="desc">{data.description}</p>
					</div>
				</div>
				<div class="price-wrapper border-1px">
					<span class="float-left price">{data.price}</span>
					<span class="float-right btn btn-buy">立即抢购</span>
				</div>
			</div>
		)
	}
}

function mapStateToProps () {
	return {
		
	}
}

function mapDispatchToProps () {
	return {}
}

const Abstract = connect (
	mapStateToProps,
	mapDispatchToProps
)(Name)

export default Abstract;