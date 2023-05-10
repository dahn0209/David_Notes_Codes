function lengthOfLongestSubstring(s) {
    let max=0;
    let begin=0;
    let map={};

    for(let end=0;end<s.length;end++){
        ////checks if I have seen a character before////
        if(map[s[end]]!==undefined && map[s[end]]>=begin){
            begin=map[s[end]]+1
        }
/////the key of map is the letter and value of map is index where we saw the letter last
        map[s[end]]=end;
       
        max=Math.max(max,end-begin+1)
    }

    return max
};


let form=document.querySelector('form');
let tableBody=document.querySelector('tbody');

function addProduct(event){
    event.preventDefault();
    const string=document.getElementById('string').value;
   console.log('string=>',string)
    tableBody.innerHTML+=`
    <tr> 
        <td>${string}</td>
        <td>${lengthOfLongestSubstring(string)}</td>
    </tr>
    `
}

form.addEventListener('submit',addProduct)
