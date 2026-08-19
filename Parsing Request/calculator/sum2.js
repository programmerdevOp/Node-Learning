(req, res)=>{
    console.log(`Inside sumRequestHandler2 ${req.url}`)

    //chunk
    const body = [];
    req.on('data', (chunk)=>{
        console.log(chunk);
        body.push(chunk);
    });

    //buffer
    req.on('end', ()=>{
        const bodyStr = Buffer.concat(body).toString();
        const params = new URLSearchParams(bodyStr);
        const bodyObj = Object.fromEntries(params);
        Number(bodyObj.first) + bodyObj.second;
    })
}