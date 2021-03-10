// play.js
const connect = require('./client');
console.log('Connecting ...');
connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

const handleUserInput = (input) => {
  if (input === '\u0003') {
    console.log('Leaving!');
    process.exit();
  }
};

// process.stdin.on('data', (input) => {
//   setupInput(input);
// });

setupInput();