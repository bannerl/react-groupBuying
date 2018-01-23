import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';
import './style.scss';

class Abstract extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render () {
		const data = this.props.data;
		const styles = classNames('iconfont',{
			'icon-star':!this.props.isStore,
			'icon-star-full':this.props.isStore
		});
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
					<span class="float-right btn btn-buy" onClick={this.buyClickHandle.bind(this)}>立即抢购</span>
					<span class="float-right collections" onClick={this.collectionHandle.bind(this)}>
						<i class={styles}></i>
					</span>
				</div>
			</div>
		)
	}
	//点击收藏按钮
	collectionHandle () {
		this.props.collectionHandle()
	}
	//点击购买按钮
	buyClickHandle () {
		this.props.buyClickHandle()
	}
}


export default Abstract;