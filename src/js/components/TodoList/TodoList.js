import React from 'react';
import Todo from '../Todo/Todo';

const TodoList = ({ todos, toggleTodo }) => {
	return (
		<ul>
			{todos.map(todo => {
				<Todo
					key={todo.id}
					{...todo}
					onClick={() => toggleTodo(todo.id)}
				/>;
			})}
		</ul>
	);
};

export default TodoList;
