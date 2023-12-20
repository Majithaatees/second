const http=require("http")
const fs=require("fs")
const path=require("path")
var server=http.createServer((req,res)=>{
    fs.readFile(path.join(__dirname,"views","home.html"),"utf8",(err,data)=>{
        if (err) throw err;
        res.writeHead(200,{"content-Type":"text/html"})
 
    res.end(data);
    });

    
})
const PORT=3002
server.listen(PORT,()=>console.log("server is running"))