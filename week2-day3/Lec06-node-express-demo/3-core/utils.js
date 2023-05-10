const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on("greeting", (msg, n) => {
  for (let i = 0; i < n; i++) {
    console.log('this is eventEmitter=>',`${i + 1}: ${msg}`);
  }
});
module.exports = { eventEmitter };
