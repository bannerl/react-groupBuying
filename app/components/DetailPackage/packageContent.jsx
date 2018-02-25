import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.scss';

class PackageContent extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render () {
		const title = this.props.data?this.props.data.title:'套餐';
		const data = this.props.data?this.props.data.types.map((item,i) => {
				return <li className="item border-1px" key={i}>
					<div className="item-title border-1px-right ellipse">{item.title}</div>
					<div className="item-count border-1px-right">{item.count}个</div>
					<div className="item-price">{item.price}元</div>
				</li>
		}):<div>正在加载...</div>;
					
		return (
			<div className="detail-package">
				<h3 className="title border-1px">{title}</h3>
				<ul>
					{data}
				</ul>
			</div>
		)
	}
}

export default PackageContent;