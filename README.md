# 💬 Real-Time Chat App

Company Name: CODTECH IT SOLUTIONS

Name: Shinde Shantanu Dasharath

Intern ID:  CTIS3019

Domain Name: Full Stack Web Development

Batch Duration: 4 Weeks

Mentor Name: Nila Santos

A modern, responsive real-time chat application built with **Node.js**, **Express**, and **Socket.io**. This project demonstrates the "Publish/Subscribe" model of communication, allowing multiple users to exchange messages instantly with a custom UI that distinguishes between the sender and the receiver.



## 🚀 Features
* **Real-Time Messaging:** Instant message delivery using WebSockets (Socket.io).
* **Dynamic Usernames:** Prompt-based user identification upon joining.
* **Presence Tracking:** A live sidebar showing currently online users.
* **WhatsApp-Style UI:**
    * Sent messages align to the right (green bubbles).
    * Received messages align to the left (white bubbles).
    * Timestamps and sender names included.
* **Typing Indicators:** Real-time "Someone is typing..." feedback.
* **Responsive Design:** Works on desktop and mobile browsers.

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3 (Flexbox), JavaScript (Vanilla)
* **Backend:** Node.js, Express.js
* **Real-Time Engine:** Socket.io

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
   cd YOUR_REPO_NAME
Install dependencies:

Bash

npm install
Run the server:

Bash

node server.js
Access the app: Open http://localhost:3000 in multiple browser tabs to test the real-time functionality.

📖 How It Works
The application uses Socket.io to create a persistent connection between the client and the server.

When a user sends a message, the client emits an event to the server.

The server broadcasts that message to all connected clients.

Each client compares the senderId with its own socket.id to determine if the message should appear on the left or right.

🌟 Future Enhancements
[ ] Database Integration: Persistence with MongoDB or PostgreSQL.

[ ] Private Rooms: Allow users to join specific channels.

[ ] Emojis: Integrated emoji picker for messages.

[ ] File Sharing: Ability to send images or documents.

Created with ❤️ by [Shantanu]
