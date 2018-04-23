import { createStore } from 'redux';

import rootReducer from '_reducers';

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
