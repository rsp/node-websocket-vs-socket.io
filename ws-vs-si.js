// WebSocket vs. Socket.IO example - common backend - from:
// https://github.com/rsp/node-websocket-vs-socket.io
// Copyright (c) 2015, 2016 Rafał Pocztarski
// Released under MIT License (Expat) - see:
// https://github.com/rsp/node-websocket-vs-socket.io/blob/master/LICENSE.md

var express = require('express');

// WebSocket:
var ws = {app: express(), name: "WebSocket App"};
ws.ws = require('express-ws')(ws.app);
ws.app.get('/', (req, res) => {
  console.error('express connection');
  res.sendFile(__dirname + '/ws.html');
});
ws.app.ws('/', (s, req) => {
  console.error('websocket connection');
  for (var t = 0; t < 3; t++)
    setTimeout(() => s.send('message from '+ws.name+' server'), 1000*t);
});
ws.app.listen(3001, () => console.error('listening on http://localhost:3001/'));
console.error('websocket example');

// Socket.IO:
var si = {app: express(), name: "Sockey.IO App"};
si.http = require('http').Server(si.app);
si.io = require('socket.io')(si.http);
si.app.get('/', (req, res) => {
  console.error('express connection');
  res.sendFile(__dirname + '/si.html');
});
si.io.on('connection', s => {
  console.error('socket.io connection');
  for (var t = 0; t < 3; t++)
    setTimeout(() => s.emit('message', 'message from '+si.name+' server'), 1000*t);
});
si.http.listen(3002, () => console.error('listening on http://localhost:3002/'));
console.error('socket.io example');
