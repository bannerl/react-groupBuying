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
			return (
				<Link to={'/shop/'+item.id+'?id='+Math.floor(Math.random()*10)} key={i}>
					<li className="list-item border-1px">
						<div className="image-wrapper">
							<img src={item.image} alt="商品" />
						</div>
						<div className="list-content">
							<h4 className="list-title ellipse">{item.title}</h4>
							<p className="list-description">{item.description}</p>
							<div className="list-abstract clearfix">
								<span className="price float-left">￥{item.price}</span>
								<span className="count float-right">已售{item.totalCount}</span>
							</div>
						</div>
					</li>
				</Link>)
		})
		:<div className="loading">
			<img src='./image/homeAdBg.svg' />
		</div>;
		
		return (
			<div>
				{
					this.props.data.length
					?<ul className="list-wrapper">
						{dataContent}
					</ul>
					:<ListLoadBg count={6} />
				}
			</div>
		)
	}
}

List.propTypes = {
    data: PropTypes.array
}

export default List;