/**
 * External dependencies
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * Internal dependencies
 */
import Field from '@components/generic/Field';
import Button from '@components/generic/Button';
import { users } from '@utilities/api/auth';
import { signInRequest } from '@store/modules/auth';

/**
 * Render the component
 */
class Register extends Component {
	/**
	 * Initial component state
	 * @TODO: Try to do something clever with the password
	 */
	state = {
		firstName: '',
		lastName: '',
		dob: '',
		country: '',
		email: '',
		password: ''
	};

	/**
	 * In order to gain access to `this` a
	 * constructor defimition is required.
	 */
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	/**
	 * Submit the form
	 */
	handleSubmit(event) {
		event.preventDefault();

		const data = this.state;
		const userData = {
			id: users.length + 1,
			data: {
				fullname: `${data.firstName} ${data.lastName}`,
				avatar: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
				details: {
					email: data.email,
					dob: data.dob,
					country: data.country
				}
			},
			settings: {
				notifications: true
			}
		};

		users.push(userData);

		this.props.dispatch(
			signInRequest({
				email: data.email,
				password: data.password
			})
		);

		this.props.history.push('/');
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
			<div className="c-register">
				<form onSubmit={this.handleSubmit}>
					<h2>Register</h2>

					<p>
						or <Link to="/">Login to your account</Link>
					</p>

					<Field
						id="firstName"
						value={this.state.firstName}
						required
						placeholder="First name"
						onChange={this.handleChange}
					/>

					<Field
						id="lastName"
						value={this.state.lastName}
						required
						placeholder="Last name"
						onChange={this.handleChange}
					/>

					<Field
						id="dob"
						type="date"
						value={this.state.dob}
						required
						placeholder="Date of birth"
						onChange={this.handleChange}
					/>

					<Field
						id="country"
						type="text"
						value={this.state.country}
						required
						placeholder="Country"
						onChange={this.handleChange}
					/>

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

					<Button type="submit">Register</Button>
				</form>
			</div>
		);
	}
}

export default Register;
