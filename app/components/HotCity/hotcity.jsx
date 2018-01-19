import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.scss';

class HotCity extends React.Component {
	constructor(props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	};
	
	render() {
		return (
			<div class="hot-city">
			    <div class="title border-1px">热门城市</div>
				<ul class="clearfix">
					<li class="float-left item" onClick={this.clickHandle.bind(this,"北京")}><span>北京</span></li>
					<li class="float-left item" onClick={this.clickHandle.bind(this,"上海")}><span>上海</span></li>
					<li class="float-left item" onClick={this.clickHandle.bind(this,"杭州")}><span>杭州</span></li>
					<li class="float-left item" onClick={this.clickHandle.bind(this,"南京")}><span>南京</span></li>
					<li class="float-left item" onClick={this.clickHandle.bind(this,"武汉")}><span>武汉</span></li>
					<li class="float-left item" onClick={this.clickHandle.bind(this,"合肥")}><span>合肥</span></li>
					<li class="float-left item" onClick={this.clickHandle.bind(this,"重庆")}><span>重庆</span></li>
					<li class="float-left item" onClick={this.clickHandle.bind(this,"上海")}><span>贵州</span></li>
				</ul>
			</div>
		);
	};
	
	//切换城市
	clickHandle (city) {
		this.props.cityHandle(city);
		window.history.back();
	}
}

export default HotCity;