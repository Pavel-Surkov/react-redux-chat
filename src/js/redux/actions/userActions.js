export const LOG_IN = (userData) => {
	return {
		type: 'LOG_IN',
		payload: userData
	};
};

export const LOG_OUT = () => {
	return {
		type: 'LOG_OUT'
	};
};
