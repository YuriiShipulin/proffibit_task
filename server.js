var app = require('./app');
var http = require('http');
var port = 3030;

app.set('port', port);

var server = http.createServer(app);

server.listen(port, function(){
    console.log('==== server started ====')
});
