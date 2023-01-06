import http from 'http';

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello worls from node.js.');
        res.end();
    }
    else {
        res.write('use write domain');
        res.end();
    }

});

server.listen('3000');