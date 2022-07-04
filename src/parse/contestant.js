import Parse from 'parse';
import { useQuery } from 'react-query';

// export const fetchUserDetails = async (username) => {
// 	try {
// 		const params = { username: username };
// 		const userSummary = await Parse.Cloud.run('userDetails', params);
// 		const summary = await JSON.parse(JSON.stringify(userSummary));

// 		const challengeLog = await Parse.Cloud.run('getUserChallengeLog', params);
// 		const logsData = await JSON.parse(JSON.stringify(challengeLog));

// 		// const user = await Parse.Cloud.run('fetchAllCandidate', params);
// 		// console.log(user);
// 		return {
// 			userSummary: summary[0],
// 			challenge_log: logsData,
// 		};
// 	} catch (error) {
// 		throw error;
// 	}
// };

// export const useFetchUserInfo = () => {
// 	const userInfo = JSON.parse(sessionStorage.getItem('contestant'));

// 	const fetchDetails = async () => {
// 		try {
// 			const params = { username: userInfo.username };
// 			const userDetails = await Parse.Cloud.run('fetchUserDetails', params);
// 			return userDetails;
// 		} catch (error) {
// 			return error;
// 		}
// 	};

// 	const { status, data, isFetching } = useQuery(['userDetails', userInfo], () => fetchDetails(), {
// 		keepPreviousData: true,
// 		refetchOnWindowFocus: true,
// 	});
// 	return { status, data, isFetching };
// };


export const doLogin = async (value) => {
	try {
		const params =  {code: value};
		const data = await Parse.Cloud.run('login', params);
		const loginDetails = await JSON.parse(JSON.stringify(data));
		return loginDetails;
	} catch (error) {
		throw error;
	}
};

// updateUser
export const updateUser = async (value) => {
	try {
		const params =  {
			display_name: value.display_name,
			avatar: value.avatar,
			objectId: value.objectId,
		};
		const data = await Parse.Cloud.run('updateUser', params);
		const loginDetails = await JSON.parse(JSON.stringify(data));
		return loginDetails;
	} catch (error) {
		throw error;
	}
};

export const getQuizList = async (value) => {
	try {
		const params =  {
			ageGroup: value.ageGroup,
			
		};
		const data = await Parse.Cloud.run('getQuizList', params);
		const getQuizList = await JSON.parse(JSON.stringify(data));
		return getQuizList;
	} catch (error) {
		throw error;
	}
};


// export const getChallenges = async (username) => {
// 	try {
// 		const params = { username: username };
// 		const data = await Parse.Cloud.run('getChallenges', params);
// 		const allChallenges = await JSON.parse(JSON.stringify(data));
// 		return allChallenges;
// 	} catch (error) {
// 		throw error;
// 	}
// };

// export const getToken = async (employeeid) => {
// 	try {
// 		const params = { employeeid: employeeid };
// 		const data = await Parse.Cloud.run('generateToken', params);
// 		// const allChallenges = await JSON.parse(JSON.stringify(data));
// 		return data;
// 	} catch (error) {
// 		throw error;
// 	}
// };

// export const saveChallengeLog = async (data) => {
// 	try {
// 		const log = await Parse.Cloud.run('saveChallengeLog', data);
// 		const challengeData = await JSON.parse(JSON.stringify(log));
// 		return challengeData;
// 	} catch (error) {
// 		throw error;
// 	}
// };

// export const getUserBadges = async (username) => {
// 	try {
// 		const params = { username: username };
// 		const data = await Parse.Cloud.run('getUserBadges', params);
// 		const allBadges = await JSON.parse(JSON.stringify(data));
// 		return allBadges;
// 	} catch (error) {
// 		throw error;
// 	}
// };
