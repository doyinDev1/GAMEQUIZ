import Parse from 'parse';

export const logUserIn = async (username, password, house) => {
	// creating a new user login log
	const Logs = Parse.Object.extend('login_logs');
	const newLog = new Logs();
	newLog.set('email', username);
	newLog.set('employee_id', password);
	newLog.set('house', house);

	try {
		const user = await Parse.User.logIn(username, password);

		// this might be a repition
		// TO DO: ensure house is not mismatched
		if (user.id) {
			const query = new Parse.Query(Parse.User);
			query.equalTo('username', username);
			const loggedUser = await query.find();
			const jsondata = await JSON.stringify(loggedUser);
			const data = await JSON.parse(jsondata);

			// set login status if successful
			newLog.set('login_status', 'logged in successfully');
			newLog
				.save()
				.then((log) => alert('Added login log'))
				.catch((err) => {
					throw err;
				});
			return data[0];
		}
	} catch (error) {
		const err = await JSON.parse(JSON.stringify(error));
		newLog.set('login_status', err.message);
		newLog
			.save()
			.then((log) => alert('Added login log'))
			.catch((err) => {
				throw err;
			});
		throw error;
	}
};
