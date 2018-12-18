/**
 * External dependencies
 */
import React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Internal dependencies
 */
import Main from '@components/generic/Main';

/**
 * Component stylesheet
 */
import '@styles/app.scss';

/**
 * Convert store's state to component props
 *
 * @param  {Object} state
 *
 * @return {Object}
 */
const mapStateToProps = state => state;

/**
 * Compose the application and connect the store
 */
const App = withRouter(connect(mapStateToProps)(Main));

export default hot(module)(App);
