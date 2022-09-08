const initialState = null;

const loggedUsersReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_SNAPSHOT': {
			const newSnapshot = Object.assign({}, action.payload);

			return newSnapshot;
		}
		default:
			return state;
	}
};

export default loggedUsersReducer;
