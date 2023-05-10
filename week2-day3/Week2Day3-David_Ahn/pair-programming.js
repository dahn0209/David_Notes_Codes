
// //psuedo code
// // two empty obj {}
// // for loop s.length 
// // let eachELS=s[i], let eachELT=t[i]
// // find value of object s=t
// // if not, return false
// // else finding value of object s and t 
// //when you find the object 
// //after for loop return true 

// var isIsomorphic = function(s, t) {      Driver-Amy   Navigator-David
//     let obj1 = {}
//     let obj2 = {}
//     for(let i=0; i<s.length; i++){
//         let eachELS=s[i]; let eachELT=t[i];
//         if (obj1[eachELS] !== obj2[eachELT]){
//              return false;
//         }else {obj1[eachELS] = i
//          obj2[eachELT]=i   
//         }
           
//     }
//     return true
    
// };

/////when Amy was the Driver, I thought Amy had some issues understanding some of the terminologies 
///and she kept asking question. One example included when she kept asking why I kept trying to define
//the variable for each element of s and t string when it loops



// var reverseList = function(head) {      Driver-David   Navigator-Amy
//     //////variable that equal to null////
    
//     let nodeVariable=null;
//     let nodeVariable2=null;
    
//     ///use while loop where head is not equal to null///
    
//     while(head!==null){
//         ///define nodeVariable as head from parameter
//         nodeVariable=head;
//         ////change head to head.next which is the next node///
//         head=head.next;
//         nodeVariable.next=nodeVariable2;
//         nodeVariable2=nodeVariable;
//     }
    
//     return nodeVariable2;
    
    
// };

//I believe Amy could have improved with navigating by not telling me word by word what to type and wrtie.
//Amy can work on giving generic explanation when doing pseudocode////