import React from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';

const Chat = () => {
	const [user] = useAuthState(auth);

	return (
		<div className="main-content chat">
			<div className="container">Chat</div>
		</div>
	);
};

export default Chat;
