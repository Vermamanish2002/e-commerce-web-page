const http=require("http");

const myServer=http.createServer((req, res)=>{
    res.end(web.html)
    });
    myServer.listen(8001,()=>console.log("server started"));