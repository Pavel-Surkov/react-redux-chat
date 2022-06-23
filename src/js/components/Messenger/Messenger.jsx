import React from 'react';
// import ChatsSearch from './ChatsSearch/ChatsSearch';
import Chat from './Chat/Chat';
import ChatContact from './ChatContact/ChatContact';
import ContactsList from './ContactsList/ContactsList';
import placeholder from '../../../assets/images/svg/chat_placeholder.svg';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../firebase/firebase';

import { useSelector } from 'react-redux';

const Messenger = () => {
	const [user] = useAuthState(auth);
	const selectedUser = useSelector((state) => state.selectedUser);

	const accessToken = sessionStorage.getItem('accessToken');
	const refreshToken = sessionStorage.getItem('refreshToken');

	return (
		<div className="main-content messenger">
			<div className="container">
				<div className="messenger-wrapper">
					<ContactsList />
					<div className="chats-column">
						{selectedUser ? (
							<>
								<ChatContact />
								<Chat />
							</>
						) : (
							<div className="placeholder-wrapper">
								<div className="placeholder">
									<img
										width="100"
										height="100"
										src={placeholder}
										alt="placeholder"
									/>
									<p>Select a chat</p>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Messenger;
