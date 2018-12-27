import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import counter from '@containers/Home/reducer';

export default combineReducers({
	counter,
	routing: routerReducer
});
