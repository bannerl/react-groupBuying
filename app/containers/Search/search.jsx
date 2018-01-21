import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link,hashHistory } from 'react-router';
import InputBind from '../../components/InputBind/input'; 
import SearchHeader from './subpage/header';
import SearchHot from './subpage/searchhot';
import SearchHistory from './subpage/searchhistory';
import HomeFavoriteList from '../../components/HomeFavoriteList/homelist';
import { getSearchResult } from '../../fetch/searchPage/searchpage';
import ResultList from '../../components/ResultList/resultlist';
import LoadMore from '../../components/LoadMore/loadmore';

class Search extends React.Component {
	constructor(props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			value:'',
			data:[],
			hasMore:true,
			isLoading:false,
			page:0,
			isResult:false,
			router:''
		}
	};
	
	render() {
		const {isLoading,hasMore} = this.state;
		return (
			<div class="search-input-page">
				<SearchHeader router={this.state.router} getData={this.getData.bind(this)} />
				{
					this.state.isResult
					?<div>
						<ResultList data={this.state.data} />
							<LoadMore 
							isLoading={isLoading} 
							hasMore={hasMore} 
							loadMore={this.loadMore.bind(this)} 
						/>
					</div>
					:<div>
						<SearchHot router={this.state.router} />
						<SearchHistory router={this.state.router} />
					</div>
				}
			</div>
		);
	};
	
	loadMore () {
		const router = this.props.params.router;
		const kwd = this.props.location.query.kwd;
		this.setState({
			router,
			isLoading:true
		});
		if(kwd){
			setTimeout(() => {
				this.getData(kwd);
			},1000);
		}
	}
	
	componentWillMount () {
		const router = this.props.params.router;
		const kwd = this.props.location.query.kwd;
		this.setState({router});
		if(kwd){
			this.getData(kwd);
		}
	}
	
	//获取路由变化，获取数据
	componentWillReceiveProps (nextProps) {
		const prevKwd = this.props.location.query.kwd;
		const nextKwd = nextProps.location.query.kwd;
		
		if(prevKwd !== nextKwd&&nextKwd != null){
			let kwd = nextKwd.replace(/<.*?>/ig,"");
			this.getData(kwd);
		}
	}
	
	//获取搜索结果
	getData (kwd) {
		this.setState({
			isResult:true
		});
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

export default Search;