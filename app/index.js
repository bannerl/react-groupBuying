import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'; 
import { hashHistory } from 'react-router';

import './static/css/common.scss';

import RouterMap from './router/router';
import ConfigStore from './store/configureStore';

const store = ConfigStore();

render (
	<Provider store={store}>
		<RouterMap history={hashHistory} />
	</Provider>,
	document.getElementById('root')
)

