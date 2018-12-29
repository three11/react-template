import React from 'react';

import { Button } from './styles';

const StyledButton = ({ type, children, ...rest }) => (
	<Button type={type} {...rest}>
		{children}
	</Button>
);

export default StyledButton;
