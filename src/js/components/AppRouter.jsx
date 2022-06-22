import React, { useEffect } from 'react';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../routes/routes';

import { useDispatch } from 'react-redux';
import { LOG_IN } from '../redux/actions/userActions';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';

const AppRouter = () => {
	const dispatch = useDispatch();
	const [user] = useAuthState(auth);

	useEffect(() => {
		if (user) {
			const userData = JSON.parse(JSON.stringify(user));
			dispatch(LOG_IN(userData));
		}
	}, [user]);

	return user ? (
		<Routes>
			{privateRoutes.map(({ path, component }) => (
				<Route path={path} element={component} exact key={path} />
			))}
			<Route path="*" element={<Navigate to={CHAT_ROUTE} exact />} />
		</Routes>
	) : (
		<Routes>
			{publicRoutes.map(({ path, component }) => (
				<Route path={path} element={component} exact key={path} />
			))}
			<Route path="*" element={<Navigate to={LOGIN_ROUTE} exact />} />
		</Routes>
	);
};

export default AppRouter;
