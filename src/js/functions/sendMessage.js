import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

async function sendMessage(message, localUser, selectedUser) {
	if (!message) {
		return;
	}

	const localUserData = await JSON.parse(JSON.stringify(localUser));
	const selectedUserData = selectedUser;

	const usersData = [localUserData, selectedUserData];

	const currentDate = new Date().toString();

	usersData.map(async (userData) => {
		if (!userData.chats) {
			userData.chats = [];
		}

		if (userData.uid === localUserData.uid) {
			// Push messages to the local user's data
			const currentChat = userData.chats.find((chat) => chat.uid === selectedUserData.uid);

			const currentChatIndex = currentChat ? userData.chats.indexOf(currentChat) : -1;

			if (currentChatIndex < 0) {
				const newChat = {
					uid: selectedUserData.uid,
					messages: [
						{
							text: message,
							date: currentDate.toString(),
							senderUid: localUserData.uid
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
					date: currentDate.toString(),
					senderUid: localUserData.uid
				});
			}
		}

		if (userData.uid === selectedUserData.uid) {
			const currentChat = userData.chats.find((chat) => chat.uid === localUserData.uid);

			const currentChatIndex = currentChat ? userData.chats.indexOf(currentChat) : -1;

			if (currentChatIndex < 0) {
				// Create new chat with selected user if there is no chat
				const newChat = {
					uid: localUserData.uid,
					messages: [
						{
							text: message,
							date: currentDate.toString(),
							senderUid: localUserData.uid
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
					date: currentDate.toString(),
					senderUid: localUserData.uid
				});
			}
		}

		await setDoc(doc(db, 'users', userData.uid), userData);
	});
}

export default sendMessage;
