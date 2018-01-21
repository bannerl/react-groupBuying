import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.scss';

class List extends React.Component {
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
					<li class="list-item border-1px">
						<div class="image-wrapper">
							<img src={item.image} alt="商品" />
						</div>
						<div class="list-content">
							<h4 class="list-title ellipse">{item.title}</h4>
							<p class="list-description">{item.description}</p>
							<div class="list-abstract clearfix">
								<span class="price float-left">￥{item.price}</span>
								<span class="count float-right">已售{item.totalCount}</span>
							</div>
						</div>
					</li>
				</Link>)
		})
		:<div class="loading">
			<img src='./image/homeAdBg.svg' />
		</div>;
		
		return (
			<div>
				<ul class="list-wrapper">
					{dataContent}
				</ul>
			</div>
		)
	}
}

List.propTypes = {
    data: React.PropTypes.array
}

export default List;