// const express = require('express')
require("dotenv").config();

const Server = require("./models/server");

const server = new Server();

server.listen();

// const app = express();
 
// app.get('/', function (req, res) {
//   res.send('Hola Rolling code');
// });
 
// app.listen(process.env.PORT, () => {
//     console.log("Servidor Online", process.env.PORT);
// });
