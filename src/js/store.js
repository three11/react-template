/**
 * External dependencies
 */
import { createStore } from 'redux';

/**
 * Internal dependencies
 */
import rootReducer from '_reducers';

/**
 * Store configuration
 *
 * @param  {Object} initialState
 *
 * @return {Object}
 */
const configureStore = (initialState = {}) => {
	const store = createStore(rootReducer, initialState);

	if (module.hot) {
		module.hot.accept('_reducers', () => {
			store.replaceReducer(require('_reducers').default);
		});
	}

	return store;
};

export default configureStore;
