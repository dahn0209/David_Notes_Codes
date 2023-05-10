document.getElementById("req").addEventListener('click', () => {
  const url = "http://localhost:3000";
  fetch(url).then(res => res.json()).then(data => console.log(data));
});