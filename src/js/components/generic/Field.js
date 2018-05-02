/**
 * External dependencies
 */
import React from 'react';

/**
 * Render the component
 */
const Field = ({ type = 'text', value = '', ...rest }) => {
	return type === 'textarea' ? (
		<textarea {...rest}>{value}</textarea>
	) : (
		<input type={type} value={value} {...rest} />
	);
};

export default Field;
