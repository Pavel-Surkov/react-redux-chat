const initialState = {
	user: null,
	userLoggedIn: false
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOG_IN': {
			return {
				user: action.payload,
				userLoggedIn: true
			};
		}
		case 'LOG_OUT': {
			return initialState;
		}
		default:
			return state;
	}
};

export default userReducer;
