const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers);

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Half Coding</title></head>')
});

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`server running on port http://localhost:/${PORT}`);
});