const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    // host: '135.23.222.131',
    // port: 50542
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  // receive messages/date from server
  conn.on('data', (data) => {
    console.log(data);
  });
  // Lets us know we connected, and sends the server our initials
  conn.on('connect', () => {
    conn.write('Name: T.M');
    console.log('Successfully connected to game server');
    // setInterval(() => {
    //   conn.write('Move: up');
    // }, 50);
    // process.stdin.on('data', (message) => {
    //   conn.write(message);
    // });
  });
  return conn;
}

module.exports = connect;
// module.exports = {
//   connect,
// };