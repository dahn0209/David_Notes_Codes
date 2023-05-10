// var does not create a global variable
var a = "my var variable";

// -------------------------------------------
// Creating a global variable
console.log("global =", global);
global.a = { message: "my global variable" };

// --------------------------------------------------------------------------------------
// module-scoped objects

console.log("module =", module);
console.log("module.exports === exports ?", module.exports === exports);
console.log("module.exports === this ?", module.exports === this);
console.log("__dirname =", __dirname);
console.log("__filename =", __filename);