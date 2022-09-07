// import userReducer from './userReducer';
import loggedUsersReducer from './loggedUsersReducer';
import selectedUserReducer from './selectedUserReducer';
import chatsReducer from './chatsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	// user: userReducer,
	loggedUsers: loggedUsersReducer,
	selectedUser: selectedUserReducer,
	chats: chatsReducer
});

export default rootReducer;
