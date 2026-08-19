const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("Inside first dummy middleware", req.url, req.method);
    next();
});

app.use((req, res, next) => {
    console.log("Inside second dummy middleware", req.url, req.method);
    next();
});

// app.use((req, res, next) => {
//     console.log("Inside third dummy middleware", req.url, req.method);
//     res.send("<h1>Welcome to half coding</h1>")
// });

app.get("/", (req, res, next) => {
    console.log("Handling for / Get request", req.url, req.method)
    res.send(`<h1>Welcome to half coding</h1>`)
});

app.get("/contact-us", (req, res, next) => {
    console.log(`Handling contact / for Get request`, req.url, req.method);
    res.send(
    `<h1>Please give your details here</h1>
    <form action="/contact-us" method="POST">
      <input type="text" name="name" placeholder="Enter your name" />
      <input type="email" name="email" placeholder="Enter your Email" />
      <input type="Submit" />
    </form>`
    )
});

app.post("/contact-us", (req, res, next)=>{
    console.log("Handling request / for Post", req.url, req.method);
    res.send("<h1>We will contact you shortly</h1>")
});

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`server running on Port http://localhost:/${PORT}`);
})