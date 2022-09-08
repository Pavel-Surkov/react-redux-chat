const initialState = null;

const loggedUsersReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_SNAPSHOT': {
			return action.payload;
		}
		default:
			return state;
	}
};

export default loggedUsersReducer;
