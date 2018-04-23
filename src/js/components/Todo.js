/**
 * External dependencies
 */
import React from 'react';

/**
 * Render the todo item
 */
const Todo = ({ onClick, completed, text }) => (
	<li
		onClick={onClick}
		style={{
			textDecoration: completed ? 'line-through' : 'none'
		}}
	>
		{text} asd
	</li>
);

export default Todo;
