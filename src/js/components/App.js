import React from 'react';
import { hot } from 'react-hot-loader';

import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';

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
