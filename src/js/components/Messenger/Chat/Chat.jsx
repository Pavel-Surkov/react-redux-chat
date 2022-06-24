import React from 'react';
import MessageInput from './MessageInput/MessageInput';

const Chat = () => {
	return (
		<div className="chat-wrapper">
			<div className="chat"></div>
			<MessageInput />
		</div>
	);
};

export default Chat;
