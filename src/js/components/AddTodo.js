/**
 * External dependencies
 */
import React from 'react';
import { connect } from 'react-redux';

/**
 * Internal dependencies
 */
import { addTodo } from '_actions';

/**
 * Render a form for adding a todo item
 *
 * @param  {Function} options.dispatch
 *
 * @return {Object}
 */
const AddTodo = ({ dispatch }) => {
	let input;

	return (
		<div>
			<form
				onSubmit={e => {
					e.preventDefault();

					if (!input.value.trim()) {
						return;
					}

					dispatch(addTodo(input.value));
					input.value = '';
				}}
			>
				<input ref={node => (input = node)} />

				<button type="submit">Add Todo</button>
			</form>
		</div>
	);
};

export default connect()(AddTodo);
