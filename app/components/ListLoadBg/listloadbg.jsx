import React from 'react';
import { render } from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.scss';

class ListloadBg extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render () {
		const content = this.props.count
		?(()=>{
			let arr = [];
			for(let i=0;i<this.props.count;i++) {
				arr.push(
					<img src="image/listBg.svg" key={i} />
				)
			}
			return arr;
		})()
		:5;
		
		return (
			<div class="listload-wrapper">
				{content}
			</div>
		)
	}
}

export default ListloadBg;

