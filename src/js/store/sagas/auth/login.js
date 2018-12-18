/**
 * External dependencies
 */
import { call, put, takeLatest } from 'redux-saga/effects';

/**
 * Internal dependencies
 */
import { fetchData } from '@utilities/api/auth';
import { signIn } from '@store/modules/auth/index';
import { AUTH_SIGN_IN_REQUESTED } from '@constants/auth';

/**
 * Fetch logged in user details
 *
 * @param {Object} action        Redux action
 *
 * @yield {Object}
 */
function* fetch(action) {
	const user = yield call(fetchData, action.data);

	yield put({
		...signIn(user)
	});
}

/**
 * Sign in request listener
 *
 * @yield {Object}
 */
function* userLoginSaga() {
	yield takeLatest(AUTH_SIGN_IN_REQUESTED, fetch);
}

export default userLoginSaga;
