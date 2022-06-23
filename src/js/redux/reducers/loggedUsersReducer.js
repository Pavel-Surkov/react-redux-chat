const initialState = [];

const loggedUsersReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_LOGGED_USERS': {
			const loggedUsers = action.payload;

			return loggedUsers;
		}
		default:
			return state;
	}
};

export default loggedUsersReducer;
