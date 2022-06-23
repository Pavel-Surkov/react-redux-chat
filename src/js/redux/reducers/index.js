import userReducer from './userReducer';
import loggedUsersReducer from './loggedUsersReducer';
import selectedUserReducer from './selectedUserReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	user: userReducer,
	loggedUsers: loggedUsersReducer,
	selectedUser: selectedUserReducer
});

// TODO: Mb remove user reducer. There is an access to user state with useAuthState hook

export default rootReducer;
