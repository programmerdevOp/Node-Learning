// creating server
const http = require('http');

// old  way
// function requestListener(req, res){
//     console.log(req);
// }

// http.createServer(requestListener);


const server = http.createServer((req, res)=>{
    console.log(req)
    process.exit();
});

const PORT = 3000

server.listen(PORT, ()=> {
    console.log(`server running at Port http://localhost:${PORT}`);
});