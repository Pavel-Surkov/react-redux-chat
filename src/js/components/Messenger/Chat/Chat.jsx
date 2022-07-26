import React from 'react';
import Chatbox from './Chatbox/Chatbox';
import MessageInput from './MessageInput/MessageInput';

const Chat = () => {
	return (
		<div className="chatbox-wrapper">
			<Chatbox />
			<MessageInput />
		</div>
	);
};

export default Chat;
