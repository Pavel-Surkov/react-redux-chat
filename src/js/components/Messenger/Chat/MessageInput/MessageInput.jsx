import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { auth } from '../../../../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import sendMessage from '../../../../functions/sendMessage';

const MessageInput = () => {
	// TODO: Add chats array to initial user object and implement sending messages

	// !It's require to add messages to the both user and selectedUser
	const [localUser] = useAuthState(auth);
	const selectedUser = useSelector((state) => state.selectedUser);

	const [inputValue, setInputValue] = useState('');

	// 	Redux writes that user.multiFactor.user is a non-seriazable
	// 	const userData = await JSON.parse(JSON.stringify(localUser.multiFactor.user));

	const handleSendClick = () => {
		if (localUser && selectedUser) {
			sendMessage(inputValue, localUser, selectedUser);

			setInputValue('');
		}
	};

	return (
		<div className="message-input">
			<div className="message-input-wrapper">
				<div className="message-files">
					<button className="message-files__btn">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							version="1.0"
							width="100%"
							height="100%"
							viewBox="0 0 1280.000000 1188.000000"
							preserveAspectRatio="xMidYMid meet"
						>
							<g
								transform="translate(0.000000,1188.000000) scale(0.100000,-0.100000)"
								fill="#a7acbb"
								stroke="none"
							>
								<path d="M7835 11870 c-555 -59 -1064 -296 -1524 -710 -160 -144 -371 -399 -492 -595 -61 -98 -2515 -4298 -2621 -4485 -466 -822 -641 -1663 -477 -2295 67 -259 222 -503 409 -644 367 -277 835 -291 1345 -42 249 122 483 292 724 526 249 242 463 509 654 815 141 227 1322 2258 1340 2305 25 65 33 196 17 266 -49 211 -237 359 -455 359 -179 0 -320 -86 -421 -256 -22 -38 -301 -514 -619 -1059 -318 -544 -602 -1030 -633 -1080 -283 -463 -627 -821 -973 -1014 -93 -52 -216 -92 -299 -98 -71 -5 -77 -4 -107 21 -41 34 -68 95 -89 197 -25 122 -15 389 20 559 65 316 185 633 354 935 131 234 2581 4424 2640 4515 296 458 770 777 1250 841 134 18 345 6 467 -25 125 -33 279 -107 383 -186 503 -379 624 -1191 283 -1895 -61 -127 -3739 -6430 -3822 -6550 -464 -673 -1395 -921 -2144 -570 -114 53 -767 425 -900 513 -206 136 -439 401 -554 631 -238 475 -240 1035 -6 1502 34 66 813 1402 2808 4814 341 583 636 1094 656 1135 31 65 36 86 39 167 5 107 -6 160 -52 248 -77 148 -240 245 -411 245 -129 -1 -230 -44 -325 -140 -57 -57 -103 -131 -391 -625 -180 -308 -942 -1613 -1694 -2900 -752 -1287 -1390 -2380 -1418 -2430 -150 -265 -258 -596 -303 -925 -24 -170 -24 -490 0 -660 56 -412 198 -791 420 -1124 111 -165 187 -258 330 -401 220 -220 326 -294 815 -575 620 -356 719 -402 1035 -485 258 -68 358 -79 676 -79 308 0 403 10 650 70 356 88 754 285 1036 514 192 157 394 378 531 585 60 90 3729 6364 3816 6525 146 271 261 622 314 960 22 145 25 576 5 715 -65 432 -208 788 -440 1095 -72 95 -236 265 -327 340 -275 225 -609 374 -975 435 -112 19 -430 27 -545 15z" />
							</g>
						</svg>
					</button>
				</div>
				<div className="message-input__input">
					<input
						type="text"
						placeholder="New message"
						value={inputValue}
						onChange={(evt) => setInputValue(evt.target.value)}
					/>
				</div>
				<button className="message-input__send" onClick={handleSendClick}>
					<svg
						width="30"
						height="30"
						xmlns="http://www.w3.org/2000/svg"
						id="Outline"
						viewBox="0 0 512 512"
					>
						<g fill="#a7acbb" stroke="none">
							<path d="M446.15,81.53a6.49,6.49,0,0,0,.11-.66c0-.15.05-.3.06-.45s0-.4,0-.6,0-.35,0-.52,0-.35,0-.52,0-.41,0-.6,0-.31-.06-.46-.06-.44-.11-.66-.06-.28-.1-.42-.11-.45-.18-.67l0-.13-.12-.32a6,6,0,0,0-.23-.59c-.07-.18-.15-.34-.22-.51l-.24-.48c-.1-.18-.2-.35-.31-.52s-.17-.28-.26-.42-.23-.33-.35-.5l-.31-.39c-.12-.15-.25-.29-.37-.43l-.38-.4-.37-.35c-.16-.14-.31-.28-.47-.4l-.36-.29c-.17-.13-.35-.25-.53-.37a3,3,0,0,0-.38-.24l-.56-.32-.45-.23c-.17-.08-.35-.17-.53-.24a5.37,5.37,0,0,0-.56-.21l-.35-.13-.13,0-.66-.17a3.2,3.2,0,0,0-.42-.1c-.23,0-.45-.08-.67-.11l-.45-.06-.62,0-.5,0-.55,0-.57,0-.48.06-.63.1-.44.11-.66.17-.12,0L74.35,182.74a11.34,11.34,0,0,0-2.44,20.49L220.6,293.74l90.51,148.69a11.32,11.32,0,0,0,9.68,5.44,10.19,10.19,0,0,0,1.35-.08,11.33,11.33,0,0,0,9.46-7.8L445.84,82.75l0-.12c.07-.22.13-.45.18-.68S446.12,81.67,446.15,81.53ZM317.56,409.42,243.85,288.31l131-132.22a11.34,11.34,0,1,0-16.11-16L228.24,271.84,104.92,196.77l312.62-100Z" />
						</g>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default MessageInput;
