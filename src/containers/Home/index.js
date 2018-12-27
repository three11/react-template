import React from 'react';

import Button from '@components/Button';
import { Wrapper } from './styles';
import { increment, decrement } from './actions';
import { INCREMENT_ASYNC, DECREMENT_ASYNC } from './constants';

export default ({ counter, dispatch }) => (
	<Wrapper>
		<Button onClick={() => dispatch(decrement())}>-</Button>

		<Button onClick={() => dispatch({ type: DECREMENT_ASYNC })}>Async -</Button>

		<small>{counter.count}</small>

		<Button onClick={() => dispatch({ type: INCREMENT_ASYNC })}>Async +</Button>

		<Button onClick={() => dispatch(increment())}>+</Button>
	</Wrapper>
);
