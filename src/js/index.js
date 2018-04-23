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
import store from '_store';
import style from './styles/Index.scss';

/**
 * Render the App component
 */
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
