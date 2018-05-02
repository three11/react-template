/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import Shell from '_components/generic/Shell';
import ProfileDetails from './Details';

/**
 * Render the component
 */
const ProfilePage = props => {
	return (
		<Shell>
			<ProfileDetails {...props} />
		</Shell>
	);
};

export default ProfilePage;
