var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/privacy', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/privacy.html'));
});
app.get('/terms', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/terms.html'));
});

app.use(express.static('public'))

app.listen(process.env.PORT || 3000)

//  app.listen(3000);
//  console.log('listening on ', 3000)