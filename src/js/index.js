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

const root = document.getElementById('app');
const boot = Component => {
	render(
		<Provider store={store}>
			<App />
		</Provider>,
		root
	);
};

/**
 * Render the App component
 */
boot(App);

if (module.hot) {
	module.hot.accept('_components/App.js', () => {
		const NextApp = require('_components/App.js').default;

		boot(NextApp);
	});
}
