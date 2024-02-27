// 1-stdin.js
console.log('Welcome to Holberton School, what is your name?\n');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', name => {
  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing\n');
  readline.close();
});
