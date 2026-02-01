const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));

const users = {};

io.on('connection', (socket) => {
    socket.on('new user', (username) => {
        users[socket.id] = username;
        io.emit('user list', Object.values(users));
    });

    socket.on('chat message', (data) => {
        // Important: Pass the sender's socket.id back to everyone
        io.emit('chat message', { ...data, senderId: socket.id });
    });

    socket.on('disconnect', () => {
        delete users[socket.id];
        io.emit('user list', Object.values(users));
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});