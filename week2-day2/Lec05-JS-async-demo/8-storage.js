// Key-value must be strings, so we often use JSON.stringify and JSON.parse.

// const url = "https://jsonplaceholder.typicode.com/users";
// fetch(url).then(res => res.json()).then(data => {
//   console.log("data =", data);
//   localStorage.setItem("users", data);
//   console.log("localStorage =", localStorage);
//   console.log("localStorage.getItem('users') =", localStorage.getItem('users'));

//   localStorage.setItem("usersStringified", JSON.stringify(data));
//   console.log("localStorage.getItem('usersStringified') =",
//     localStorage.getItem('usersStringified'));
//   console.log("JSON.parse(localStorage.getItem('usersStringified')) =",
//     JSON.parse(localStorage.getItem('usersStringified')));
// });

// ---------------------------------------------------------------------------------------
// Session storage is unique per tab, two tabs on the same page have their own storage.
// Fetch and store, comment the code. Open the same page in a new tab, they're different.

// const url = "https://jsonplaceholder.typicode.com/users";
// fetch(url).then(res => res.json()).then(data => {
//   console.log("data =", data);
//   sessionStorage.setItem("users", data);
//   console.log("sessionStorage =", sessionStorage);
//   console.log("sessionStorage.getItem('users') =", sessionStorage.getItem('users'));

//   sessionStorage.setItem("usersStringified", JSON.stringify(data));
//   console.log("sessionStorage.getItem('usersStringified') =",
//     sessionStorage.getItem('usersStringified'));
//   console.log("JSON.parse(sessionStorage.getItem('usersStringified')) =",
//     JSON.parse(sessionStorage.getItem('usersStringified')));
// });