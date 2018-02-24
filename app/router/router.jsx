import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

//const index = r => require.ensure([], () => r(require('../page/index/index')), 'index')
const Index = r => require.ensure([], () => r(require('../containers/index')), 'index')
const Home = r => require.ensure([], () => r(require('../containers/Home/home')), 'index')
const NotFound = r => require.ensure([], () => r(require('../containers/404')), 'notFound')
const Detail = r => require.ensure([], () => r(require('../containers/Detail/detail')), 'detail')
const City = r => require.ensure([], () => r(require('../containers/City/city')), 'city')
const Search = r => require.ensure([], () => r(require('../containers/Search/search')), 'search')
const User = r => require.ensure([], () => r(require('../containers/User/user')), 'user')
const Login = r => require.ensure([], () => r(require('../containers/Login/login')), 'login')
const ShopsType = r => require.ensure([], () => r(require('../containers/ShopsType/shopstype')), 'shopsType')
const UserOrder = r => require.ensure([], () => r(require('../containers/UserOrder/userOrder')), 'userOrder')
const Collections = r => require.ensure([], () => r(require('../containers/Collections/collections')), 'collections')
const UserDetail = r => require.ensure([], () => r(require('../containers/UserDetail/userDetail')), 'userDetail')
const EditWord = r => require.ensure([], () => r(require('../containers/EditWord/editWord')), 'editWord')
const EditPassword = r => require.ensure([], () => r(require('../containers/EditPassword/editPassword')), 'editPassword')
const Recommend = r => require.ensure([], () => r(require('../containers/Recommend/recommend')), 'recommend')

//import Index from '../containers/index';
//import Home from '../containers/Home/home';
//import NotFound from '../containers/404';
//import Detail from '../containers/Detail/detail';
//import City from '../containers/City/city';
//import Search from '../containers/Search/search';
//import User from '../containers/User/user';
//import Login from '../containers/Login/login';
//import ShopsType from '../containers/ShopsType/shopstype';
//import UserOrder from '../containers/UserOrder/userOrder';
//import Collections from '../containers/Collections/collections';
//import UserDetail from '../containers/UserDetail/userDetail';
//import EditWord from '../containers/EditWord/editWord';
//import EditPassword from '../containers/EditPassword/editPassword';
//import Recommend from '../containers/Recommend/recommend';

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
					<Route path='/orders' component={UserOrder} />
					<Route path='/collections' component={Collections} />
					<Route path='/userDetail' component={UserDetail} />
					<Route path='/editWord' component={EditWord} />
					<Route path='/recommend' component={Recommend} />
					<Route path='/editPassword' component={EditPassword} />
					
					<Route path='*' component={NotFound} />
				</Route>
			</Router>
		)
	}
}

export default RouterMap;