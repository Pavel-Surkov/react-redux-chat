import React from 'react';

const Message = ({ system, text }) => {
	return (
		<div className="message">
			{!system && <div className="message-info"></div>}
			<div className="message-content">
				{text && <div className="message-content__text">{text}</div>}
			</div>
		</div>
	);
};

export default Message;
