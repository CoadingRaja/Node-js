const http = require('http');

http.createServer((req, resp)=>{
    resp.writeable(200, {'Content-Type': 'text/plain'});
    resp.end('bzdbdznd');
}).listen(3000);