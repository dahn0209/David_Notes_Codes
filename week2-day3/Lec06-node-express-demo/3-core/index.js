// ---------------------------------------------------------------------------------------
// Events

// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// // Emitting events with and without registered handlers
// eventEmitter.on('logMessage', () => { console.log('logMessage event: A custom event was fired.'); });
// eventEmitter.emit('logMessage');
// eventEmitter.emit('logMessage');
// eventEmitter.emit('unregisteredEvent');

// --------------------------------------------
// Once
// eventEmitter.once('logMessage', () => { console.log('logMessage event Once: A custom event was fired.'); });
// eventEmitter.emit('logMessage');
// eventEmitter.emit('logMessage');
// eventEmitter.emit('logMessage');

// --------------------------------------------
// Importing an event emitter
// const utils = require('./utils');
// console.log("utils =", utils);
// utils.eventEmitter.emit("greeting", "Hello!", 2);

// ---------------------------------------------------------------------------------------
// File System

// const path = require('path');
// const fs = require('fs/promises');

// async function read(fileName) {
//   try {
//     const stats = await fs.stat(fileName);
//     if (stats) {
//       console.log(`${fileName} stats:`, stats);

//       // Read the file contents all at once
//       const dataRead = await fs.readFile(fileName); // returns a buffer
//       console.log("dataRead =", dataRead);
//       console.log("String(dataRead) =", String(dataRead));

//       const data = JSON.parse(dataRead);
//       console.log("data =", data);
//       return data;
//     }
//   } catch (e) {
//     console.error("read error: ", e);
//     return e;
//   }
// }

// async function useFs(filePath) {
//   try {
//     const resRead = await read(filePath);
//     if (resRead instanceof Error) {
//       if (resRead.code === "ENOENT") { // the file didn't exist
//         const data = [
//           { id: 1, name: "User1" },
//           { id: 2, name: "User2" }
//         ];
//         const resWrite = await fs.writeFile(filePath, JSON.stringify(data));
//         console.log("resWrite =", resWrite);
//       }
//     } else {
//       // we read the data, let's update it
//       const newUser = { id: 3, name: "User3" };
//       resRead.push(newUser);
//       const resWrite = await fs.writeFile(filePath, JSON.stringify(resRead));
//       console.log("resWrite =", resWrite);
//     }
//   }
//   catch (e) {
//     console.error("useFs error:", e);
//   }
// }

// const filePath = path.join(__dirname, '/test.json');
// console.log("\x1b[46m%s\x1b[0m", "Running 'index.js'");
// useFs(filePath);