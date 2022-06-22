import React from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../../firebase/firebase';

import ChatsSearch from './ChatsSearch/ChatsSearch';
import Chat from './Chat/Chat';
import ChatContact from './ChatContact/ChatContact';
import ChatsList from './ChatsList/ChatsList';

const Messenger = () => {
	const [user] = useAuthState(auth);

	return (
		<div className="main-content messenger">
			<div className="container">
				<div className="messenger-wrapper">
					<div className="chats-column">
						<ChatsSearch />
						<ChatsList />
					</div>
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
