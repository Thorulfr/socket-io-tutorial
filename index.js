// Configure Express
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

// Configure home route
app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

// Initialize server
server.listen(3000, () => {
    console.log('listening on *:3000');
});
