import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

const Index = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/index').default)
    },'index')
}

const Home = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/Home/home').default)
    },'home')
}

const NotFound = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/404').default)
    },'notFound')
}

const Detail = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/Detail/detail').default)
    },'detail')
}

const City = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/City/city').default)
    },'city')
}

const Search = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/Search/search').default)
    },'search')
}

const User = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/User/user').default)
    },'user')
}

const Login = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/Login/login').default)
    },'login')
}

const ShopsType = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/ShopsType/shopstype').default)
    },'shopsType')
}

const UserOrder = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/UserOrder/userOrder').default)
    },'userOrder')
}

const Collections = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/Collections/collections').default)
    },'collections')
}

const UserDetail = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/UserDetail/userDetail').default)
    },'uerDetail')
}

const EditWord = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/EditWord/editWord').default)
    },'editWord')
}

const EditPassword = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/EditPassword/editPassword').default)
    },'editPassword')
}

const Recommend = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/Recommend/recommend').default)
    },'recommend')
}

class RouterMap extends React.Component {
	render () {
		return (
			<Router history={this.props.history}>
				<Route path="/" getComponent={Index} >
					<IndexRoute getComponent={Home} />
					<Route path="/shop/:id" getComponent={Detail} />
					<Route path='/city' getComponent={City} />
					<Route path='/shopsType/:type' getComponent={ShopsType} />
					<Route path='/search/:type(/:router)' getComponent={Search} />
					<Route path='/user' getComponent={User} />
					<Route path='/login(/:router)(/:id)' getComponent={Login} />
					<Route path='/orders' getComponent={UserOrder} />
					<Route path='/collections' getComponent={Collections} />
					<Route path='/userDetail' getComponent={UserDetail} />
					<Route path='/editWord' getComponent={EditWord} />
					<Route path='/recommend' getComponent={Recommend} />
					<Route path='/editPassword' getComponent={EditPassword} />
					
					<Route path='*' getComponent={NotFound} />
				</Route>
			</Router>
		)
	}
}

export default RouterMap;