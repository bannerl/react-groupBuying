import React from 'react';
import { hashHistory } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from '../../components/Header/header';
import LocalStore from '../../util/localStore';
import { getSearchResult } from '../../fetch/searchPage/searchpage';
import ShopList from '../../components/ShopList/ShopList';
import LoadMore from '../../components/LoadMore/loadmore';

class ShopsType extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			data:[],
			hasMore:true,
			isLoading:false,
			page:0,
			animateState:true
		}
	}
	render () {
		const titles = {
				meishi:'美食',
				jiudian:'酒店',
				chaoshi:'超市',
				waimai:'外卖',
				huoche:'火车',
				car:'出行',
				song:'KTV',
				xiuxian:"休闲娱乐",
				xiaochi:'小吃',
				all:'全部',
				dianying:'电影',
				xinshang:'今日上新'
			};
		const {data,hasMore,isLoading} = this.state;	
		return (
			<div>
				<Header title={titles[this.props.params.type]} />
				<ShopList data={this.state.data} />
				{
					data.length
					?<LoadMore 
						isLoading={isLoading} 
						hasMore={hasMore} 
						loadMore={this.loadMore.bind(this)} 
					/>
					:''
				}
			</div>
		)
	}
	
	//加载更多
	loadMore () {
		const type = this.props.params.type;
		this.setState({
			isLoading:true
		});
		if(type){
			setTimeout(() => {
				this.getData(type);
			},500);
		}
	}
	
	componentWillMount () {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
		const type = this.props.params.type;
		if(type){
			this.getData(type);
		}
	}
	
	//获取筛选结果
	getData (kwd) {
		let page = this.state.page;
		const result = getSearchResult(kwd,page);
		page++;
		result.then(res => {
			return res.json()
		}).then(json => {
			let data = json;
			if(this.state.data.length){
				data = this.state.data.concat(json);
			}
			this.setState({
				data:data,
				page,
				isLoading:false
			});
		})
	}
}

export default ShopsType;