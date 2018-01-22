import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.scss';
import ListLoadBg from '../ListLoadBg/listloadbg';

class HomeFavoriteList extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
	}
	render () {
		const data = this.props.data;
		const dataContent = data.length
		?data.map((item,i)=>{
			return (
				<Link to={'/shop/'+item.id+'?id='+Math.floor(Math.random()*10)} key={i}>
					<li class="favo-item border-1px">
						<div class="image-wrapper">
							<img src={item.image} alt="商品" />
						</div>
						<div class="content">
							<h4 class="title ellipse">{item.title}</h4>
							<p class="description">{item.description}</p>
							<div class="abstract clearfix">
								<span class="price float-left">￥{item.price}</span>
								<span class="count float-right">已售{item.totalCount}</span>
							</div>
						</div>
					</li>
				</Link>)
		})
		:<ListLoadBg count={6} />;
		return (
			<ul class="home-favo-wrapper" >
				{dataContent}
			</ul>
		)
	}
}

HomeFavoriteList.propTypes = {
    data: React.PropTypes.array
}

export default HomeFavoriteList;