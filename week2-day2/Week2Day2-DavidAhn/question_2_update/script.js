
// Promise.all waits until all jobs are resolved


const urls = [
  "https://jsonplaceholder.typicode.com/users/2",
  "https://jsonplaceholder.typicode.com/posts?userId=2",
  "https://jsonplaceholder.typicode.com/todos?userId=2",
]

const fetchData = async () => {
  try {
    const response = await Promise.all(
      urls.map(url => fetch(url).then(res => res.json()))
    )

    let userInfo=response[0];
    let userPost=response[1];
    let userToDo=response[2];
    console.log('userInfo=>',userInfo);
    console.log('userPost=>',userPost);
    console.log('userToDo=>',userToDo)
    const searchInput=document.getElementById('searchInput');
    console.log('searchInput=>',searchInput)
    searchInput.addEventListener('input',(e)=>{
    const value=e.target.value.toLowerCase()/////this is whatenver we type in///
    console.log('this is value=>',value);
    if(value==userInfo.id){
      console.log(userInfo.name)
      const tableInfo=document.getElementById('tableInfo');
      tableInfo.innerText=`
         Name: ${userInfo.name}

         UserName: ${userInfo.username}

         E-mail:${userInfo.email}

         Post: ${
          userPost.map((eachPost)=>{
            return `
            Title: ${eachPost.title}

            Body: ${eachPost.body}
            `
          })
         }
         
         ToDo: ${
          userToDo.map((toDo)=>{
            return `
            Title: ${toDo.title}

            completed: ${toDo.completed}
            `
          })
         }
         `
   }

})
  } catch (error) {
    console.log("User was not found. Please try another user ID.")
  }
}


fetchData()
