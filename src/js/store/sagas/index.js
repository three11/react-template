/**
 * Internal dependencies
 */
import userLoginSaga from '_sagas/auth/login';
import userLogoutSaga from '_sagas/auth/logout';

/**
 * Combine all sagas
 */
export default [userLoginSaga, userLogoutSaga];
