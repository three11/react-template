import createSagaMiddleware from 'redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';

import sagas from '@sagas';
import rootReducer from '@store/rootReducer';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (initialState = {}) => {
	const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));

	if (module.hot) {
		module.hot.accept('@store/rootReducer', () => {
			const nextRootReducer = require('@store/rootReducer').default;

			store.replaceReducer(nextRootReducer);
		});
	}

	sagas.forEach(saga => {
		sagaMiddleware.run(saga);
	});

	return store;
};

export default configureStore;
