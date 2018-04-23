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
import configureStore from '_store';

/**
 * Create store
 */
const store = configureStore();

/**
 * Render the application
 */
render(
	<Provider store={store}>
		<BrowserRouter>
			<Route path="/" component={App} />
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
);
