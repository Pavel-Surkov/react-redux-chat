import React from 'react';
import { LOGIN_ROUTE } from '../utils/consts';
import { Link } from 'react-router-dom';
import Button from '../constant/components/Button';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';

const Header = () => {
	const [user] = useAuthState(auth);

	return (
		<header className="header">
			<div className="container">
				<div className="header-wrapper">
					<div className="logo">
						<div data-type="svg">
							<svg
								data-svg="star"
								width="61"
								height="63"
								viewBox="0 0 61 63"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M10.5406 55.2566C20.9916 41.5397 25.4429 23.9649 34.1032 9.13399C35.383 6.94241 37.0815 3.44882 39.0539 1.614C39.8534 0.870297 39.3154 6.5949 39.3046 6.68999C38.3217 15.3043 36.5189 23.7391 35.9519 32.4146C35.4196 40.5586 35.2201 49.0438 33.4139 57.0426C32.6827 60.2806 33.6955 64.3836 30.4059 58.9852C28.9995 56.6774 27.415 54.5392 25.8939 52.3113C23.2118 48.383 21.5452 43.9513 19.1886 39.8406C15.6737 33.7094 10.7242 28.4735 5.58994 23.6726C3.46539 21.686 1.48865 19.1112 1.01528 16.1526C0.4539 12.644 15.5364 17.1099 16.7446 17.3433C30.8082 20.0606 44.9752 21.6788 58.6999 25.866C61.4838 26.7153 58.0167 28.2465 56.7885 28.9993C51.6976 32.1195 45.7349 33.9434 40.3699 36.5819C33.9755 39.7267 27.7784 43.1428 21.2566 46.1073C16.1436 48.4313 9.98533 50.174 5.46461 53.5646"
									stroke="#FFFFFF"
									strokeWidth="2"
									strokeLinecap="round"
								></path>
							</svg>
						</div>
						<span>Random Meme Chat</span>
					</div>
					<div className="header-login">
						{user ? (
							<Button
								className="header-login-link"
								clickFunction={() => auth.signOut()}
							>
								Log out
							</Button>
						) : (
							<Link className="link header-login-link" to={LOGIN_ROUTE}>
								Log in
							</Link>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
