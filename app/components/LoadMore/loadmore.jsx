import React from 'react';
import { render } from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.scss';

class LoadMore extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			title:'提示',
			tips:'操作成功',
			cancelButton:true,
			zIndex:-1
		}
	}
	render () {
		const {hasMore,isLoading} = this.props;
		return (
			<div className={(hasMore?"":"hidden")+" load-more"} onClick={this.clickHandle.bind(this)}>
			{isLoading?<div><span className="home-loading-animation"></span></div>:'加载更多'}
			</div>
		)
	}
	
	//点击事件
	clickHandle (state) {
		this.props.loadMore();
	}
}

export default LoadMore;

