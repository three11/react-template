/**
 * Internal dependencies
 */
import userLoginSaga from '@sagas/auth/login';
import userLogoutSaga from '@sagas/auth/logout';

/**
 * Combine all sagas
 */
export default [userLoginSaga, userLogoutSaga];
