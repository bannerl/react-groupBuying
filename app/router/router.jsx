import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import Index from '../containers/index';
import Home from '../containers/Home/home';
import NotFound from '../containers/404';
import Detail from '../containers/Detail/detail';

class RouterMap extends React.Component {
	render () {
		return (
			<Router history={this.props.history}>
				<Route path="/" component={Index} >
					<IndexRoute component={Home} />
					<Route path="/shop/:id" component={Detail} />
					<Route path='*' component={NotFound} />
				</Route>
			</Router>
		)
	}
}

export default RouterMap;