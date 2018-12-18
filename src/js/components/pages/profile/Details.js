/**
 * External dependencies
 */
import React, { Component } from 'react';

/**
 * Internal dependencies
 */
import Button from '@components/generic/Button';
import { signOutRequest } from '@store/modules/auth';

/**
 * Render the component
 */
class UserDetails extends Component {
	logout(e) {
		e.preventDefault();

		this.props.dispatch(signOutRequest());
	}

	render() {
		const { data } = this.props.auth.user;

		return (
			<div className="c-user-details">
				{data.avatar ? <img src={data.avatar} /> : ''}

				<h4>{data.fullname}</h4>

				<ul>
					{Object.keys(data.details).map((item, i) => {
						return (
							<li key={i}>
								<strong>{item}</strong>

								{data.details[item]}
							</li>
						);
					})}
				</ul>

				<Button onClick={this.logout.bind(this)}>Log out</Button>
			</div>
		);
	}
}

export default UserDetails;
