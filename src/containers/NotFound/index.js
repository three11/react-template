import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	font-family: monospace;
	font-size: 3rem;
	line-height: 1.5;
	color: red;
	text-align: center;
`;

const NotFoundPage = () => (
	<Title>
		404 <br />
		Page not found
	</Title>
);

export default NotFoundPage;
