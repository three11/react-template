/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import FilterLink from './FilterLink';
import { VisibilityFilters } from '_actions';

/**
 * Render the footer
 */
const Footer = () => {
	return (
		<div>
			<span>Show:</span>

			<FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>

			<FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
				Active
			</FilterLink>

			<FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
				Completed
			</FilterLink>
		</div>
	);
};

export default Footer;
