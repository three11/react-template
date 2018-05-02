/**
 * External dependencies
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * Internal dependencies
 */
import Shell from '_components/generic/Shell';
import Field from '_components/generic/Field';
import Button from '_components/generic/Button';
import { signInRequest } from '_store/modules/auth';

/**
 * Render the component
 */
class Login extends Component {
	/**
	 * Initial component state
	 * @TODO: Try to do something clever with the password
	 */
	state = {
		email: '',
		password: ''
	};

	/**
	 * In order to gain access to `this` a
	 * constructor defimition is required.
	 */
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	/**
	 * Submit the form
	 */
	handleSubmit(event) {
		event.preventDefault();

		this.props.dispatch(signInRequest(this.state));
	}

	/**
	 * Watch fields for change and populate state
	 */
	handleChange(event) {
		const { id, value } = event.target;

		this.setState({ [id]: value });
	}

	/**
	 * Render it
	 */
	render() {
		return (
			<div className="c-login">
				<Shell>
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

						<Button type="submit">Log In</Button>
					</form>

					{this.props.auth.error ? (
						<p className="c-error">{this.props.auth.error}</p>
					) : (
						''
					)}
				</Shell>
			</div>
		);
	}
}

export default Login;
