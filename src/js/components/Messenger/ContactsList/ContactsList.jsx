import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CHAT_ROUTE } from '../../../utils/consts';

import { db, auth } from '../../../firebase/firebase';
import { getDocs, collection, query } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useDispatch, useSelector } from 'react-redux';
import { SET_LOGGED_USERS } from '../../../redux/actions/loggedUsersActions';
import { SELECT_USER } from '../../../redux/actions/selectedUserActions';

const ContactsList = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [localUser, loading] = useAuthState(auth);
	const loggedUsers = useSelector((state) => state.loggedUsers);

	useEffect(() => {
		async function getUsers() {
			const q = query(collection(db, 'users'));

			const querySnapshot = await getDocs(q);

			const queryArr = [];

			querySnapshot.forEach((doc) => queryArr.push(doc.data()));

			dispatch(SET_LOGGED_USERS(queryArr));
		}

		getUsers();
	}, []);

	const selectUser = (user) => {
		dispatch(SELECT_USER(user));
		navigate(`${CHAT_ROUTE}/${user.uid}`);
		// TODO: Configure chat opening using useParams or selecredUser
	};

	return (
		<div className="chats-list__wrapper">
			<div className="chats-list__explanation">
				<p>Authorized users</p>
			</div>
			<ul className="chats-list">
				{loggedUsers[0] &&
					loggedUsers.map((user) => {
						const shortName =
							user.displayName.length > 20
								? `${user.displayName.slice(0, 17)}...`
								: user.displayName;

						// TODO: Add chats to the database (user.chats)
						// chats: [{ uid: '', messages: [{text: 'bla', date: Date('11-12-2021')}, {text: 'bla-bla', date: Date('11-12-2021')}] }];

						let shortLastMessage = `You don't have messages yet`;
						let lastMessageTime = null;

						if (user.chats) {
							const chat = localUser.chats.find((chat) => chat.uid === user.uid);

							const lastMessage = chat.messages[chat.messages.length - 1];
							shortLastMessage =
								lastMessage.text.length > 33
									? `${lastMessage.text.slice(0, 30)}...`
									: lastMessage;

							lastMessageTime = `${lastMessage.date.getHours()}:${lastMessage.date.getMinutes()}`;
						}

						if (user.uid === localUser.uid) {
							return null;
						}

						return (
							<li className="chats-item" key={user.uid}>
								<button
									className="chats-item__btn"
									onClick={() => selectUser(user)}
								>
									<div className="chats-item__img">
										<img
											width="46"
											height="46"
											src={user.photoURL}
											alt="contact image"
											referrerPolicy="no-referrer"
										/>
									</div>
									<div className="chats-item__content">
										<h3 className="title title_size-s chats-item__contact">
											{shortName}
											{lastMessageTime && (
												<div className="chats-item__last-time">
													{lastMessageTime}
												</div>
											)}
										</h3>
										<p className="chats-item__message">{shortLastMessage}</p>
									</div>
								</button>
							</li>
						);
					})}
			</ul>
		</div>
	);
};

export default ContactsList;
