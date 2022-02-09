// Configure Express
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

// Configure Socket.IO
const { Server } = require('socket.io');
const io = new Server(server);

// Configure home route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Listen for incoming sockets and log them
io.on('connection', (socket) => {
    console.log('A user connected!');
    socket.on('disconnect', () => {
        console.log('A user disconnected.');
    });
});

// Initialize server
server.listen(3000, () => {
    console.log('listening on *:3000');
});
