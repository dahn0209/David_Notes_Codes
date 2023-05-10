for(var i=1;i<=3;i++){
    document.getElementById(`btn${i}`).addEventListener('click',function(){
        console.log(`you just clicked#${i} button`);
    })
}


// a) when the user clicks on button 3, the output will be 'you just clicked#4 button' because the var i in the for loop.
//The var is functionally scoped and so it will add one more count to the i.

//b) Before ES6, this issue would have been fixed without a template literal and It would have 
// required a string interpolation. Instead of using var, I would replace the var with either a let or const.
// This would look like this 


for(let i=1;i<=3;i++){
    document.getElementById('btn'+i).addEventListener('click',function(){
        console.log('you just clicked#'+i+' button');
    })
}







