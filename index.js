const fs = require('fs');
const http = require('http');
const moment = require('moment'); // external library

const logMessage = `Server started at ${moment().format()}\n`;
fs.appendFileSync('app.log', logMessage);  // creates app.log

const server = http.createServer((req, res) => {
  res.end('Hello, World!\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

