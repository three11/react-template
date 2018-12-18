/**
 * External dependencies
 */
import createSagaMiddleware from 'redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';

/**
 * Internal dependencies
 */
import sagas from '@sagas/index';
import rootReducer from '@store/rootReducer';

/**
 * Setup store middlewares
 */
const sagaMiddleware = createSagaMiddleware();

/**
 * Setup store enhancers
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * Store configuration
 *
 * @param  {Object} initialState
 *
 * @return {Object}
 */
const configureStore = (initialState = {}) => {
	const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('@store/rootReducer', () => {
			const nextRootReducer = require('@store/rootReducer').default;
			store.replaceReducer(nextRootReducer);
		});
	}

	/**
	 * Run sagas
	 */
	sagas.forEach(saga => {
		sagaMiddleware.run(saga);
	});

	return store;
};

export default configureStore;
