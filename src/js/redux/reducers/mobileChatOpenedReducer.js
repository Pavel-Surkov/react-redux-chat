const initialState = false;

const mobileChatOpenedReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'OPEN_CHAT': {
			return true;
		}
		case 'CLOSE_CHAT': {
			return false;
		}
		case 'TOGGLE_CHAT': {
			return !state;
		}
		default:
			return state;
	}
};

export default mobileChatOpenedReducer;
