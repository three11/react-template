import { combineReducers } from 'redux';

import todos from './todos.js';
import visibilityFilter from './visibilityFilter.js';

export default combineReducers({
	todos,
	visibilityFilter
});
