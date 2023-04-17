import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

async function sendMessage(message, localUser, selectedUser) {
	if (!message) {
		return;
	}

	const currentDate = new Date().toString();

	// const localUserData = Object.assign({}, localUser);
	// const selectedUserData = Object.assign({}, selectedUser);
	const localUserData = { ...localUser };
	const selectedUserData = { ...selectedUser };

	const usersData = [localUserData, selectedUserData];

	usersData.map(async (data) => {
		const userData = Object.assign({}, data);

		if (!userData.chats) {
			userData.chats = [];
		}

		if (userData.uid === localUserData.uid) {
			// Push messages to the local user's data
			let currentChat = userData.chats.find((chat) => chat.uid === selectedUserData.uid);

			const currentChatIndex = currentChat ? userData.chats.indexOf(currentChat) : -1;

			if (currentChatIndex === -1) {
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

				userData.chats = [...userData.chats, newChat];
			} else {
				const newMessage = {
					text: message,
					date: currentDate.toString(),
					senderUid: localUserData.uid
				};

				userData.chats[currentChatIndex].messages = [
					...userData.chats[currentChatIndex].messages,
					newMessage
				];
			}
		}

		if (userData.uid === selectedUserData.uid) {
			const currentChat = userData.chats.find((chat) => chat.uid === localUserData.uid);

			const currentChatIndex = currentChat ? userData.chats.indexOf(currentChat) : -1;

			if (currentChatIndex === -1) {
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

				userData.chats = [...userData.chats, newChat];
			} else {
				const newMessage = {
					text: message,
					date: currentDate.toString(),
					senderUid: localUserData.uid
				};

				userData.chats[currentChatIndex].messages = [
					...userData.chats[currentChatIndex].messages,
					newMessage
				];
			}
		}

		await setDoc(doc(db, 'users', userData.uid), userData);
	});
}

export default sendMessage;
