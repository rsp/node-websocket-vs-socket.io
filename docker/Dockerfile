#
# BUILD: docker build --rm -t derand/node-websocket-vs-socket.io -f ./docker/Dockerfile .
#   RUN: docker run --detach=true -p 3001:3001 -p 3002:3002 --name node-websocket-vs-socket.io derand/node-websocket-vs-socket.io
#

FROM       node

COPY . /node-websocket-vs-socket.io/
WORKDIR /node-websocket-vs-socket.io/

RUN  npm i

EXPOSE 3001 3002

ENTRYPOINT ["./ws-vs-si.js"]
