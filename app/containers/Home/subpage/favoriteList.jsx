import React from 'react';
import { render } from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getFavoriteListData } from '../../../fetch/home/home';
//import HomeFavoriteList from '../../../components/HomeFavoriteList/homelist';
import ShopList from '../../../components/ShopList/ShopList';
import LoadMore from '../../../components/LoadMore/loadmore';
import './style.scss'; 

class FavoriteList extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			data:[],
			hasMore:true,
			isLoading:false,
			page:0
		}
	}
	render () {
		const {isLoading,data,hasMore} = this.state;
		return (
			<div>
				<h3 class="home-favo-title border-1px">猜你喜欢</h3>
				<ShopList data={data} />
				{
					data.length
					?<LoadMore isLoading={isLoading} hasMore={hasMore} loadMore={this.loadMore.bind(this)} />
					:''
				}
			</div>
		)
	}
	
	//加载更多
	loadMore () {
		let {page} = this.state;
		this.setState({
			isLoading:true
		});
		page++; //分页页码
		if( this.state.hasMore ) {
			let result = getFavoriteListData(this.props.cityName,page);
			setTimeout(() =>{
				this.handlerResult(result,page);
			},900);
			
		}
	}
	
	componentDidMount () {
		let self = this;
		let result = getFavoriteListData(this.props.cityName,this.state.page);
		this.handlerResult(result,this.state.page);
	}
	
	//处理数据
	handlerResult (result,page) {
		result.then((res) => {
			return res.json();
		}).then((json)=>{
			if(json.length) {
				let data = this.state.data;
				this.setState({
					data:data.concat(json),
					page:page,
					isLoading:false
				});
			} else {
				this.setState({
					hasMore:false
				});
			}
		});
		
		
	}
}

export default FavoriteList;