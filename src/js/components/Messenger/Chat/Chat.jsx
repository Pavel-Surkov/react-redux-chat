import React, { useState, useEffect } from 'react';
import Message from './Message/Message';
import MessageInput from './MessageInput/MessageInput';

import { db, auth } from '../../../firebase/firebase';
import { getDocs, collection, query } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

import { SET_CHATS } from '../../../redux/actions/chatsActions';
import { useDispatch, useSelector } from 'react-redux';

const Chat = () => {
	const [localUser] = useAuthState(auth);
	const selectedUser = useSelector((state) => state.selectedUser);
	const loggedUsers = useSelector((state) => state.loggedUsers);
	const chats = useSelector((state) => state.chats);
	const dispatch = useDispatch();

	const [selectedChat, setSelectedChat] = useState(
		localUser.chats ? localUser.chats.find((chat) => chat.uid === selectedUser.uid) : null
	);

	useEffect(() => {
		if (localUser) {
			if (loggedUsers[0] && !localUser.multiFactor) {
				async function setChats() {
					const localUserData = loggedUsers.find((user) => user.uid === localUser.uid);

					if (localUserData.chats) {
						dispatch(SET_CHATS(localUserData.chats));
					}
				}

				setChats();
			}
		}
	}, [localUser]);

	return (
		<div className="chatbox-wrapper">
			<div className="chatbox">
				{!selectedChat && (
					<Message
						system={true}
						text={`You don't have messages yet. Feel free to connect the person!`}
					/>
				)}
				{selectedChat &&
					selectedChat.messages.map((message) => {
						return (
							<Message
								system={false}
								text={message.text}
								key={message.date.toString()}
							/>
						);
					})}
			</div>
			<MessageInput />
		</div>
	);
};

export default Chat;
