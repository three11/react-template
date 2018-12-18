/**
 * External dependencies
 */
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

/**
 * Internal dependencies
 */
import auth from '@store/modules/auth/reducer';

/**
 * Combine all reducers
 */
export default combineReducers({
	auth,
	routing: routerReducer
});
