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
    // Log that a user connected on connect
    console.log('A user connected!');
    // Log that a user disconnected on disconnect
    socket.on('disconnect', () => {
        console.log('A user disconnected.');
    });
    // Log users' messages
    socket.on('chat message', (msg) => {
        // Log to server console
        console.log('message: ' + msg);
        // Emit to all sockets
        io.emit('chat message', msg);
    });
});

// Initialize server
server.listen(3000, () => {
    console.log('listening on *:3000');
});
