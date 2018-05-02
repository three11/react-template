/**
 * External dependencies
 */
import React from 'react';

/**
 * Render the component
 */
const GridItem = ({ type, children }) => {
	return (
		<div className={`o-grid__item o-grid__item--${type}`}>{children}</div>
	);
};

export default GridItem;
