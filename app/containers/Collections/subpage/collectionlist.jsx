import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { getCollection } from '../../../fetch/collection/collection';
import OrderListComponent from '../../../components/OrderList/orderList';
import ListLoadBg from '../../../components/ListLoadBg/listloadbg';
import LocalStore from '../../../util/localStore';
import * as LocalStoreKey from '../../../config/localStoreKey';

class OrderList extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			data:[]
		}
	}
	render () {
		const styles = {
			textAlign:'center',
			padding:".5rem 0",
			fontSize:'.16rem',
			color:'#777'
			
		}
		return (
			<ul class="order-wrapper">
				{
					this.state.data.length
					?<OrderListComponent data={this.state.data} />
					:<div class="noCollectionsData" style={styles}>
						暂无收藏记录
					</div>
				}
			</ul>
		)
	}
	
	componentDidMount() {
		const arr = LocalStore.get(LocalStoreKey.SHOPSSTORE);
		var result = getCollection(this.props.id);
		result.then(res => {
			return res.json()
		}).then(json => {
			let data = json;
			let _data = [];
			if(arr != null){
				data.forEach((item) => {
					arr.forEach((_item) => {
						if(item.id == _item.id){
							_data.push(item);
						}
					})
				})
			}
			data = _data;
			
			if(data.length){
				this.setState({
					data
				});
			}
		}).catch(err => {
			if (__DEV__) {
                console.error('用户主页“订单列表”获取数据报错, ', err.message)
            }
		})
	}
}

export default OrderList;