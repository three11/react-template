/**
 * External dependencies
 */
import React from 'react';
import { hot } from 'react-hot-loader';

/**
 * Internal dependencies
 */
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';

/**
 * Stylesheet
 */
import '_styles/App.scss';

/**
 * Export the component
 */
const App = () => {
	return (
		<div>
			<AddTodo />

			<VisibleTodoList />

			<Footer />
		</div>
	);
};

export default hot(module)(App);
