// ------------------------------------------------------------------------------------
// Hoisting Variables

// // Var declaration is hoisted and initialized with undefined.
// console.log("num =", num);
// var num; // Declaration
// num = 6; // Initialization

// // This is more or less the same thing.
// var address;
// console.log("address =", address);

// // Logging an undeclared variable causes a reference error.
// console.log(num1);

// -----------------------------------------

// Let and const declarations are hoisted but not initialized. 
// Notice there's no reference error for "not defined".

// console.log("num =", num);
// let num = 6;

// console.log("num =", num);
// const num = 2;

// ------------------------------------------------------------------------------------
// Hoisting functions

// You can invoke functions before declaration.
// f1();
// function f1() {
//   console.log('this is f1');
// }

// -----------------------------------------
// Function expressions or arrow functions are assigned to variables, which are hoisted differently.
// f2();
// var f2 = function () {
//   console.log('this is f2');
// };

// This is more or less the same thing.
// var f2;
// f2();
// f2 = function () { };