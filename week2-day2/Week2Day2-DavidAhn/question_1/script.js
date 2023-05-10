// Fetch///

const btn = document.getElementById('fetchBtn');
btn.addEventListener('click', function () {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (response.ok) return response.json();
      else{ throw new Error(`Error: Status ${response.status}`);}
    })
    .then(data => {
        console.log('this is the data=>',data)
      const fetchP = document.getElementById('fetchP');
      fetchP.innerText = `data: ${data}`;
    })
    .catch(error => console.log(error));
});




//////XHR////////
// const xhrBtn = document.getElementById('btn');

// xhrBtn.addEventListener('click', function () {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
//   xhr.send();
//   xhr.onload = function () {
//     console.log("Received response. xhr =", xhr);
//     if (xhr.status != 200)   ////this will contact the error

//       console.log(`Error: ${xhr.status}: ${xhr.statusText}`);
//     else {  ////if successful, this will be  returned 
//       console.log("xhr.response =", xhr.response);
//       const res = JSON.parse(xhr.response);
//       console.log("JSON.parse(xhr.response) =", res);
//       const xhrP = document.getElementById('xhrP');
//       xhrP.innerText = `Title: ${res.map(
//           eachres=>{
//             return eachres.name
//           }

//       )}`;
//     };
//   };

//   xhr.onerror = function () {
//     console.log("Request failed");
//   };

//   xhr.onprogress = function (event) {
//     console.log(`Received ${event.loaded} bytes`);
//   };

// });
