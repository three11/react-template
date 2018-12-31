// eslint-disable-next-line no-unused-vars
import React from 'react';
import renderer from 'react-test-renderer';

import HomePage from '.';

describe('HomePage component', () => {
	it('should render successfully', () => {
		const tree = renderer.create(<HomePage counter={{ count: 0 }} dispatch={() => ({})} />).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
