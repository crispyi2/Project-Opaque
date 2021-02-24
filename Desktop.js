const express = require('express');
const app = express();
const path = require('path');
const serveStatic = require('serve-static')

app.use(express.static(path.join(__dirname, "../public")));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);