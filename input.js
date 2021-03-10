const { MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY } = require('./constants');
// Stores the active TCP connection object.
let connection;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

const handleUserInput = (input) => {
  // ^C to exit
  if (input === '\u0003') {
    console.log('Leaving!');
    process.exit();
  }
  // if (controls.move[input]) {
  //   connection.write(`Move: ${controls.move[input]}`)
  // }
  // To move with WASD
  if (input === MOVE_UP_KEY) {
    connection.write('Move: up');
  } else if (input === MOVE_DOWN_KEY) {
    connection.write('Move: down');
  } else if (input === MOVE_LEFT_KEY) {
    connection.write('Move: left');
  } else if (input === MOVE_RIGHT_KEY) {
    connection.write('Move: right');
  }
  // To send messages!
  if (input === ' ') {
    connection.write('Say: I hunger');
  } else if (input === 'm') {
    connection.write('Say: FEEED MEEEE!');
  } else if (input === 'n') {
    connection.write('Say: Nomnomnom!');
  }
};

module.exports = { setupInput };