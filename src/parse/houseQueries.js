import Parse from 'parse';

// IN THE CURRENT DATABASE, THERE ARE FOUR HOUSES
// VENUS, SATURN, MARS, JUPITER

export const membersList = async (house) => {
	try {
		const query = new Parse.Query(Parse.User);
		query.equalTo('house', house);
		const queryResults = await query.find();
		const data = await JSON.parse(JSON.stringify(queryResults));
		// console.log(data);
		return data;
	} catch (error) {
		throw error;
	}
};

export const membersLogList = async (house) => {
	try {
		const Logs = Parse.Object.extend('login_logs');
		const query = new Parse.Query(Logs);
		query.equalTo('house', house);
		const queryResults = await query.find();
		const data = await JSON.parse(JSON.stringify(queryResults));
		// console.log(data);
		return data;
	} catch (error) {
		throw error;
	}
};

// this gets all the log list
// TODO: ADD A LIMIT WHEN LOG GETS LONGER
export const allMembersLog = async () => {
	try {
		const Logs = Parse.Object.extend('login_logs');
		const query = new Parse.Query(Logs);
		const queryResults = await query.find();
		const data = await JSON.parse(JSON.stringify(queryResults));
		// console.log(data);
		return data;
	} catch (error) {
		throw error;
	}
};
