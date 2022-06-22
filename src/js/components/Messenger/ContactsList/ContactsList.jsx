import React from 'react';
import { doc, getDoc } from 'firebase/firestore';

const ContactsList = () => {
	// TODO:
	// 1) Get users from db
	// 2) Set them to redux state
	// 3) Output users from the redux state (to have the ability to filter users)

	return (
		<div className="chats-list__wrapper">
			<ul className="chats-list">ContactsList</ul>
		</div>
	);
};

export default ContactsList;
