import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

export const app = firebase.initializeApp({
	apiKey: 'AIzaSyB5hTv_3HyIpRL5YQ2Xjj8u8QAXfs12ybQ',
	authDomain: 'realtime-chat-a9c04.firebaseapp.com',
	projectId: 'realtime-chat-a9c04',
	storageBucket: 'realtime-chat-a9c04.appspot.com',
	messagingSenderId: '416022762078',
	appId: '1:416022762078:web:655387bb89f78ad1671acf'
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
