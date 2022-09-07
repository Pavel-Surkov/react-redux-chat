import React, { useEffect } from 'react';
import Chat from './Chat/Chat';
import ChatContact from './ChatContact/ChatContact';
import ContactsList from './ContactsList/ContactsList';
import placeholder from '../../../assets/images/svg/chat_placeholder.svg';
import { useParams } from 'react-router-dom';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db, firestore } from '../../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { useDispatch, useSelector } from 'react-redux';
import { SELECT_USER } from '../../redux/actions/selectedUserActions';
import { SET_CHATS } from '../../redux/actions/chatsActions';

const Messenger = () => {
	const [localUser] = useAuthState(auth);
	const selectedUser = useSelector((state) => state.selectedUser);
	const loggedUsers = useSelector((state) => state.loggedUsers);
	const [users, usersLoading] = useCollectionData(
		firestore.collection('users').orderBy('createdAt')
	);

	const selectedUserUid = useParams().uid;
	const dispatch = useDispatch();

	const accessToken = sessionStorage.getItem('accessToken');
	const refreshToken = sessionStorage.getItem('refreshToken');

	// Sets selected user using useParams
	useEffect(() => {
		if (!selectedUser && selectedUserUid && !usersLoading) {
			const selectedUser = users.find((user) => user.uid === selectedUserUid);

			dispatch(SELECT_USER(selectedUser));
		}
	}, [usersLoading]);

	useEffect(() => {
		if (loggedUsers[0] && localUser) {
			async function setChats() {
				const localUserData = loggedUsers.find((user) => user.uid === localUser.uid);

				if (localUserData.chats) {
					dispatch(SET_CHATS(localUserData.chats));
				}
			}

			setChats();
		}
	}, [localUser, loggedUsers]);

	return (
		<div className="main-content messenger">
			<div className="container">
				<div className="messenger-wrapper">
					<ContactsList />
					<div className="chats-column">
						{selectedUser ? (
							<>
								<ChatContact />
								<Chat />
							</>
						) : (
							<div className="placeholder-wrapper">
								<div className="placeholder">
									<img
										width="100"
										height="100"
										src={placeholder}
										alt="placeholder"
									/>
									<p>Select a chat</p>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Messenger;
