import React, { useState, useEffect } from 'react';
import Message from './Message/Message';
import MessageInput from './MessageInput/MessageInput';

import { db, auth } from '../../../firebase/firebase';
import { getDocs, collection, query, doc, onSnapshot } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useSelector } from 'react-redux';

const Chat = () => {
	const [localUser] = useAuthState(auth);
	const selectedUser = useSelector((state) => state.selectedUser);

	const [selectedUserr, setSelectedUserr] = useState(null);

	const [selectedChat, setSelectedChat] = useState(null);

	useEffect(() => {
		if (localUser) {
			const unsub = onSnapshot(doc(db, 'users', localUser.uid), (doc) => {
				const localUserData = doc.data();

				const localUserDataObj = JSON.parse(JSON.stringify(localUserData));

				setSelectedUserr(localUserDataObj);
				// dispatch(SET_SNAPSHOT(localUserDataObj));
			});
		}
	}, [localUser]);

	useEffect(() => {
		if (selectedUserr) {
			const chat = selectedUserr.chats
				? selectedUserr.chats.find((chat) => chat.uid === selectedUser.uid)
				: null;

			setSelectedChat(chat);

			console.log(localUser, selectedUserr);
		}
	}, [selectedUserr]);

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
