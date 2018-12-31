import React from 'react';

import './index.scss';

const StyledButton = ({ type, children, className, ...rest }) => {
	const classes = className ? className.split(' ') : '';
	const classNames = ['btn'].concat(classes).join(' ');

	return (
		<button className={classNames} type={type} {...rest}>
			{children}
		</button>
	);
};

export default StyledButton;
