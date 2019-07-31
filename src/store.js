import createSagaMiddleware from 'redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';

import sagas from './sagas';
import reducers from './reducers';

import { counterInitialState } from '@containers/home/reducer';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (initialState = {}) => {
	const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));

	if (module.hot) {
		module.hot.accept('./reducers', () => {
			const nextReducers = require('./reducers').default;

			store.replaceReducer(nextReducers);
		});
	}

	sagas.forEach(saga => {
		sagaMiddleware.run(saga);
	});

	return store;
};

export default configureStore({
	counter: counterInitialState
});
