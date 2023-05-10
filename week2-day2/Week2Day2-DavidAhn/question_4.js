// Leetcode #66: Plus One ------> Navigator:David  Ahn    Driver: Gino Liu

/////Initital answer which was wrong////
// const plusOne = (num) => {
//     // declear var to empty string
//         let x = ""
//     // loop thru array to access each element
//         for(let eachNum of num){
//     // add each num to x var
//             x += eachNum 
//         }
//     // convert x to int
//         let int = parseInt(x)
//     // delcear sum variable get int + 1
//         let sum = int + 1
//     // convert sum back to string
//         let sumString = sum.toString()
//     // loop sumString
//         // create empty array to store result
//         let arr = []
//         for(let each of sumString){
//             let eachInt = parseInt(each)
//             arr.push(eachInt)
//         }
//     return arr
// };


/////Right Answer////
// var plusOne = function(digits) {
        ////loop through digits decrementing to start with the right most elment
//     for(let i=digits.length-1;i>=0;i--){
    ////check if element is under 9,
//         if(digits[i]<9){   //////[5,6]--->[5,7]
//             digits[i]=digits[i]+1
//             return digits
////////check if element is 9 
//         }else{//49  if current digit is 9    [4,9]---> [5,0]
//             digits[i]=0
//         }
//     }
//     //99->100//   [9,9]-->[0,0]-->[1,0,0]
////// // check to see if the increase will increase the length of digits with unshift method
//     digits.unshift(1);
//     return digits
// };

/////while Gino was being the Driver, he did well asking questions about limitations to me. However, there were some instances
////he would think ahead and try to write code before I would say something. 




// Leetcode #70: Climbing Stairs      ---->Navigator:Gino Liu    Driver: David Ahn;



// var climbStairs = function(n) {
    
//     ///declare variable of array that takes [0,1];
//     let arr=[1,1];
//     ////loop through n incrementing///
//     for(let i=2;i<=n;i++){
//         //////arr[i] to equal fibonnacci formula
//         arr[i]=arr[i-1]+arr[i-2];
//     }
//     return( arr[arr.length-1])
// };

////Gino did well explaining about the Fibonnaci Sequences while being the Navigator for this problem. He did well asking me asking
///me for help with debugging in the end. 