// import userReducer from './userReducer';
import loggedUsersReducer from './loggedUsersReducer';
import selectedUserReducer from './selectedUserReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	// user: userReducer,
	loggedUsers: loggedUsersReducer,
	selectedUser: selectedUserReducer
});

export default rootReducer;
