let form=document.querySelector('form');
let tableBody=document.querySelector('tbody')
let tableForDelete=document.querySelector('table')

function addProduct(event){
    event.preventDefault();
    const productName=document.getElementById('productName').value;
    const productCategory=document.getElementById('productCategory').value;
    const productPrice=document.getElementById('productPrice').value;
    tableBody.innerHTML+=`
    <tr> 
        <td>${productName}</td>
        <td>${productCategory}</td>
        <td>${productPrice}</td>   
        <td><button class="deleteBtn">Delete</button></td>
    </tr>
    `
}

function deleteProduct(e){
    e.target.closest("tr").remove();
}

form.addEventListener('submit',addProduct)
tableForDelete.addEventListener('click',deleteProduct)