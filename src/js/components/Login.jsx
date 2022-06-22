import React from 'react';
import Button from '../constant/components/Button';
import google from '../../assets/images/svg/Google__G__Logo.svg';

const Login = () => {
	return (
		<div className="main-content login">
			<div className="container">
				<div className="login-wrapper">
					<div className="login-box">
						<h1 className="title title_size-l login-box__greeting">
							Hi, user &#128578;
						</h1>
						<div className="login-box__note">
							<p>
								Glad to see you here! <span>Hit</span> the&nbsp;button below
								and&nbsp;get your meme portion!
							</p>
						</div>
						<Button className="google-btn">
							<div className="google-btn__icon">
								<img src={google} width="24" height="24" alt="google" />
							</div>
							<span>Continue with Google</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
