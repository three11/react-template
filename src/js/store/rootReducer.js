import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import auth from '@store/modules/auth/reducer';

export default combineReducers({
	auth,
	routing: routerReducer
});
