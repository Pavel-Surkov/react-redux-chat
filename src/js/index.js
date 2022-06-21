import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import '../styles/main.scss';
import '../index.html';

// Your web app's Firebase configuration
initializeApp({
	apiKey: 'AIzaSyB5hTv_3HyIpRL5YQ2Xjj8u8QAXfs12ybQ',
	authDomain: 'realtime-chat-a9c04.firebaseapp.com',
	projectId: 'realtime-chat-a9c04',
	storageBucket: 'realtime-chat-a9c04.appspot.com',
	messagingSenderId: '416022762078',
	appId: '1:416022762078:web:655387bb89f78ad1671acf'
});

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<App />);
