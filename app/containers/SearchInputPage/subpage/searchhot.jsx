import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HotSearch from '../../../components/HotSearch/hotsearch';
import { getHotSearch } from '../../../fetch/searchPage/searchpage';

class SearchHot extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			data:[]
		}
	}
	render () {
		return (
			<HotSearch data={this.state.data} />
		)
	}
	
	componentDidMount () {
		const result = getHotSearch();
		
		result.then((res) => {
			return res.json()
		}).then((json) => {
			this.setState({
				data: json
			});
		})
	}
}

export default SearchHot;