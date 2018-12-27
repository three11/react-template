import React from 'react';

// prettier-ignore
export default ({ type = 'text', value = '', ...rest }) =>
	type === 'textarea'
		? <textarea {...rest}>{value}</textarea>
		: <input type={type} value={value} {...rest} />;
