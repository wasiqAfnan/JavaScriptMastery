const http = require('http');
const fs = require('fs');
const fileName = 'logs.txt'

// server creation
const server = http.createServer((req, res)=>{
    // writing only those url that is requested by the user
    // avoiding those url that is making by browser
    if(req.url != '/favicon.ico' &&
        req.url != '/.well-known/appspecific/com.chrome.devtools.json'){
        data = `[${new Date().toUTCString()}] ${req.method} -> ${req.url}\n`;
        fs.appendFile(fileName,data,(err)=>console.log(err) )
    }
    
    switch(req.url){
        case '/':
            res.end("Home Page");
            break;
        case '/about':
            res.end("About Page");
            break;
        case '/contactus':
            res.end("Contact us Page");
            break;
        default:
            res.end("404 page not found")
    }
})

// settng up ports
server.listen(8000,()=>console.log("Server started at port: 8000"))
