import React from 'react';

const Button = ({ type, clickFunction, className, children }) => {
	return (
		<button
			className={className ? `btn ${className}` : `btn`}
			type={type ? type : 'button'}
			onClick={clickFunction}
		>
			{children}
		</button>
	);
};

export default Button;
