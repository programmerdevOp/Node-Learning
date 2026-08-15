const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Node Js Learning</title></head>');
    res.write('<body><h1>Study Practice Practice again</h1></body>');
    res.write('</html>');
    res.end();
});

const PORT = 3000;
server.listen(PORT,  ()=> {
    console.log(`server running on port http://localhost:/${PORT}`);
    // process.exit()
})