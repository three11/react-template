/**
 * Internal dependencies
 */
import { AUTH_SIGN_IN, AUTH_SIGN_OUT } from '@constants/auth';
import { authInitialState } from '@store/modules/auth/index';
import { removeUser } from '@utilities/api/auth';

/**
 * Module reducer
 */
export default (state = {}, action) => {
	switch (action.type) {
		case AUTH_SIGN_IN:
			return {
				...state,
				...action.data
			};

		case AUTH_SIGN_OUT:
			const { user, logged } = authInitialState.auth;

			removeUser();

			return {
				...state,
				user,
				logged
			};

		default:
			return state;
	}
};
