const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
//app.use is a method inbuilt in express to register a middleware. Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.

app.use(express.static(path.join(__dirname, "public")));//to use the static files like css,js,images,etc we use the express.static() method
//__dirname is a global object that contains the path of the current directory.
//path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.
app.use("/",(req,res,next) => {
    console.log("Middleware");
    next();
    //res.send("Hello World");//for receiving the request and sending the response
})

// to send the response we use the get method
app.get("/",(req,res) => {
    //res.send("Response from the server");
    res.sendFile(path.join(__dirname,"index.html"));
})

app.get("/style.css",(req,res) => {
    res.sendFile(path.join(__dirname,"style.css"));
})

app.get("/script.js", (req, res) => {
    res.sendFile(path.join(__dirname, "script.js"));
});
// app.listen is a method that starts a UNIX socket and listens for connections on the given path.and also monitor the port for incoming requests
// In app.listen we pass the port number and a callback function that will be called when the server starts listening for requests.
app.listen(port, () => {
    console.log("http://localhost:"+port);
});
//console.log(app);
