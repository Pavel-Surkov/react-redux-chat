const initialState = [];

const chatsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_CHATS': {
			const chats = action.payload;

			console.log(chats);

			return chats;
		}
		case 'SET_CHAT': {
			const currentChat = action.payload;

			const newState = state;

			const currentChatIndex = newState.indexOf((chat) => chat.uid === currentChat.uid);

			if (currentChatIndex >= 0) {
				newState.splice(currentChatIndex, 1);
			}

			newState.push(chat);

			return newState;
		}
		default:
			return state;
	}
};

export default chatsReducer;
