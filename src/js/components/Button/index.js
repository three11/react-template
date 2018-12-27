import React from 'react';

export default ({ type, className, children, ...rest }) => (
	<button className={className ? `c-btn ${className}` : `c-btn`} type={type} {...rest}>
		{children}
	</button>
);
