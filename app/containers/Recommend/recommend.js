import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from '../../components/Header/header';
import ShopList from '../../components/ShopList/ShopList';
import LoadMore from '../../components/LoadMore/loadmore';
import { getSearchResult } from '../../fetch/searchPage/searchpage';

class Recommend extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			title: '推荐',
			data:[],
			hasMore:true,
			isLoading:false,
			page:0,
			animateState:true
		}
	}
	
	render () {	
		const {data,hasMore,isLoading,title} = this.state;	
		return (
			<div>
				<Header title={title} />
				<ShopList data={data} />
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
		const router = this.props.location.query.router;
		this.setState({
			isLoading:true
		});
		if(router){
			setTimeout(() => {
				this.getData(router);
			},500);
		}
	}
	
	componentWillMount () {
		const router = this.props.location.query.router;
		if(router === 'yuehui'){
			this.setState({
				title: "我们约吧"
			})
		}else if(router === 'cheap'){
			this.setState({
				title: "低价超值"
			})
		}else{
			this.setState({
				title: "午后时光"
			})
		}
		document.body.scrollTop = document.documentElement.scrollTop = 0;
		const type = router;
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


export default Recommend;