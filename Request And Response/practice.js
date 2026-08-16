const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    if(req.url === '/home'){
        res.write('<h1>Welcome to HomePage</h1>')
    } else if(req.url === '/men'){
        res.write('<h1>Welcome to MenPage</h1>')
    } else if(req.url === '/women'){
        res.write('<h1>Welcome to WomenPage</h1>')
    } else if(req.url === '/kids'){
        res.write('<h1>Welcome to KidsPage</h1>')
    } else if(req.url === '/cart'){
        res.write('<h1>Welcome to Cart Page</h1>')
    }

    res.write(`
        <html>
        < head >
        <title>Myntra</title>
        </head >
         <body>
           <head>
            <nav>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/men">Men</a></li>
                    <li><a href="/women">Women</a></li>
                    <li><a href="/kids">Kids</a></li>
                    <li><a href="/cart">Cart</a></li>
                </ul>
            </nav>
        </head>
    </body>
</html > 
    `)

    res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`server running on port http://localhost:/${PORT}`)
});

