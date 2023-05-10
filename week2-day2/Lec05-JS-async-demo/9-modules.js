// Importing a module executes all the code.
import "./module.js";
console.log("window.moduleVar =", window.moduleVar);

// ----------------------------------------e
// Import everything as a module (some object) and rename as mod
// import * as mod from "./module.js";
// console.log(mod);

// ----------------------------------------
// Selectively import whatever you want, default exports don't need destructuring

// import fn, { someVar, obj } from "./module.js";

// console.log("fn =", fn);
// fn();

// console.log("someVar =", someVar);
// console.log("obj =", obj);
