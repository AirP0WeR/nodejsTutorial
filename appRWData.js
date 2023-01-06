import fs from 'fs';
import Zlib from 'zlib';

const gzip = Zlib.createGzip();
const ungzip = Zlib.createGunzip();
const readStream = fs.createReadStream('./example.txt', 'utf-8');
const writeStream = fs.createWriteStream('./example2.txt.gz');
// const readStream1 = fs.createReadStream('./example2.txt.gz');
// const writeStream1 = fs.createWriteStream('example3.txt');

// readStream.on('data', (chunk)=> {
//     writeStream.write(chunk);
// });

readStream.pipe(gzip).pipe(writeStream);

// readStream1.pipe(ungzip).pipe(writeStream1);
