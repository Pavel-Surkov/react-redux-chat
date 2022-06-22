import React from 'react';
import Header from './Header';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../routes/routes';

const AppRouter = () => {
	const user = false;

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
