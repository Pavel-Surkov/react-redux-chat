import React from 'react';
import { useSelector } from 'react-redux';

const ChatContact = () => {
	const selectedUser = useSelector((state) => state.selectedUser);

	return (
		<div className="contact">
			<div className="contact-wrapper">
				<div className="contact-image">
					<img
						src={selectedUser.photoURL}
						referrerPolicy="no-referrer"
						width="46"
						height="46"
						alt="contact image"
					/>
				</div>
				<div className="contact-name">
					<h3 className="title title_size-s">{selectedUser.name}</h3>
				</div>
			</div>
		</div>
	);
};

export default ChatContact;
