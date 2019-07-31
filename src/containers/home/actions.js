import { INCREMENT, DECREMENT } from './constants';

export const increment = () => ({
	type: INCREMENT,
	payload: 1
});

export const decrement = () => ({
	type: DECREMENT,
	payload: -1
});
