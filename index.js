const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const auth = require("json-server-auth");
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = 3001; //  chose port from here like 8080, 3001

server.use(middlewares);
server.use(auth);
server.use(router);

server.listen(port);