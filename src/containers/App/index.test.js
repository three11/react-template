// eslint-disable-next-line no-unused-vars
import React from 'react';
import renderer from 'react-test-renderer';

import App from '.';

describe('App component', () => {
	it('should render successfully', () => {
		const tree = renderer.create(App).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
