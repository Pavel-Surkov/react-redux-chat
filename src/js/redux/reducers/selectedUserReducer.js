const initialState = null;

const selectedUserReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SELECT_USER': {
			return action.payload;
		}
		default:
			return state;
	}
};

export default selectedUserReducer;
