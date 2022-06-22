import React from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, database } from '../../firebase/firebase';

// import ChatsSearch from './ChatsSearch/ChatsSearch';
import Chat from './Chat/Chat';
import ChatContact from './ChatContact/ChatContact';
import ContactsList from './ContactsList/ContactsList';

const Messenger = () => {
	const [user] = useAuthState(auth);

	const accessToken = sessionStorage.getItem('accessToken');
	const refreshToken = sessionStorage.getItem('refreshToken');

	return (
		<div className="main-content messenger">
			<div className="container">
				<div className="messenger-wrapper">
					<ContactsList />
					<div className="chats-column">
						<ChatContact />
						<Chat />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Messenger;
