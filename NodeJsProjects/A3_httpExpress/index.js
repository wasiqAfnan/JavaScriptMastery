const http = require('http');
const express = require('express');

const app = express(); // creating instance of express

// handling routes which was earlier handles by http using switch-case in Assignment 2
app.get('/',(req, res)=>{
    res.status(200).json({message: "Hello world"})
})

const server = http.createServer(app); // server creation using HTTP and passing app as a callback

server.listen(8000,()=>console.log("Server is running at posrt 8000")); // port setup