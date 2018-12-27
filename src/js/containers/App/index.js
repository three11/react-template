import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import 'normalize.css';

import Main from '@components/Main';

export default withRouter(connect(state => state)(Main));
