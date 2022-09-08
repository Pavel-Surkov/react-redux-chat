import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

//  Need to setDoc with added message
// 	await setDoc(doc(db, 'users', userData.uid), userData);
async function sendMessage(message, localUser, selectedUser) {
	if (!message) {
		return;
	}

	const localUserData = await JSON.parse(JSON.stringify(localUser));
	const selectedUserData = selectedUser;

	const usersData = [localUserData, selectedUserData];

	const currentDate = new Date().toString();

	// Create chats arr if it's needed
	// Create messages arr if it's needed
	// Add message to localUserData and selectedUserData
	usersData.map(async (userData) => {
		if (!userData.chats) {
			userData.chats = [];
		}

		if (userData.uid === localUserData.uid) {
			const currentChatIndex = userData.chats.indexOf(
				({ uid }) => uid === selectedUserData.uid
			);

			if (currentChatIndex < 0) {
				// Create new chat with selected user if there is no chat
				const newChat = {
					uid: selectedUserData.uid,
					messages: [
						{
							text: message,
							date: currentDate.toString()
						}
					]
				};

				userData.chats.push(newChat);
			} else {
				// Add messages to the chat that is already created
				if (!userData.chats[currentChatIndex].messages) {
					userData.chats[currentChatIndex].messages = [];
				}

				userData.chats[currentChatIndex].messages.push({
					text: message,
					date: currentDate.toString()
				});
			}

			console.log(userData.chats[0].messages);
		}

		if (userData.uid === selectedUserData.uid) {
		}

		await setDoc(doc(db, 'users', userData.uid), userData);
	});
}

export default sendMessage;
