
////Roman to Intger//////      Navigator-David   Driver- Jason

// As a driver, I thought Jason did well following my instructions on the psuedocodes and what to type down while I was explaining the procedure. 
// However, there was one instance he did think ahead and went beyond what I was trying to describe. 
// This was when he wanted to use continue over c++ to skip over an iteration



var romanToInt = function(s) {
    // have a mapping of roman numerals to integers
    const obj = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    
    // variable to store answer
    let ans = 0;
    
    // iterate through the string
    for (let c=0; c < s.length; c++) {
        // access current element and next element
        const num = obj[s[c]];
        const numNext = obj[s[c + 1]];
        
        // check for edge case -> num < numNext
        if (num < numNext) {
            ans += numNext - num;
            c++;
        } else {
            // normal case
            ans += num;
        } 
    }
    
    return ans;
};

/////O(N) because there is only one for loop    ///O(1)  because answer uses constant space


////Longest Common Prefix   Driver:David     Navigator:Jason

//Overall, Jason did well communicating what he wanted me to do during this coding problem. 
// One issue we did have were having different terminlogies for certain codes.
//Other issue was his indecisiveness, which made me go back and forth within the problem. Sometimes, this indecisiveness made it convoluting
//sometimes.


/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    
    ////have a variable that stored the longest prefix////
    let result='';
    ////have a starting index to loop through each word in the array///
    let idx=0
    ////use the while root it return undefined////
    while(true){
        ///create a variable to save the first letter of the first word in strs array
        let firstWordofStrs=strs[0][idx];
        ///loop through each element in strs in paramenter///
        for(let i=0;i<strs.length;i++){
            ///make varaible for current element in strs
            let currentElement=strs[i];
            ////see if current lutter of current is undefined//
            if(currentElement[idx]===undefined){
                ///if it is undefined, then we have reach the end of the currentElement
                ///therefore result result
                return result
            }
        ///see if the first letter of currentElement is not equal to firstsWordofStrs
            if(currentElement[idx]!==firstWordofStrs){
                //if it is not equal, we will return result//
                return result
            }
        }
        ///update the result with firstWordofStrs///
        result+=firstWordofStrs
        // increment the idx
        idx++
    }

};


//////time complexity---> O(N*M)--->n--->length of strs arr m-->length of shortest word
/////O(N)

/////Space complexity---->O(M)--->O(1) because  the length of the longest common prefix