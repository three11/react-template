import React from 'react';

import { Button } from './styles';

export default ({ type, children, ...rest }) => (
	<Button type={type} {...rest}>
		{children}
	</Button>
);
