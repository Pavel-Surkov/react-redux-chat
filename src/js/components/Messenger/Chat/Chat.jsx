import React, { useState } from 'react';
import Message from './Message/Message';
import MessageInput from './MessageInput/MessageInput';

import { db, auth } from '../../../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useDispatch, useSelector } from 'react-redux';

const Chat = () => {
	const [localUser] = useAuthState(auth);
	const selectedUser = useSelector((state) => state.selectedUser);

	const [selectedChat, setSelectedChat] = useState(
		localUser.chats ? localUser.chats.find((chat) => chat.uid === selectedUser.uid) : null
	);

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
