import React from 'react';
import { render } from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import HomeAdList from '../../../components/HomeAdList/homeAdList';
import { getAdData } from '../../../fetch/home/home';

class ListAd extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			data:[]
		}
	}
	render () {
		const data = this.state.data;
		return (
			<div>
				<HomeAdList data={data} />
			</div>
		)
	}
	
	componentDidMount () {
		const result = getAdData();
		
		result.then((res)=>{
			return res.json()
		}).then((json)=>{
			this.setState({
				data:json
			});
		});
	}
}

export default ListAd;