import { put, takeLatest } from 'redux-saga/effects';

import { signOut } from '@store/modules/auth/index';
import { AUTH_SIGN_OUT_REQUESTED } from '@constants/auth';

function* logout() {
	yield put(signOut());
}

function* userLogoutSaga() {
	yield takeLatest(AUTH_SIGN_OUT_REQUESTED, logout);
}

export default userLogoutSaga;
