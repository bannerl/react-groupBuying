import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HistorySearch from '../../../components/HistorySearch/historysearch';
import LocalStore from '../../../util/localStore';

class SearchHistory extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			data:[]
		}
	}
	render () {

		return (
			<div>
			
			{
				this.state.data.length
				?<HistorySearch data={this.state.data} deleteHistory={this.deleteHistory.bind(this)}/>
				:""
			}
			</div>
		)
	}
	//删除历史记录
	deleteHistory () {
		LocalStore.set('historySearch',null);
		this.setState({
			data: []
		})
	}
	
	componentDidMount () {
		const data = LocalStore.get('historySearch');
		if(data != null) {
			this.setState({
				data
			})
		}
	}
}

export default SearchHistory;