import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.scss';
import ListLoadBg from '../../components/ListLoadBg/listloadbg';

class List extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
	}
	render () {
		const data = this.props.data;
		const dataContent = data.length
		?data.map((item,i)=>{
			return (<div key={i}>
				<Link to={'/shop/'+item.id+'?id='+Math.floor(Math.random()*10)}>
					<li class="list-item border-1px orderList-wrapper">
						<div class="image-wrapper">
							<img src={item.image} alt="商品" />
						</div>
						<div class="list-content">
							<h4 class="list-title ellipse">{item.title}</h4>
							<p class="list-description">下单时间:2017-09-11 12:10</p>
							<p class="list-description">￥{item.price}</p>
						</div>
					</li>
				</Link>
				</div>)
		})
		:<div class="loading">
			<img src='./image/homeAdBg.svg' />
		</div>;
		
		return (
			<div>
				{
					this.props.data.length
					?<ul class="list-wrapper">
						{dataContent}
					</ul>
					:<ListLoadBg count={6} />
				}
			</div>
		)
	}
}

List.propTypes = {
    data: React.PropTypes.array
}

export default List;