/**
 * External dependencies
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Internal dependencies
 */
import Login from '@components/pages/login/Page';
import Register from '@components/pages/register/Page';
import ProfilePage from '@components/pages/profile/Page';

/**
 * Render the component
 */
const Main = props => {
	const loggedUser = localStorage.getItem('logged_in_user');

	if (loggedUser) {
		const user = JSON.parse(loggedUser);

		props.auth.user = user;
		props.auth.logged = true;
	}

	return (
		<div className="o-wrapper__inner">
			<div className="o-main">
				<Switch>
					<Route
						exact
						path="/"
						render={() => {
							return props.auth.logged ? <ProfilePage {...props} /> : <Login {...props} />;
						}}
					/>
					<Route
						exact
						path="/register/"
						render={() => {
							return <Register {...props} />;
						}}
					/>
				</Switch>
			</div>
		</div>
	);
};

export default Main;
