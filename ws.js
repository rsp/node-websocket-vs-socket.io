#!/usr/bin/env node

// WebSocket example - backend - from:
// https://github.com/rsp/node-websocket-vs-socket.io
// Copyright (c) 2015, 2016 Rafał Pocztarski
// Released under MIT License (Expat) - see:
// https://github.com/rsp/node-websocket-vs-socket.io/blob/master/LICENSE.md

/*eslint-disable no-loop-func*/
var path = require('path');
var app = require('express')();
var ws = require('express-ws')(app);
app.get('/', (req, res) => {
  console.error('express connection');
  res.sendFile(path.join(__dirname, 'ws.html'));
});
app.ws('/', (s, req) => {
  console.error('websocket connection');
  for (var t = 0; t < 3; t++)
    setTimeout(() => s.send('message from server', ()=>{}), 1000*t);
});
app.listen(3001, () => console.error('listening on http://localhost:3001/'));
console.error('websocket example');

