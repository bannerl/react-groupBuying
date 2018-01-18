import React from 'react';
import {render}  from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { hashHistory, Link, Route } from 'react-router';

class HotCity extends React.Component {
	constructor(props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	};
	
	render() {
		return (
			<div >
				<ul>
					<li onClick={this.clickHandle.bind(this,"北京")}>北京</li>
					<li onClick={this.clickHandle.bind(this,"上海")}>上海</li>
				</ul>
			</div>
		);
	};
	
	//切换城市
	clickHandle (city) {
		this.props.cityHandle(city);
	}
}

export default HotCity;