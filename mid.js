var express = require('express');
var app = express();

// Middleware to add a custom header to the response
app.use(function(req, res, next) {
    res.setHeader('X-Custom-Header', 'Hello from Middleware');
    next();  // Pass control to the next middleware/handler
});

// Route handler
app.get('/', function(req, res) {
    res.send('Check the custom header!');
});

app.listen(3000, function() {
    console.log("Server running on port 3000");
});