////Longest Palindrome    Driver-John Lee Navigator-David Ahn
//Pseudo code
//make variable to track longest count initial valu zero
//make empty object track of the longest palindrome
//do for loop string of parameter
//let keys object
//if the key value object pair doesn't exist it will create key val pair with the initial value one
//or els if does exist increase one
//another conditional if => check if the key val pair is even number increment longest variable by two
//we wanna see eventually return
//string length of string greater longest count if yes return lognest count +1, else just return longest variable.
var longestPalindrome = function(s) {
    let longest = 0;
    let keys={};
    for (const char of s){
        keys[char] = (keys[char] || 0) + 1;
        if(keys[char] %2 == 0) longest+=2;
    }
    return s.length > longest ? longest +1 : longest;
};
//time complexity : O(n)
//space complexity : O(n)


///I thought John did well writing down the pseudocode and understanding what I wanted to write down. He also did well translating the
///pseudocode into javascript code. 



//////dfsMaxDepth     Driver-David Ahn  Navigator-John Lee

    ////define dfsMaxDepth function
    function dfsMaxDepth (node,currentDepth){
        //check if node is null//
        if(node===null){
            return currentDepth
        }
        ///increment currentDepth by 1
        currentDepth++;
        ////return height between right side and ledt right
        return Math.max(dfsMaxDepth(node.left,currentDepth),dfsMaxDepth(node.right,currentDepth))
    }
    
    var maxDepth = function(root) {
        
        ////variable of current depth//
        let currentDepth=0;
        //// return the recursion
        return dfsMaxDepth(root, currentDepth)
        
    };


    ////I thought John did well describing the helper function that was needed to help solve this problem. However, during his psuedocode
    //description, I thought it would have been better if he gave more meticulous details on the recurions and why recursion was important f
    ///for this 