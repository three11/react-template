/**
 * External dependenices
 */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

/**
 * Internal dependencies
 */
import style from './index.scss';

/**
 * Register App component
 */
const App = () => {
	return (
		<BrowserRouter>
			<p>Hello World!</p>
		</BrowserRouter>
	);
};

/**
 * Render the App component
 */
render(<App />, document.getElementById('app'));
