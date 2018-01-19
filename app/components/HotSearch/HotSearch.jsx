import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router';
import './style.scss';

class HotSearch extends React.Component {
	constructor(props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	};
	
	render() {
		const data = this.props.data;
		return (
			<div class="hot-search-wrapper">
				<div class="hot-search-title border-1px">热门搜索</div>
				<div class="hot-item-wrapper clearfix">
					{data.map((item,i) => {
						return (
							<Link to={"/all/"+encodeURIComponent(item)} class="hot-item float-left" key={i}>{item}</Link>
						)
					})}
				</div>
			</div>
		);
	};
	
}

export default HotSearch;