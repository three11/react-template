import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '@containers/Login';
import Register from '@containers/Register';

export default props => {
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
						render={() => (props.auth.logged ? <ProfilePage {...props} /> : <Login {...props} />)}
					/>
					<Route exact path="/register/" render={() => <Register {...props} />} />
				</Switch>
			</div>
		</div>
	);
};
