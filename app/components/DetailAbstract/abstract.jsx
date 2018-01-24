import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';
import Button from '../Button/button';

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
					<div class="float-right">
						<Button type="warning" size="small" title="立即抢购" clickHandle={this.buyClickHandle.bind(this)} />
					</div>
					<div  class="float-right">
						<Button type="danger" icon="icon-star" size="small" title="收藏" clickHandle={this.collectionHandle.bind(this)} />
					</div>

					

					<span class="float-right collections btn btn-collection" onClick={this.collectionHandle.bind(this)}>
						{
							this.props.isStore?'已收藏':'收藏'
						}<i class={styles}></i>
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