import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import 'normalize.css';
import './index.scss';

import Home from '@containers/home';
import NotFound from '@containers/not-found';
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
