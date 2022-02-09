// Configure Express
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

// Configure home route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Initialize server
server.listen(3000, () => {
    console.log('listening on *:3000');
});
