import React from 'react';

import './index.scss';

const StyledButton = ({ type, children, className, ...rest }) => {
	const classNames = ['btn'].concat(className.split(' ')).join(' ');

	return (
		<button className={classNames} type={type} {...rest}>
			{children}
		</button>
	);
};

export default StyledButton;
