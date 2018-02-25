import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { getOrders } from '../../../fetch/orders/orders';
import OrderListComponent from '../../../components/OrderList/orderList';
import ListLoadBg from '../../../components/ListLoadBg/listloadbg';

class OrderList extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			data:[]
		}
	}
	render () {
		return (
			<ul className="order-wrapper">
				{
					this.state.data.length
					?<OrderListComponent data={this.state.data} />
					:<ListLoadBg count={5} />
				}
			</ul>
		)
	}
	
	componentDidMount() {
		var result = getOrders(this.props.id);
		result.then(res => {
			return res.json()
		}).then(json => {
			this.setState({
				data:json
			})
		}).catch(err => {
			console.error(err)
		})
	}
}

export default OrderList;