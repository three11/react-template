// eslint-disable-next-line no-unused-vars
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from '.';
import store from '@src/store';

describe('App component', () => {
	it('should render successfully', () => {
		const tree = renderer
			.create(
				<Provider store={store}>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</Provider>
			)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
