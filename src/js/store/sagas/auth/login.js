import { call, put, takeLatest } from 'redux-saga/effects';

import { signIn } from '@store/modules/auth/index';
import { fetchData } from '@utilities/api/auth';
import { AUTH_SIGN_IN_REQUESTED } from '@constants/auth';

function* fetch(action) {
	const user = yield call(fetchData, action.data);

	yield put({
		...signIn(user)
	});
}

function* userLoginSaga() {
	yield takeLatest(AUTH_SIGN_IN_REQUESTED, fetch);
}

export default userLoginSaga;
