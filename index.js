// Please don't change the pre-written code
// Import the necessary modules here

//Import http library/module
const http = require('http');

//Create Server
const server = http.createServer((req, res) =>{
    console.log(req.url);
    res.write('Welcome to the application');
    if(req.url == '/product'){
        res.end('This is Product Page');
    } else if (req.url == '/user'){
        res.end('This is User Page');
    }
});

server.listen(8080, ()=>{
    console.log("Server is listening on port 8080");
});

module.exports = server;
