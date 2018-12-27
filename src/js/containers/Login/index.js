import React from 'react';
import { Link } from 'react-router-dom';

import Field from '@components/Field';
import Button from '@components/Button';
import { signInRequest } from '@store/modules/auth';

export default class extends React.Component {
	state = {
		email: '',
		password: ''
	};

	handleSubmit = event => {
		event.preventDefault();

		this.props.dispatch(signInRequest(this.state));
	};

	handleChange = event => {
		const { id, value } = event.target;

		this.setState({ [id]: value });
	};

	render() {
		return (
			<div className="c-login">
				<h2>Log in to your account</h2>

				<p>
					or <Link to="/register">Register</Link>
				</p>

				<form onSubmit={this.handleSubmit}>
					<Field
						id="email"
						type="email"
						value={this.state.email}
						required
						placeholder="Email address"
						onChange={this.handleChange}
					/>

					<Field
						id="password"
						type="password"
						value={this.state.password}
						required
						placeholder="Password"
						onChange={this.handleChange}
					/>

					<Button type="submit">Log Ins</Button>
				</form>

				{this.props.auth.error ? <p className="c-error">{this.props.auth.error}</p> : ''}
			</div>
		);
	}
}
