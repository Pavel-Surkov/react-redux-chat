import React from 'react';
import { LOGIN_ROUTE, CHAT_ROUTE } from '../utils/consts';
import Login from '../components/Login';
import Messenger from '../components/Messenger/Messenger';

export const publicRoutes = [
	{
		path: LOGIN_ROUTE,
		component: <Login />
	}
];

export const privateRoutes = [
	{
		path: CHAT_ROUTE,
		component: <Messenger />
	},
	{
		path: `${CHAT_ROUTE}/:uid`,
		component: <Messenger />
	}
];
