import React, { useEffect } from 'react';
import { db } from '../../../firebase/firebase';
import { getDocs, collection, query } from 'firebase/firestore';

import { useDispatch, useSelector } from 'react-redux';
import { SET_LOGGED_USERS } from '../../../redux/actions/loggedUsersActions';
import { SELECT_USER } from '../../../redux/actions/selectedUserActions';

const ContactsList = () => {
	const dispatch = useDispatch();
	const localUser = useSelector((state) => state.user);
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
	};

	return (
		<div className="chats-list__wrapper">
			<ul className="chats-list">
				{loggedUsers[0] &&
					loggedUsers.map((user) => {
						const shortName =
							user.name.length > 18 ? `${user.name.slice(0, 15)}...` : user.name;

						const message = 'Bla bla bla bla bla bla bla bla bla';
						const shortMessage =
							message.length > 28 ? `${message.slice(0, 25)}...` : message;

						if (user.uid === localUser.user.uid) {
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
										/>
									</div>
									<div className="chats-item__content">
										<h3 className="title title_size-s chats-item__contact">
											{shortName}
											<time className="chats-item__last-time">20:44</time>
										</h3>
										<p className="chats-item__message">{shortMessage}</p>
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
