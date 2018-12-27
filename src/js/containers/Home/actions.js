import { INCREMENT, DECREMENT } from './constants';

export const increment = _ => ({
	type: INCREMENT,
	payload: 1
});

export const decrement = _ => ({
	type: DECREMENT,
	payload: -1
});
