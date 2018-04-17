/**
 * External dependenices
 */
import React from 'react';
import { render } from 'react-dom';

/**
 * Internal dependencies
 */
import style from './index.scss';
import normalize from 'normalize.css';

/**
 * Register App component
 */
const App = () => {
	return (
		<div>
			<p>Hello World!</p>
		</div>
	);
};

/**
 * Render the App component
 */
render(<App />, document.getElementById('app'));
