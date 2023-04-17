import React from 'react';

const Message = ({ system, text, date, sender }) => {
	return (
		<div className="message">
			{sender ? (
				<img
					data-img="sender-img"
					width="40"
					height="40"
					src="https://lh3.googleusercontent.com/a-/AOh14GjeCq6bLnAKga5a-xFtSYnmBQLiXOnOwr2B6vdk=s96-c"
					alt=""
				/>
			) : null}
			{!system ? <div className="message-info"></div> : null}
			<div className="message-content">
				{text && <div className="message-content__text">{text}</div>}
			</div>
		</div>
	);
};

export default Message;
