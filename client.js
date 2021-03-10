const net = require('net');
const { IP, PORT, playerName } = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  // receive messages/date from server
  conn.on('data', (data) => {
    console.log(data);
  });
  // Lets us know we connected, and sends the server our initials
  conn.on('connect', () => {
    conn.write(`Name: ${playerName}`);
    console.log('Successfully connected to game server');
  });
  return conn;
}

module.exports = { connect };