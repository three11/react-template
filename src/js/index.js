import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from '@containers/App';
import configureStore from './store';

import { counterInitialState } from '@containers/Home/reducer';

const store = configureStore({
	counter: counterInitialState
});

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
