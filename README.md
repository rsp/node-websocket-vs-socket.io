Node WebSocket vs. Socket.IO
============================
[![npm install -g websocket-vs-socket.io](https://nodei.co/npm/websocket-vs-socket.io.png?compact=true)](https://www.npmjs.com/package/websocket-vs-socket.io)
<br>
[![Code Climate](https://codeclimate.com/github/rsp/node-websocket-vs-socket.io/badges/gpa.svg)](https://codeclimate.com/github/rsp/node-websocket-vs-socket.io)
[![Known Vulnerabilities](https://snyk.io/test/github/rsp/node-websocket-vs-socket.io/badge.svg)](https://snyk.io/test/github/rsp/node-websocket-vs-socket.io)
[![Downloads](https://img.shields.io/npm/dt/websocket-vs-socket.io.svg)](http://npm-stat.com/charts.html?package=websocket-vs-socket.io)

Comparing WebSocket and Socket.IO on Node.js with Express.js -
example server-side and client-side code to see the basic usage of
both WebSocket and Socket.IO in an Express.js app,
with info on how to compare the actual network traffic
(which is commonly misunderstood by many online sources).

See those Stack Overflow answers where this code was used:
* [Differences between socket.io and websockets](https://stackoverflow.com/questions/10112178/differences-between-socket-io-and-websockets/38558531#38558531)
* [socket.io no communication between server and client](https://stackoverflow.com/questions/39619449/socket-io-no-communication-between-server-and-client/39619862#39619862)
* [why web socket behave differently on nodejs ?](https://stackoverflow.com/questions/39765427/why-web-socket-behave-differently-on-nodejs/39765994#39765994)
* [getting an error when trying to use socket.io](https://stackoverflow.com/questions/39786269/getting-an-error-when-trying-to-use-socket-io/39786373#39786373)
* [How to use Socket.io combined with Express.JS](https://stackoverflow.com/questions/40747828/how-to-use-socket-io-combined-with-express-js-using-express-application-generat/40747932#40747932)
* [Node.js long polling event loop breaks the whole code](https://stackoverflow.com/questions/41210398/node-js-long-polling-event-loop-breaks-the-whole-code/41210763#41210763)

Quick start
-----------
Install:
```sh
npm i -g websocket-vs-socket.io
```
Run the server:
```sh
websocket-vs-socket.io
```
Open [http://localhost:3001/](http://localhost:3001/)
in your browser, open developer tools with Shift+Ctrl+I, open the Network tab
and reload the page with Ctrl+R to see the network traffic for the
**WebSocket version**.

Open [http://localhost:3002/](http://localhost:3002/)
in your browser, open developer tools with Shift+Ctrl+I, open the Network tab
and reload the page with Ctrl+R to see the network traffic for the
**Socket.IO version**.

Uninstall the server:
```sh
npm rm -g websocket-vs-socket.io
```

For more options, see [Installation](#installation) below.

Installation
------------
More options to install the server.
### Installing from npm
Installing globally with npm:
```sh
# install globally with npm:
npm i -g websocket-vs-socket.io
# run the server:
websocket-vs-socket.io
# uninstall:
npm rm -g websocket-vs-socket.io
```
Installing locally with npm:
```sh
# create a directory:
mkdir ~/websocket-vs-socket.io
cd ~/websocket-vs-socket.io
# install the module:
npm i websocket-vs-socket.io
# run the server:
./node_modules/.bin/websocket-vs-socket.io
# uninstall the module:
npm rm websocket-vs-socket.io
# or remove the entire directory:
rm -rvf ~/websocket-vs-socket.io
```

### Installing from GitHub
You can clone the git repo and install npm dependencies:
```sh
# clone the git repo:
git clone git@github.com:rsp/node-websocket-vs-socket.io.git
cd node-websocket-vs-socket.io
# install dependencies:
npm i
# run the server:
./ws-vs-si.js
```
Alternatively, instead of cloning the repo you can download a ZIP file:
```sh
# download and unzip the zip file:
wget https://github.com/rsp/node-websocket-vs-socket.io/archive/master.zip
unzip master.zip
cd node-websocket-vs-socket.io-master
# install dependencies:
npm i
# run the server:
./ws-vs-si.js
```

### Installing from Docker
You can build and run own docker image running from "root" repo folder
```
docker-compose -f ./docker/docker-compose.yml build
docker-compose -f ./docker/docker-compose.yml up -d
```

Running
-------
You start the server with either
`websocket-vs-socket.io` (if you installed from npm) or
`./ws-vs-si.js` (if you installed from the GitHub repo).
See [Installation](#installation) above for details.

When the server is running, you can open in your browser:

* [http://localhost:3001/](http://localhost:3001/) - WebSocket version
* [http://localhost:3002/](http://localhost:3002/) - Socket.IO version
* [http://localhost:3002/forced](http://localhost:3002/forced) - Socket.IO version (forced websockets)

In Firefox or Chrome, you can open developer tools with Shift+Ctrl+I,
open the Network tab and reload the page with Ctrl+R to see the network traffic
for both versions.

Issues
------
For any bug reports or feature requests please
[post an issue on GitHub](https://github.com/rsp/node-websocket-vs-socket.io/issues).

Author
------
Rafał Pocztarski - [https://github.com/rsp](https://github.com/rsp)

Contributors
-
* [Miloš Popović](https://github.com/miloss)
  (improved documentation in
  [PR #1](https://github.com/rsp/node-websocket-vs-socket.io/pull/1))

License
-------
MIT License (Expat). See [LICENSE.md](LICENSE.md) for details.

