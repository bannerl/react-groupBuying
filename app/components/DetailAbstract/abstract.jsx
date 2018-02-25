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
			<div className="detail-abstract">
				<div className="image-wrapper">
					<img src={data.image} />
					<div className="content">
						<h3 className="title">{data.title}</h3>
						<p className="desc">{data.description}</p>
					</div>
				</div>
				<div className="price-wrapper border-1px">
					<span className="float-left price">{data.price}</span>
					<div className="float-right">
						<Button type="danger" size="small" title="立即抢购" clickHandle={this.buyClickHandle.bind(this)} />
					</div>
					<div  className="float-right collection">
						<Button type="warning"  size="small"
							icon={this.props.isStore?'icon-star-full':"icon-star"} 
							title={this.props.isStore?'已收藏':"收藏"} 
							clickHandle={this.collectionHandle.bind(this)} />
					</div>
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