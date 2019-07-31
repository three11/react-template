import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from '@containers/app';
import store from './store';

import '@assets/favicon.ico';

const node = document.getElementById('app');
const router = Application => (
	<Provider store={store}>
		<BrowserRouter>
			<Application />
		</BrowserRouter>
	</Provider>
);

render(router(App), node);

if (module.hot) {
	module.hot.accept();

	const NextApp = require('@containers/App').default;

	render(router(NextApp), node);
}

if (process.env.NODE_ENV === 'production') {
	require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
