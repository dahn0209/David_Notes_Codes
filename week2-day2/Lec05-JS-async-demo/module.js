// In modules, top-level var is not globally-scoped, but to the module itself
var moduleVar = "moduleVar";
console.log("window =", window);
console.log("window.moduleVar =", window.moduleVar);

// ---------------------------------------------------------------------------------------
console.log("module.js has been imported");

export const someVar = 0;
export const obj = {
  1: 1,
  2: 2,
  3: 3
};

// One export default
export default function () { console.log("Default export function"); }
