/**
 * External dependencies
 */
import React from 'react';

/**
 * Render the component
 */
const Button = ({ type, className, children, ...rest }) => {
	return (
		<button className={className ? `c-btn ${className}` : `c-btn`} type={type} {...rest}>
			{children}
		</button>
	);
};

export default Button;
