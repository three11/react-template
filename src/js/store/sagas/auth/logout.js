/**
 * External dependencies
 */
import { put, takeLatest } from 'redux-saga/effects';

/**
 * Internal dependencies
 */
import { signOut } from '@store/modules/auth/index';
import { AUTH_SIGN_OUT_REQUESTED } from '@constants/auth';

/**
 * Log the user out
 *
 * @yield {Object}
 */
function* logout() {
	yield put(signOut());
}

/**
 * Listen for logout event
 *
 * @yield {Object}
 */
function* userLogoutSaga() {
	yield takeLatest(AUTH_SIGN_OUT_REQUESTED, logout);
}

export default userLogoutSaga;
