import server from "./index.js";
const express = require('express')

const server = express();

server.listen(3000, () => {
  console.log("server is listening at port 3000");
});
