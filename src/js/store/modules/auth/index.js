import { AUTH_SIGN_IN, AUTH_SIGN_IN_REQUESTED, AUTH_SIGN_OUT, AUTH_SIGN_OUT_REQUESTED } from '@constants/auth';

export const authInitialState = {
	auth: {
		user: {
			id: undefined,
			data: [],
			settings: []
		},
		logged: false
	}
};

export const signIn = data => ({
	type: AUTH_SIGN_IN,
	data
});

export const signInRequest = data => ({
	type: AUTH_SIGN_IN_REQUESTED,
	data
});

export const signOut = () => ({
	type: AUTH_SIGN_OUT
});

export const signOutRequest = () => ({
	type: AUTH_SIGN_OUT_REQUESTED
});
