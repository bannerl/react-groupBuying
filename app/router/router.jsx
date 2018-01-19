import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Index from '../containers/index';
import Home from '../containers/Home/home';
import NotFound from '../containers/404';
import Detail from '../containers/Detail/detail';
import City from '../containers/City/city';
import searchInputPage from '../containers/searchInputPage/searchinputpage';
import searchResult from '../containers/searchResult/searchresult';

class RouterMap extends React.Component {
	render () {
		return (
			<Router history={this.props.history}>
				<Route path="/" component={Index} >
					<IndexRoute component={Home} />
					<Route path="/shop/:id" component={Detail} />
					<Route path='/city' component={City} />
					<Route path='/searchInputPage' component={searchInputPage} />
					<Route path='/all/:kwd' component={searchResult} />
					
					
					<Route path='*' component={NotFound} />
				</Route>
			</Router>
		)
	}
}

export default RouterMap;