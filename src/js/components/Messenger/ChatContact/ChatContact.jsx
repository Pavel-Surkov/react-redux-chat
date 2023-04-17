import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CLOSE_CHAT } from '../../../redux/actions/mobileChatOpenedActions';

const ChatContact = () => {
	const selectedUser = useSelector((state) => state.selectedUser);

	const dispatch = useDispatch();

	return (
		<div className="contact">
			<div className="contact-wrapper">
				<div className="contact-back">
					<button className="contact-back__btn" onClick={() => dispatch(CLOSE_CHAT())}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="23"
							height="23"
							fill="currentColor"
							className="bi bi-chevron-left"
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
							/>
						</svg>
					</button>
				</div>
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
					<h3 className="title title_size-s">{selectedUser.displayName}</h3>
				</div>
			</div>
		</div>
	);
};

export default ChatContact;
