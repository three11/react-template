/**
 * External dependencies
 */
import { combineReducers } from 'redux';

/**
 * Internal dependencies
 */
import todos from './todos';
import visibilityFilter from './visibilityFilter';

/**
 * Export combined reducers
 */
export default combineReducers({
	todos,
	visibilityFilter
});
