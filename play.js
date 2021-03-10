// play.js
const connect = require('./client');
console.log('Connecting ...');
connect();

// const net = require('net');

// const conn = net.createConnection({
//   host: 'localhost',
//   port: 50541
// });
// process.stdin.on('data', (message) => {
//   conn.write(message);
// });