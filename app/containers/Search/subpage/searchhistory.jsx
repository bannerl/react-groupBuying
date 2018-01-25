import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HistorySearch from '../../../components/HistorySearch/historysearch';
import LocalStore from '../../../util/localStore';
import Message from '../../../components/Message/message';
import Dialog from '../../../components/Dialog/dialog';

class SearchHistory extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			data:[],
			message: {
				tips: "确定要删除吗？"
			},
			isShowMessage:false
		}
	}
	render () {
		
		return (
			<div>
				{
					this.state.data.length
					?<HistorySearch router={this.props.router} data={this.state.data} deleteHistory={this.deleteHistory.bind(this)}/>
					:""
				}
				<Dialog>
					<Message 
						messageShow={this.state.isShowMessage} 
						message={this.state.message} 
						messageResult={this.messageResult.bind(this)} />
				</Dialog>
			</div>
		)
	}
	
	//删除历史记录
	deleteHistory () {
		this.setState({
			isShowMessage:!this.state.isShowMessage
		})
	}
	//弹出模态框
	messageResult (state) {
		if(state){
			LocalStore.set('historySearch',null);
			this.setState({
				data: []
			})
		}
		this.deleteHistory()
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