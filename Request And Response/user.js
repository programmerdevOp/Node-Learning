const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers);

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Half Coding</title></head>')

    if(req.url === '/'){
        res.write('<h1>Welcome to HomePage</h1>')
        return res.end();
    } else if(req.url.toLocaleLowerCase() === '/products'){
        res.write('<h1>Products</h1>');
        return res.end();
    }

    res.write('<body><h1>Like | Share | Subscribe</h1></body>');
    res.write('</html>');
    return res.end();
});

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`server running on port http://localhost:/${PORT}`);
});