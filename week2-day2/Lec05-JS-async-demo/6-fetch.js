// ------------------------------------------------------------------------------------
// What does a fetch response look like?

// const fetchResult = fetch('https://jsonplaceholder.typicode.com/todos/1');
// console.log("fetchResult =", fetchResult); // pending Promise

// // Why do we need response.json() ?
// fetchResult.then(response => {
//   console.log("response =", response); // object: {body, headers, status, statusText}
//   console.log("response.json() =", response.json()); // pending Promise
// });

// How do we actually get the data?
// fetchResult.then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// -----------------------------------------
// Handling response errors by looking at response HTTP status code.

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => {
//     console.log("response =", response);
//     if (response.ok) return response.json();
//     else throw new Error(`Error: Status ${response.status}`);
//     // no explict return, return undefined
//     // non-promise values => promise. Promise.resolve(undefined)
//   })
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// ------------------------------------------------------------------------------------
// When button is clicked, make an API request and display the response title on the webpage.
// Get data from https://jsonplaceholder.typicode.com

// const btn = document.getElementById('fetchBtn');
// btn.addEventListener('click', function () {
//   fetch('https://jsonplaceholder.typicode.com/todos/1')
//     // fetch('https://jsonplaceholder.typicode.com/todosasdads/1')
//     .then(response => {
//       if (response.ok) return response.json();
//       else throw new Error(`Error: Status ${response.status}`);
//     })
//     .then(data => {
//       const fetchP = document.getElementById('fetchP');
//       fetchP.innerText = `Title: ${data.title}`;
//     })
//     .catch(error => console.log(error));
// });

// ------------------------------------------------------------------------------------
// Fetch POST request

// const btn = document.getElementById('fetchBtn');
// btn.addEventListener('click', function () {
//   const update = {
//     title: 'Sample Title',
//     body: 'sample body',
//     userId: 1,
//   };

//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(update),
//   })
//     .then(response => {
//       if (response.ok) return response.json();
//       else throw new Error(response.status);
//     })
//     .then(data => {
//       console.log(data);
//     })
//     .catch(e => {
//       console.log(e);
//     });
// });
