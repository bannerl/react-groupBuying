import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Index from '../containers/index';
import Home from '../containers/Home/home';
import NotFound from '../containers/404';
import Detail from '../containers/Detail/detail';
import City from '../containers/City/city';
import Search from '../containers/Search/search';
import User from '../containers/User/user';
import Login from '../containers/Login/login';
import ShopsType from '../containers/ShopsType/shopstype';

class RouterMap extends React.Component {
	render () {
		return (
			<Router history={this.props.history}>
				<Route path="/" component={Index} >
					<IndexRoute component={Home} />
					<Route path="/shop/:id" component={Detail} />
					<Route path='/city' component={City} />
					<Route path='/shopsType/:type' component={ShopsType} />
					<Route path='/search/:type(/:router)' component={Search} />
					<Route path='/user' component={User} />
					<Route path='/login(/:router)(/:id)' component={Login} />
					
					<Route path='*' component={NotFound} />
				</Route>
			</Router>
		)
	}
}

export default RouterMap;