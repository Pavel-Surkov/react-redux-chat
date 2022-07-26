import React from 'react';
import Message from './Message/Message';
import MessageInput from './MessageInput/MessageInput';

const Chat = () => {
	return (
		<div className="chatbox-wrapper">
			<div className="chatbox">
				<Message />
			</div>
			<MessageInput />
		</div>
	);
};

export default Chat;
