const http = require('http');

const modules = require('./modules');

const {  readFileSync,
  readFileASync,
  readFileName,
  readDirectoryName} = modules

const hostname = '127.0.0.1';
const port = 3000;

readFileASync();
readDirectoryName();
readFileName();
readFileSync();


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello men');
});

server.listen(port, hostname, () => {
  // console.log(`Server running at http://${hostname}:${port}/`);
  console.log('START');
});
