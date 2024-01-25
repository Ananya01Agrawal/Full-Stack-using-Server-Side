const express = require('express');
const app = express();
const port = 3000;
//app.use is a method inbuilt in express to register a middleware. Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
app.use("/path",(req,res) => {
    //console.log("request aa gyi");
    res.send("Hello World");//for receiving the request and sending the response
})
// app.listen is a method that starts a UNIX socket and listens for connections on the given path.and also monitor the port for incoming requests
// In app.listen we pass the port number and a callback function that will be called when the server starts listening for requests.
app.listen(port, () => {
    console.log("http://localhost:"+port);
});
//console.log(app);
