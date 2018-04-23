/**
 * External dependenices
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

/**
 * Internal dependencies
 */
import App from '_components/App';
import style from './styles/Index.scss';

import configureStore from '_store';

const store = configureStore({});

render(
	<Provider store={store}>
		<BrowserRouter>
			<Route path="/" component={App} />
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
);
