import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router';
import './style.scss';

class HistorySearch extends React.Component {
	constructor(props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	};
	
	render() {
		const data = this.props.data;
		return (
			<div class="history-search-wrapper">
				<div class="history-search-title border-1px">
					<div class='clearfix'>
						<span class="text float-left">历史搜索</span>
						<i class="iconfont icon-delete float-right" onClick={this.clickHandle.bind(this)}></i>
					</div>
				</div>
				<div class="history-item-wrapper clearfix">
					{data.map((item,i) => {
						return (
							<Link to={"/search/all/"+this.props.router+"?kwd="+encodeURIComponent(item)} class="history-item float-left" key={i}>{item}</Link>
						)
					})}
				</div>
			</div>
		);
	};
	clickHandle () {
		this.props.deleteHistory();
	}
	
}

export default HistorySearch;