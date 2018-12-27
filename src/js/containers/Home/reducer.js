import { INCREMENT, DECREMENT } from './constants';

export const counterInitialState = {
	count: 0
};

export default (state = counterInitialState, { type, payload }) => {
	switch (type) {
		case INCREMENT:
		case DECREMENT:
			const { count } = state;

			return {
				...state,
				count: count + payload
			};

		default:
			return state;
	}
};
