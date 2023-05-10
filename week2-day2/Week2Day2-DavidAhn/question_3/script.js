
async function delayedRequestion(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.log(error);
  }
}



setTimeout(delayedRequestion('https://jsonplaceholder.typicode.com/users'), 2000);