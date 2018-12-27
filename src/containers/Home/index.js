import React from 'react';

import Button from '@components/Button';
import { Wrapper } from './styles';
import { increment, decrement } from './actions';
import { INCREMENT_ASYNC, DECREMENT_ASYNC } from './constants';

import * as ReactLogo from '@assets/react.svg';
import ReduxSagaLogo from '@assets/redux-saga.png';

export default ({ counter, dispatch }) => (
	<React.Fragment>
		<img
			src={ReactLogo}
			alt="React Logo"
			style={{ width: '20rem', height: 'auto', display: 'block', margin: '2rem auto' }}
		/>
		<Wrapper>
			<Button onClick={() => dispatch(decrement())}>-</Button>

			<Button onClick={() => dispatch({ type: DECREMENT_ASYNC })}>Async -</Button>

			<small>{counter.count}</small>

			<Button onClick={() => dispatch({ type: INCREMENT_ASYNC })}>Async +</Button>

			<Button onClick={() => dispatch(increment())}>+</Button>
		</Wrapper>

		<img src={ReduxSagaLogo} alt="Redux Saga Logo" style={{ display: 'block', margin: '2rem auto' }} />
	</React.Fragment>
);
