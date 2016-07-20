// WebSocket vs. Socket.IO example - common backend - from:
// https://github.com/rsp/node-websocket-vs-socket.io
// Copyright (c) 2015, 2016 Rafał Pocztarski
// Released under MIT License (Expat) - see:
// https://github.com/rsp/node-websocket-vs-socket.io/blob/master/LICENSE.md

var express = require('express');

// WebSocket:
var wsapp = express();
var ws = require('express-ws')(wsapp);
wsapp.get('/', (req, res) => {
  console.error('express connection');
  res.sendFile(__dirname + '/ws.html');
});
wsapp.ws('/', (s, req) => {
  console.error('websocket connection');
  for (var t = 0; t < 3; t++)
    setTimeout(() => s.send('message from server'), 1000*t);
});
wsapp.listen(3001, () => console.error('listening on http://localhost:3001/'));
console.error('websocket example');

// Socket.IO:
var siapp = express();
var http = require('http').Server(siapp);
var io = require('socket.io')(http);
siapp.get('/', (req, res) => {
  console.error('express connection');
  res.sendFile(__dirname + '/si.html');
});
io.on('connection', s => {
  console.error('socket.io connection');
  for (var t = 0; t < 3; t++)
    setTimeout(() => s.emit('message', 'message from server'), 1000*t);
});
http.listen(3002, () => console.error('listening on http://localhost:3002/'));
console.error('socket.io example');
