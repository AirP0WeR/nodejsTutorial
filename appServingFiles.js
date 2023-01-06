import http from 'http';
import fs from 'fs';

http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./static/index.html');
    res.writeHead(200, {'Content-Type': 'text/html'});
    readStream.pipe(res);
}).listen(3000);