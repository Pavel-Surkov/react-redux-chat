import React, { useState, useEffect } from 'react';
import Message from './Message/Message';
import MessageInput from './MessageInput/MessageInput';

import { db, auth } from '../../../firebase/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useSelector } from 'react-redux';

const Chat = () => {
	const [localUser] = useAuthState(auth);
	const selectedUser = useSelector((state) => state.selectedUser);

	const [selectedUserAuth, setSelectedUserAuth] = useState(null);
	const [selectedChat, setSelectedChat] = useState(null);

	useEffect(() => {
		if (selectedUser) {
			const unsub = onSnapshot(doc(db, 'users', selectedUser.uid), (doc) => {
				const selectedUserData = doc.data();

				const selectedUserDataObj = JSON.parse(JSON.stringify(selectedUserData));

				setSelectedUserAuth(selectedUserDataObj);
			});
		}
	}, [selectedUser]);

	useEffect(() => {
		if (selectedUserAuth) {
			const chat = selectedUserAuth.chats
				? selectedUserAuth.chats.find((chat) => chat.uid === localUser.uid)
				: null;

			setSelectedChat(chat);
		}
	}, [selectedUserAuth]);

	console.log(selectedChat);

	return (
		<div className="chatbox-wrapper">
			<div className="chatbox">
				<div className="chatbox-content">
					{!selectedChat && (
						<Message
							system={true}
							text={`You don't have messages yet. Feel free to connect the person!`}
						/>
					)}
					{selectedChat &&
						selectedChat.messages.map((message) => {
							let sender = {};

							if (message.senderUid === localUser.uid) {
								sender = { ...localUser };
							} else {
								sender = { ...selectedUserAuth };
							}

							return (
								<Message
									sender={sender}
									system={false}
									text={message.text}
									date={message.date}
									key={message.date.toString()}
								/>
							);
						})}
				</div>
			</div>

			<MessageInput />
		</div>
	);
};

export default Chat;
