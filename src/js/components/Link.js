/**
 * External dependencies
 */
import React from 'react';

/**
 * Render the link
 */
const Link = ({ active, children, onClick }) => {
	return (
		<button onClick={onClick} disabled={active}>
			{children}
		</button>
	);
};

export default Link;
