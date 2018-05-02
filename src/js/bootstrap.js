/**
 * External dependenices
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

/**
 * Internal dependencies
 */
import App from '_components/App';
import configureStore from '_store/store';
import { authInitialState } from '_store/modules/auth';

/**
 * Create the application store
 */
const store = configureStore({ ...authInitialState });

/**
 * Application render funtion
 */
const router = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

/**
 * Render the application
 */
render(router, document.getElementById('app'));
