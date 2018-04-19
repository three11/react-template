import React from 'react';
import Footer from '../Footer/Footer';
import AddTodo from '../AddTodo/AddTodo';
import VisibleTodoList from '../VisibleTodoList/VisibleTodoList';

const App = () => {
	return (
		<div>
			<AddTodo />

			<VisibleTodoList />

			<Footer />
		</div>
	);
};

export default App;
