import { authInitialState } from '@store/modules/auth/index';

export const users = [
	{
		id: 1,
		data: {
			fullname: 'Julianna Doe',
			avatar: 'https://pickaface.net/gallery/avatar/20160107_232855_2539_Julianna.png',
			details: {
				email: 'julianna.doe@gmail.com',
				dob: '1980-07-20',
				country: 'USA'
			}
		},
		settings: {
			notifications: true
		}
	},
	{
		id: 2,
		data: {
			fullname: 'John Doe',
			avatar: 'https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png',
			details: {
				email: 'john.doe@gmail.com',
				dob: '1970-12-25',
				country: 'Canada'
			}
		},
		settings: {
			notifications: false
		}
	}
];

export const settings = {
	...authInitialState.auth
};

export const saveUser = user => {
	localStorage.setItem('logged_in_user', JSON.stringify(user));
};

export const removeUser = () => {
	localStorage.removeItem('logged_in_user');
};

export const fetchData = data => {
	const user = users.filter(item => item.data.details.email === data.email);
	const auth = {
		...settings
	};

	if (user.length) {
		auth.user = user[0];
		saveUser(user[0]);

		return {
			...auth
		};
	}

	return {
		error: 'Invalid credentials'
	};
};

export const logOut = () => {
	removeUser();

	return {};
};
