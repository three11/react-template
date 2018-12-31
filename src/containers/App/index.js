import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import 'normalize.css';

import Home from '@containers/Home';
import NotFound from '@containers/NotFound';
import GlobalStyles from './styles';

export default withRouter(
	connect(state => state)(props => (
		<React.Fragment>
			<Switch>
				<Route exact path="/" render={() => <Home {...props} />} />
				<Route path="" render={() => <NotFound {...props} />} />
			</Switch>
			<GlobalStyles />
		</React.Fragment>
	))
);
