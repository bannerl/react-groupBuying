import React from 'react';
import {render}  from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { hashHistory, Link, Route } from 'react-router';

class Home extends React.Component {
	constructor(props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	};
	
	render() {
		const style = {
			"padding": ".3rem 0",
			"background": "#fff",
			textAlign: "center",
			fontSize: ".18rem"
		}
		return (
			<div style={style}>{this.props.cityName}</div>
		);
	};
	
	componentDidMount () {
		
	}
}

export default Home;