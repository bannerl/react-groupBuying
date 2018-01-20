import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link,hashHistory } from 'react-router';
import InputBind from '../../components/InputBind/input'; 
import SearchHeader from './subpage/header';
import SearchHot from './subpage/searchhot';
import SearchHistory from './subpage/searchhistory';
import HomeFavoriteList from '../../components/HomeFavoriteList/homelist';

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
			isResult:false
		}
	};
	
	render() {
		return (
			<div class="search-input-page">
				<SearchHeader getData={this.getData.bind(this)} />
				{
					this.state.isResult
					?'这是结果页面'
					:<div>
						<SearchHot />
						<SearchHistory />
					</div>
				}
			</div>
		);
	};
	
	componentWillReceiveProps () {
		console.log(1)
	}
	
	//获取搜索结果
	getData (data) {
		console.log(data)
		this.setState({
			data:data
		})
	}
	
}

export default Search;