/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import Todo from './Todo';

/**
 * Render the todo list
 */
const TodoList = ({ todos, toggleTodo }) => {
	return (
		<ul>
			{todos.map(todo => {
				return (
					<Todo
						key={todo.id}
						{...todo}
						onClick={() => toggleTodo(todo.id)}
					>
						{todo.text}
					</Todo>
				);
			})}
		</ul>
	);
};

export default TodoList;
