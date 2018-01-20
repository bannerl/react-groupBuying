import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link,hashHistory } from 'react-router';
import InputBind from '../../components/InputBind/input'; 
import SearchHeader from './subpage/header';
import SearchHot from './subpage/searchhot';
import SearchHistory from './subpage/searchhistory';

class SearchInputPage extends React.Component {
	constructor(props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			value:''
		}
	};
	
	render() {
		return (
			<div class="search-input-page">
				<SearchHeader />
				<SearchHot />
				<SearchHistory />
			</div>
		);
	};
	
}

export default SearchInputPage;