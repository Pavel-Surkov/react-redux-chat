import { doc, setDoc } from 'firebase/firestore';

//  Need to setDoc with added message
// 	await setDoc(doc(db, 'users', userData.uid), userData);
async function sendMessage(message, localUser, selectedUser) {
	if (!message) {
		return;
	}

	const localUserData = await JSON.parse(JSON.stringify(localUser));
	const selectedUserData = selectedUser;

	const currentDate = new Date().toString();

	// Create chats arr if it's needed
	// Create messages arr if it's needed
	// Add message to localUserData and selectedUserData
}

export default sendMessage;
