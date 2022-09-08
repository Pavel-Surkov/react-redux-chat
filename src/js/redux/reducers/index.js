// import userReducer from './userReducer';
import loggedUsersReducer from './loggedUsersReducer';
import selectedUserReducer from './selectedUserReducer';
import localUserSnapshotReducer from './localUserSnapshotReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	// user: userReducer,
	loggedUsers: loggedUsersReducer,
	selectedUser: selectedUserReducer,
	localUserSnapshot: localUserSnapshotReducer
});

export default rootReducer;
