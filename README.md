Node WebSocket vs. Socket.IO
============================
Comparng WebSocket and Socket.IO on Node.js with Express.js

Examples for an answer on Stack Overflow.

... work in progress ...

Installation
------------
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

Running
-------
...

Issues
------
For any bug reports or feature requests please
[post an issue on GitHub](https://github.com/rsp/node-websocket-vs-socket.io/issues).

Author
------
Rafał Pocztarski - [https://github.com/rsp](https://github.com/rsp)

License
-------
MIT License (Expat). See [LICENSE.md](LICENSE.md) for details.

